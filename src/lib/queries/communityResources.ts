import { sanityClient } from "@/lib/sanityClient";

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
