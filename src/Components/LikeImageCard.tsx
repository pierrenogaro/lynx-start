import "../index.css";
import type { Picture } from "../Pictures/furnitures/furnituresPictures.jsx";
import LikeIcon from "./LikeIcon.jsx";

export default function LikeImageCard(props: { picture: Picture }) {
  const { picture } = props;

  return (
    <view className="picture-wrapper">
      <image
        src={picture.src}
        style={{ width: "100%", aspectRatio: picture.width / picture.height }}
        autoplay={true}
        loop-count={0}
      />
      <LikeIcon />
    </view>
  );
}
