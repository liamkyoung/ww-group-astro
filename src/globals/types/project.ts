import type { SanityReference } from "@sanity/client";

export interface Project {
  _id: string;
  _type: "project";
  _createdAt?: string;
  _updatedAt?: string;
  title: string;
  address: string;
  description: string;
  neighborhood?: string;
  latitude?: number;
  longitude?: number;
  price?: string;
  agents?: SanityReference[];
  slider?: Project[];
  website?: string;
  instagram?: string;
  publishedAt?: string;
  slug: {
    current: string;
  };
}
