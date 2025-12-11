import type { SanityImage } from "@/lib/schemas";

export interface Teammate {
  _id: string;
  _type: "teammate";

  // OVERVIEW
  title: string;
  profilePic: SanityImage;
  jobTitle: string;
  profileIntroduction: string;
  bioParagraph: any; // rich text
  strengths: string;
  yearsOfExperience: number;
  rank: number;

  favoritePlaces?: Array<{
    _ref: string; // reference to communityResource
    _type: "reference";
  }>;

  // SOCIALS
  phoneNumber: string;
  officeNumber?: string;
  email: string;
  instagram?: string;
  facebook?: string;
  linkedin?: string;

  // META
  slug: string;
}

export interface TeammatePreview {
  _id: string;
  title: string;
  profilePic: SanityImage;
  strengths: string;
  email: string;
  phoneNumber: string;
  instagram?: string;
  facebook?: string;
  linkedin?: string;
  slug: string;
  rank: number;
  jobTitle: string;
}
