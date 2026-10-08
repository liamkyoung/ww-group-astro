// /lib/queries/listing.ts
import { sanityClient } from "@/lib/sanityClient";
import type { Listing, ListingPreview } from "@/globals/types/listing";

export const LISTING_PREVIEWS_QUERY = `
  *[_type == "listing" && defined(slug.current)] 
    | order(coalesce(_updatedAt, _createdAt) desc) {
      _id,
      "slug": slug.current,
      title,
      location,
      overrideAddress,
      addressOverride,
      sqFt,
      sqFtLand,
      sqFtLot,
      bedCount,
      bathroomCount,
      coverImage,
      price,
      rentalPrice,
      isPriceNegotiable,
      listingType,
      paymentFrequency,
      "updatedAt": coalesce(_updatedAt, _createdAt),
      "agents": agents[]->{
        _id,
        _type,
        title,
        profilePic,
        jobTitle,
        strengths,
        yearsOfExperience,
        "slug": slug.current
      },

      "propertyType": propertyTypes
    }
`;

/**
 * 2) GET SPECIFIC LISTING as Listing
 * Returns full detail for a single listing by slug
 */
export const LISTING_BY_SLUG_QUERY = `
  *[_type == "listing" && slug.current == $slug][0]{
    _id,
    _type,
    "slug": slug.current,
    title,
    location,
    overrideAddress,
    addressOverride,
    listingType,
    isPriceNegotiable,
    price,
    rentalPrice,
    paymentFrequency,

    "agents": agents[]->{
      _id,
      _type,
      title,
      profilePic,
      jobTitle,
      strengths,
      yearsOfExperience,
      "slug": slug.current
    },

    listingFlyer{
      _type,
      "url": asset->url,
      "mimeType": asset->mimeType,
      "originalFilename": asset->originalFilename
    },
    zillowLink,
    virtualTourLink,
    coverImage,

    // Normalize imageGallery items to { image, caption }.
    // Legacy items wrap the image in a "galleryImage" object; newer items are the image itself.
    "imageGallery": imageGallery[]{
      "image": select(_type == "galleryImage" => image, { asset, crop, hotspot }),
      caption
    },

    propertyTypes,
    propertySubtype,
    sqFt,
    sqFtLand,
    sqFtLot,
    bedCount,
    bathroomCount,
    overviewText,
    areaOverview,
    fullDescription,
    zoningType,
    buildingClass,
    tenancyType,
    yearBuilt,
    yearRenovated,
    occupancy,

    // Highlights stored as array of objects -> flatten to string[]
    "highlights": highlights[].highlightText,

    heat,
    cool,
    electricity,
    water,
    waste,
    sewer,
    internet,
    lighting,
    hasParking,
    parkingDescription,
    "updatedAt": coalesce(_updatedAt, _createdAt)
  }
`;

export const LISTING_SLUGS_QUERY = `
  *[_type == "listing" && defined(slug.current)]{
    "slug": slug.current
  }
`;

export const LISTING_PREVIEWS_BY_AGENT_SLUG_QUERY = `
  *[
    _type == "listing" &&
    defined(slug.current) &&
    $agentSlug in agents[]->slug.current
  ]
  | order(coalesce(_updatedAt, _createdAt) desc) {
    _id,
    "slug": slug.current,
    title,
    location,
    overrideAddress,
    addressOverride,
    sqFt,
    sqFtLand,
    sqFtLot,
    bedCount,
    bathroomCount,
    coverImage,
    price,
    isPriceNegotiable,
    listingType,
    paymentFrequency,
    "updatedAt": coalesce(_updatedAt, _createdAt),
    "propertyType": propertyTypes
  }
`;

/**
 * When "Override Displayed Address" is checked in the studio, any filled-in
 * override fields replace the searched (Google) values. Also exposes the full
 * address at the top level for listing cards and map pins.
 */
function applyAddressOverride<T extends Listing | ListingPreview>(
  listing: T,
): T {
  const override = listing.overrideAddress ? listing.addressOverride : null;
  if (!override) {
    return { ...listing, address: listing.location?.address };
  }

  const filled = Object.fromEntries(
    Object.entries(override).filter(
      ([, v]) => v !== null && v !== undefined && v !== "",
    ),
  );
  const location = { ...listing.location, ...filled } as T["location"];
  const address = [
    location.streetAddress,
    [
      location.city,
      [location.state, location.zipCode].filter(Boolean).join(" "),
    ]
      .filter(Boolean)
      .join(", "),
  ]
    .filter(Boolean)
    .join(", ");

  return {
    ...listing,
    location: { ...location, address },
    address,
  };
}

/**
 * Fetch all listings as ListingPreview[]
 */
export async function getAllListingPreviews(): Promise<ListingPreview[]> {
  const data = await sanityClient.fetch<ListingPreview[]>(
    LISTING_PREVIEWS_QUERY,
  );
  return (data ?? []).map(applyAddressOverride);
}

/**
 * Fetch a single listing by slug as Listing | null
 */
export async function getListingBySlug(slug: string): Promise<Listing | null> {
  if (!slug) return null;
  const listing = await sanityClient.fetch<Listing | null>(
    LISTING_BY_SLUG_QUERY,
    { slug },
  );
  return listing ? applyAddressOverride(listing) : null;
}

export async function getListingPreviewsByAgentSlug(
  agentSlug: string,
): Promise<ListingPreview[]> {
  const res = await sanityClient.fetch<ListingPreview[]>(
    LISTING_PREVIEWS_BY_AGENT_SLUG_QUERY,
    { agentSlug },
  );

  return (res ?? []).map(applyAddressOverride);
}
