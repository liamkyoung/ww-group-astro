import type { SanityImage } from "@/lib/schemas";
import type { SanityReference } from "@sanity/client";

export interface Project {
  _id: string;
  _type: "project";
  _createdAt?: string;
  _updatedAt?: string;
  title: string;
  description: string;
  location: ProjectLocation;
  price?: string;
  agents?: SanityReference[];
  slider?: ProjectSlide[];
  website?: string;
  instagram?: string;
  publishedAt?: string;
  slug: {
    current: string;
  };
}

export interface ProjectPreview {
  _id: string;
  title: string;
  description: string;
  location: ProjectLocation;
  website?: string;
  instagram?: string;
  slider?: ProjectSlide[]; // ONLY FIRST IMAGE IF POSSIBLE
  publishedAt?: string;
  slug: {
    current: string;
  };
}

export interface ProjectMin {
  title: string;
  image: SanityImage;
}

export interface ProjectSlide {
  _key?: string; // Sanity array items usually have _key
  image: SanityImage;
}

export interface ProjectLocation {
  address?: string; // Full Address
  streetAddress?: string; // Street
  neighborhood?: string;
  city?: string;
  county?: string;
  state?: string;
  zipCode?: string;
  latitude?: number;
  longitude?: number;
}
