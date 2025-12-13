import type { CommunityResource } from "@/globals/types/communityResource";
import { sanityClient } from "@/lib/sanityClient";

export const ALL_COMMUNITY_RESOURCES_QUERY = `
  *[_type == "communityResource"]{
    _id,
    title,
    address,
    description,
    categories->{
      _id,
      title,
      slug
    },
    image{
      asset->{
        _id,
        url
      },
      alt
    }
  } | order(title asc)
`;

export const COMMUNITY_RESOURCES_BY_TEAMMATE_SLUG_QUERY = `
    *[
      _type == "communityResource" &&
      _id in *[
        _type == "teammate" &&
        slug.current == $slug
      ][0].favoritePlaces[]._ref
    ] | order(title asc) {
      _id,
      title,
      address,
      description,
      categories->{
        _id,
        title,
        slug
      },
      image{
        asset->{
          _id,
          url
        },
        alt
      }
    }
  `;
export async function getCommunityResourcesByTeammateSlug(
  slug: string,
): Promise<CommunityResource[]> {
  return sanityClient.fetch(COMMUNITY_RESOURCES_BY_TEAMMATE_SLUG_QUERY, {
    slug,
  });
}
