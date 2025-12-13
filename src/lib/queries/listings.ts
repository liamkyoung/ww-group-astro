// /lib/queries/listing.ts
import { sanityClient } from "@/lib/sanityClient";
import type { Listing, ListingPreview } from "@/globals/types/listing";

export const LISTING_PREVIEWS_QUERY = `
  *[_type == "listing" && defined(slug.current)] 
    | order(coalesce(_updatedAt, _createdAt) desc) {
      _id,
      "slug": slug.current,
      title,

      // NEW: full nested location object
      location,

      // Optional denormalized fields for convenience / backward compatibility
      "address": location.address,
      "latitude": location.latitude,
      "longitude": location.longitude,

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

      // Resolve agents references to teammate documents
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

    // Normalize imageGallery items to { image, caption }
    "imageGallery": imageGallery[]{
      "image": image,
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

/**
 * Fetch all listings as ListingPreview[]
 */
export async function getAllListingPreviews(): Promise<ListingPreview[]> {
  const data = await sanityClient.fetch<ListingPreview[]>(
    LISTING_PREVIEWS_QUERY,
  );
  return data ?? [];
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
  return listing ?? null;
}
