import { sanityClient } from "@/lib/sanityClient";

export type CommunityResource = {
  _id: string;
  title: string;
  address: string;
  description: string;
  categories?: {
    _id: string;
    title: string;
    slug?: { current: string };
  };
  image?: {
    asset?: {
      _id: string;
      url: string;
    };
    alt?: string;
  };
};

export const ALL_COMMUNITY_RESOURCES_QUERY = /* groq */ `
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
