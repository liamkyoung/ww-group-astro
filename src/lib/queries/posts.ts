// src/lib/sanityQueries.ts
import { sanityClient } from "../sanityClient";

export type SanityPost = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt?: string;
  mainImage?: {
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
};

export type SanityPostBody = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  description?: string;
  excerpt?: string;
  mainImage?: {
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
  body: any;
  // add other fields from your Sanity schema as needed
};

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
