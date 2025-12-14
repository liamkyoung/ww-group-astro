import { s as sanityClient } from './sanityClient_DxVeBFpp.mjs';

async function getAllPosts() {
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
async function getPostBySlug(slug) {
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

export { getAllPosts, getPostBySlug };
