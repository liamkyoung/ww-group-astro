import type { SanityReference } from "@sanity/client";
import type { SanityImage } from "../schemas";
import { sanityClient } from "../sanityClient";
import type {
  Project,
  ProjectMin,
  ProjectPreview,
} from "@/globals/types/project";

export interface ProjectSliderItem {
  _key: string;
  image: SanityImage;
}

export const GET_HOME_PAGE_PROJECTS = `*[_type == "project" && defined(publishedAt)]
| order(rank asc)[0...4]{
  title,
  "image": slider[0].image,
}`;

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const query = `*[_type == "project" && slug.current == $slug][0]{
    ...
}`;
  return sanityClient.fetch(query, { slug });
}

export async function getProjectsByTeammateSlug(
  teammateSlug: string,
): Promise<ProjectMin[] | null> {
  const query = `*[
    _type == "project" &&
    $teammateSlug in agents[]->slug.current
  ] | order(publishedAt desc){
    title,
    slug,
    "image": slider[0].image
  }`;

  return sanityClient.fetch(query, { teammateSlug });
}

export async function getAllProjects(): Promise<ProjectPreview[] | null> {
  const query = `*[_type == "project"] 
  | order(rank asc) {
    _id,
    title,
    description,
    location,
    website,
    instagram,
    "slider": slider[0...1]{
      _key,
      image
    },
    publishedAt,
    slug
  }`;
  return sanityClient.fetch(query);
}
