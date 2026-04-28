import { furnituresPictures } from "../Pictures/furnitures/furnituresPictures.jsx";
import ImageCard from "./ImageCard.jsx";
import "../index.css";

function FirstImageCard() {
  const MyFirstPicture = furnituresPictures[0];
  return (
    <view className="gallery-wrapper single-card">
      <ImageCard picture={MyFirstPicture} />
    </view>
  );
}

export default FirstImageCard;
