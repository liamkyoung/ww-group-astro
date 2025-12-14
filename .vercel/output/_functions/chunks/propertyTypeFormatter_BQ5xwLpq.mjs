import { s as sanityClient } from './sanityClient_DxVeBFpp.mjs';

const LISTING_PREVIEWS_QUERY = `
  *[_type == "listing" && defined(slug.current)] 
    | order(coalesce(_updatedAt, _createdAt) desc) {
      _id,
      "slug": slug.current,
      title,
      location,
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
const LISTING_BY_SLUG_QUERY = `
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
const LISTING_SLUGS_QUERY = `
  *[_type == "listing" && defined(slug.current)]{
    "slug": slug.current
  }
`;
const LISTING_PREVIEWS_BY_AGENT_SLUG_QUERY = `
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
async function getAllListingPreviews() {
  const data = await sanityClient.fetch(
    LISTING_PREVIEWS_QUERY
  );
  return data ?? [];
}
async function getListingPreviewsByAgentSlug(agentSlug) {
  const res = sanityClient.fetch(LISTING_PREVIEWS_BY_AGENT_SLUG_QUERY, {
    agentSlug
  });
  return res;
}

function formatDollarAmount(amount) {
  let num = typeof amount === "string" ? parseFloat(amount) : amount;
  if (isNaN(num)) {
    return "";
  }
  num = Math.round(num);
  return "$" + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function formatPropertyType(propType) {
  if (!propType) return "";
  switch (propType) {
    case "All":
      return "All";
    case "singleFamily":
      return "Single-Family";
    case "multiFamily":
      return "Multi-Family";
    case "townhouse":
      return "Townhouse";
    case "condo":
      return "Condominium";
    case "co-op":
      return "Co-op";
    case "apt":
      return "Apartment";
    case "mobileHome":
      return "Mobile Home";
    case "vacationHome":
      return "Vacation Home";
    case "seniorLivingHome":
      return "Senior Living Home";
    case "shoppingCenter":
      return "Shopping Center";
    case "bizOpportunity":
      return "Business Opportunity";
    case "office":
      return "Office";
    case "retail":
      return "Retail Property";
    case "industrial":
      return "Industrial Property";
    case "mixedUse":
      return "Mixed Use";
    case "hotel":
      return "Hotel";
    case "motel":
      return "Motel";
    case "restaurant":
      return "Restaurant";
    case "healthcareFacility":
      return "Healthcare Facility";
    case "storageUnit":
      return "Storage Unit";
    case "vacantLand":
      return "Vacant Land";
    case "agriculturalLand":
      return "Agricultiral Land";
    case "timberland":
      return "Timberland";
    case "ranchLand":
      return "Ranch Land";
    case "recreationalLand":
      return "Recreational Land";
    case "developmentLand":
      return "Development Land";
    case "religion":
      return "Religious Building";
    case "school":
      return "School";
    case "university":
      return "University";
    case "governmentBuilding":
      return "Government Building";
    case "cemetery":
      return "Cemetery";
    case "airport":
      return "Airport";
    case "utility":
      return "Utility";
    case "reit":
      return "Real Estate Investment Trust (REIT)";
    case "rentalProperty":
      return "Rental Property";
    case "fixAndFlip":
      return "Fix-and-Flip Property";
  }
  return "N/A";
}
function formatZoningType(zType) {
  if (!zType) return "";
  switch (zType[0]) {
    case "C":
      return "Commercial";
    case "r":
      return "Residential";
    case "i":
      return "Industrial";
    default:
      return "N/A";
  }
}
function formatListingType(listingType) {
  if (!listingType) return "";
  switch (listingType) {
    case "forSale":
      return "For Sale";
    case "lease":
      return "Lease";
    case "forSaleLease":
      return "For Sale / Lease";
    default:
      return "N/A";
  }
}
function formatPaymentFrequency(paymentFreq) {
  if (!paymentFreq) return "";
  switch (paymentFreq) {
    case "oneTime":
      return "";
    case "dollarPerSqPerYear":
      return "/ sqft / yr";
    case "monthly":
      return "/ month";
    case "yearly":
      return "/ yr";
    default:
      return "N/A";
  }
}

export { LISTING_SLUGS_QUERY as L, formatPropertyType as a, formatListingType as b, formatPaymentFrequency as c, formatZoningType as d, LISTING_BY_SLUG_QUERY as e, formatDollarAmount as f, getAllListingPreviews as g, getListingPreviewsByAgentSlug as h };
