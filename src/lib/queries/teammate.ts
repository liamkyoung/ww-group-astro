import type { Teammate, TeammatePreview } from "@/globals/types/teammate";
import { sanityClient } from "../sanityClient";
import type { SanityImage } from "../schemas";

const ALL_TEAMMATE_PREVIEW_QUERY = `
  *[_type == "teammate"]
  | order(rank asc) {
    _id,
    title,
    profilePic,
    email,
    phoneNumber,
    instagram,
    facebook,
    linkedin,
    strengths,
    jobTitle,
    "slug": slug.current
  }
`;

export async function getAllTeammates(): Promise<TeammatePreview[]> {
  const data = await sanityClient.fetch<TeammatePreview[]>(
    ALL_TEAMMATE_PREVIEW_QUERY,
  );
  return data;
}

const ALL_TEAMMATE_SLUGS_QUERY = `
  *[_type == "teammate" && defined(slug.current)]{
    "slug": slug.current
  }
`;

export async function getAllTeammateSlugs(): Promise<string[]> {
  const data = await sanityClient.fetch<{ slug: string }[]>(
    ALL_TEAMMATE_SLUGS_QUERY,
  );
  return data.map((item) => item.slug);
}

const TEAMMATE_BY_SLUG_QUERY = `
  *[_type == "teammate" && slug.current == $slug][0]{
    _id,
    _type,
    title,
    profilePic,
    jobTitle,
    profileIntroduction,
    bioParagraph,
    strengths,
    yearsOfExperience,
    rank,
    favoritePlaces[]{
      _ref,
      _type
    },
    phoneNumber,
    officeNumber,
    email,
    instagram,
    facebook,
    linkedin,
    "slug": slug.current
  }
`;

export async function getTeammateBySlug(
  slug: string,
): Promise<Teammate | null> {
  const teammate = await sanityClient.fetch<Teammate | null>(
    TEAMMATE_BY_SLUG_QUERY,
    { slug },
  );
  return teammate;
}
