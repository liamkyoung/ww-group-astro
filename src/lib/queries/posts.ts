// src/lib/sanityQueries.ts
import type { SanityPost, SanityPostBody } from "@/globals/types/post";
import { sanityClient } from "../sanityClient";

export async function getAllPosts(): Promise<SanityPost[]> {
  const query = `*[_type == "post"] | order(publishedAt desc){
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage
  }`;
  return sanityClient.fetch(query);
}

export async function getPostBySlug(
  slug: string,
): Promise<SanityPostBody | null> {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    publishedAt,
    body,
    mainImage
  }`;
  return sanityClient.fetch(query, { slug });
}
