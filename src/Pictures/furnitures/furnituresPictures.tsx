export interface Picture {
  src: string;
  width: number;
  height: number;
}

const BUCKET_BASE_URL = "https://summits-app-images.fr-par-1.linodeobjects.com";

export const furnituresPicturesSubArray: Picture[] = [
  {
    src: `${BUCKET_BASE_URL}/videos/test_video.webp`,
    width: 1280,
    height: 1280,
  },
  {
    src: `${BUCKET_BASE_URL}/videos/video2.webp`,
    width: 1280,
    height: 1280,

  },
  {
    src: `${BUCKET_BASE_URL}/videos/video3.webp`,
    width: 1280,
    height: 1280,
  },
  {
    src: `${BUCKET_BASE_URL}/videos/video4.webp`,
    width: 1280,
    height: 1280,
  },
];

export const furnituresPictures: Picture[] = [
  ...furnituresPicturesSubArray,
  ...furnituresPicturesSubArray,
  ...furnituresPicturesSubArray,
  ...furnituresPicturesSubArray,
  ...furnituresPicturesSubArray,
];
