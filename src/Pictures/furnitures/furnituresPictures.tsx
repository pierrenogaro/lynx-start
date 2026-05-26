export interface Picture {
  src: string;
  width: number;
  height: number;
}

const BUCKET_BASE_URL = "https://summits-app-images.fr-par-1.linodeobjects.com";

export const furnituresPicturesSubArray: Picture[] = [
  {
    src: `${BUCKET_BASE_URL}/posts/photo-6a0cb8faa2cdd714733408.jpg`,
    width: 1280,
    height: 1707,
  },
  {
    src: `${BUCKET_BASE_URL}/posts/photo-6a0f62c2d16c4226328370.jpg`,
    width: 1280,
    height: 2273,
  },
  {
    src: `${BUCKET_BASE_URL}/posts/photo-6a0f6bbe15b7a164165211.jpg`,
    width: 1280,
    height: 960,
  },
  {
    src: `${BUCKET_BASE_URL}/posts/photo-6a132c8731556749636296.jpg`,
    width: 1280,
    height: 960,
  },
  {
    src: `${BUCKET_BASE_URL}/posts/photo-6a1364c79d9b9567641853.jpg`,
    width: 1280,
    height: 1828,
  },
  {
    src: `${BUCKET_BASE_URL}/posts/photo-6a142ddb459e6166305302.jpg`,
    width: 1280,
    height: 720,
  },
];

export const furnituresPictures: Picture[] = [
  ...furnituresPicturesSubArray,
  ...furnituresPicturesSubArray,
  ...furnituresPicturesSubArray,
  ...furnituresPicturesSubArray,
  ...furnituresPicturesSubArray,
];
