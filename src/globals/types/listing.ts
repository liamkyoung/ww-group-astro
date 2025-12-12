import type { SanityImage } from "@/lib/schemas";
import type { Teammate } from "./teammate";
import type { MapCoords, PropertyType } from "../viewmodels";

export interface ListingGalleryImage {
  image: SanityImage;
  caption?: string;
}

export type ListingType = "forSale" | "lease" | "forSaleLease";

export type SortListings = "newest" | "leastExpensive" | "mostExpensive";

export type PaymentFrequency =
  | "oneTime"
  | "dollarPerSqPerYear"
  | "monthly"
  | "yearly";

export interface SanityFile {
  _type: "file";
  asset: {
    _type: "reference";
    _ref: string;
  };
}

export interface ListingPreview {
  _id: string; // Sanity documents always use this
  slug: string;
  title: string;
  address: string;

  // Optional property features
  sqFt?: number | null;
  sqFtLand?: number | null;
  sqFtLot?: number | null;
  bedCount?: number | null;
  bathroomCount?: number | null;

  // image (raw)
  coverImage: SanityImage;

  price?: number | null;
  isPriceNegotiable: boolean;

  listingType?: "forSale" | "lease" | "forSaleLease" | null;
  paymentFrequency?:
    | "oneTime"
    | "dollarPerSqPerYear"
    | "monthly"
    | "yearly"
    | null;

  latitude?: number | null;
  longitude?: number | null;

  updatedAt: string;

  agents?: Teammate[]; // resolved references
  propertyType: PropertyType;
}

export interface Listing {
  _id: string;
  _type: "listing";
  slug: string;
  title: string;
  address: string;
  listingType?: ListingType;
  streetAddress?: string;
  neighborhood?: string;
  city: string;
  zipCode: string;
  county: string;
  state: string;
  latitude: number;
  longitude: number;
  isPriceNegotiable: boolean;
  price?: number | null;
  rentalPrice?: number | null;
  paymentFrequency?: PaymentFrequency;
  agents?: Teammate[];
  listingFlyer?: SanityFile;
  zillowLink?: string;
  virtualTourLink?: string;
  coverImage: SanityImage;
  imageGallery?: ListingGalleryImage[];
  propertyTypes?: string; // from propertyTypes options
  propertySubtype?: string;
  sqFt?: number | null;
  sqFtLand?: number | null;
  sqFtLot?: number | null;
  bedCount?: number | null;
  bathroomCount?: number | null;
  overviewText: string;
  areaOverview?: string;
  fullDescription?: any;
  zoningType?: string;
  buildingClass?: string;
  tenancyType?: string;
  yearBuilt?: number | null;
  yearRenovated?: number | null;
  occupancy?: number | null; // 0–100
  highlights?: string[];
  heat?: string;
  cool?: string;
  electricity?: string;
  water?: string;
  waste?: string;
  sewer?: string;
  internet?: string;
  lighting?: string;
  hasParking?: boolean;
  parkingDescription?: string;
  updatedAt?: string;
}

export interface GoogleMapPin {
  name: string;
  coords: MapCoords;
  slug: string;
  coverImg?: SanityImage;
  address?: string;
  price?: number;
}

export enum SortListingsEnum {
  NEWEST = "newest",
  LEAST_EXPENSIVE = "leastExpensive",
  MOST_EXPENSIVE = "mostExpensive",
}
