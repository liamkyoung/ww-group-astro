import { s as sanityClient } from './sanityClient_DxVeBFpp.mjs';

const GET_HOME_PAGE_PROJECTS = `*[_type == "project" && defined(publishedAt)]
| order(publishedAt desc)[0...4]{
  title,
  "image": slider[0].image,
}`;
async function getProjectsByTeammateSlug(teammateSlug) {
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
async function getAllProjects() {
  const query = `*[_type == "project"] 
  | order(coalesce(publishedAt, _createdAt) desc) {
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

export { GET_HOME_PAGE_PROJECTS as G, getProjectsByTeammateSlug as a, getAllProjects as g };
