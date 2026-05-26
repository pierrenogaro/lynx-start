import "../index.css";
import { useRef } from "@lynx-js/react";
import type { ScrollEvent } from "@lynx-js/types";
import LikeImageCard from "../Components/LikeImageCard.jsx";
import type { Picture } from "../Pictures/furnitures/furnituresPictures.jsx";
import { calculateEstimatedSize } from "../utils.jsx";
import { NiceScrollbar, type NiceScrollbarRef } from "./NiceScrollbar.jsx";

export const Gallery = (props: { pictureData: Picture[] }) => {
  const { pictureData } = props;
  const scrollbarRef = useRef<NiceScrollbarRef>(null);

  const onScroll = (event: ScrollEvent) => {
    scrollbarRef.current?.adjustScrollbar(
      event.detail.scrollTop,
      event.detail.scrollHeight,
    );
  };

  return (
    <view className="gallery-wrapper">
      <NiceScrollbar ref={scrollbarRef} />
      <list
        className="list"
        list-type="waterfall"
        column-count={1}
        scroll-orientation="vertical"
        custom-list-name="list-container"
        bindscroll={onScroll}
        scroll-event-throttle={0}
      >
        {pictureData.map((picture: Picture, index: number) => (
          <list-item
            estimated-main-axis-size-px={calculateEstimatedSize(
              picture.width,
              picture.height,
            )}
            item-key={"" + index}
            key={"" + index}
          >
            <LikeImageCard picture={picture} />
          </list-item>
        ))}
      </list>
    </view>
  );
};

export default Gallery;
