import type { SanityReference } from "@sanity/client";
import type { SanityImage } from "../schemas";
import { sanityClient } from "../sanityClient";
import type { Project } from "@/globals/types/project";

export interface ProjectSliderItem {
  _key: string;
  image: SanityImage;
}

export const GET_HOME_PAGE_PROJECTS = `*[_type == "project" && defined(publishedAt)]
| order(publishedAt desc)[0...4]{
  title,
  "image": slider[0].image
}`;

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const query = `*[_type == "project" && slug.current == $slug][0]{
    ...
}`;
  return sanityClient.fetch(query, { slug });
}

export async function getProjectsByTeammate(
  teammateId: string,
): Promise<Project[] | null> {
  const query = `*[
  _type == "project" &&
  $teammateId in agents[]._ref
]
| order(publishedAt desc){
  title,
  slug,
  "image": slider[0].image
}`;
  return sanityClient.fetch(query, { teammateId });
}

export async function getAllProjects(): Promise<Project[] | null> {
  const query = `*[_type == "project"]
        | order(publishedAt desc){
        title,
        address,
        description,
        instagram,
        slug,
        "image": slider[0].image
    }`;
  return sanityClient.fetch(query);
}
