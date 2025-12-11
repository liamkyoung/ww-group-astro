import type { TeammatePreview } from "@/globals/types/teammate";
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
    "slug": slug.current
  }
`;

export async function getAllTeammates(): Promise<TeammatePreview[]> {
  const data = await sanityClient.fetch<TeammatePreview[]>(
    ALL_TEAMMATE_PREVIEW_QUERY,
  );
  return data;
}
