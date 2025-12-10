import type { SanityImage } from "../schemas";

export interface Involvement {
  _id: string;
  _type: "involvement";
  title: string;
  highlight: string;
  description: string;
  image: SanityImage;
  linkToGroupWebsite?: string;
}

export const INVOLVEMENT_QUERY = `
  *[_type == "involvement"] | order(title asc) {
    _id,
    _type,
    title,
    highlight,
    description,
    linkToGroupWebsite,
    image {
      asset->{
        _id,
        url,
        metadata { lqip, dimensions, palette }
      },
      alt
    }
  }
`;
