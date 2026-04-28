import { furnituresPictures } from "../Pictures/furnitures/furnituresPictures.jsx";

import Gallery from "./Gallery.jsx";

function PictureList() {
  return <Gallery pictureData={furnituresPictures} />;
}

export default PictureList;
