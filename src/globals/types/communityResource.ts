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
