export interface Involvement {
  _id: string;
  _type: "involvement";
  title: string;
  highlight: string;
  description: string;
  image: SanityImage;
  linkToGroupWebsite?: string;
}
