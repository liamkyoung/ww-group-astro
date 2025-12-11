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
