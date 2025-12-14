import { s as sanityClient } from './sanityClient_DxVeBFpp.mjs';

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
async function getAllTeammates() {
  const data = await sanityClient.fetch(
    ALL_TEAMMATE_PREVIEW_QUERY
  );
  return data;
}
const ALL_TEAMMATE_SLUGS_QUERY = `
  *[_type == "teammate" && defined(slug.current)]{
    "slug": slug.current
  }
`;
async function getAllTeammateSlugs() {
  const data = await sanityClient.fetch(
    ALL_TEAMMATE_SLUGS_QUERY
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
async function getTeammateBySlug(slug) {
  const teammate = await sanityClient.fetch(
    TEAMMATE_BY_SLUG_QUERY,
    { slug }
  );
  return teammate;
}

export { getTeammateBySlug as a, getAllTeammateSlugs as b, getAllTeammates as g };
