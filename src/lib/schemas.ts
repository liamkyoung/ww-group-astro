export interface SanityImageAsset {
  _id: string;
  url: string;
  metadata?: {
    lqip?: string;
    dimensions?: {
      width: number;
      height: number;
      aspectRatio: number;
    };
    palette?: any;
  };
}

export interface SanityImage {
  asset: SanityImageAsset;
  alt?: string;
}
