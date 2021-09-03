import React, { useState } from "react";
import { Carousel as CarouselR } from "react-responsive-carousel";
import { SlideItemTypeList } from "../types/HomeTypes";
import cmsImg from "../utils/CMSImg";

interface Props {
  slides: SlideItemTypeList;
}

const Carousel: React.FC<Props> = ({ slides }) => {
  const [intervalC, setIntervalC] = useState<number>(10000);

  const editInterval = (_: number, item: React.ReactNode) => {
    const actualEl = (item as any).props.children
    if(actualEl.type === "img") {
      setIntervalC(10000)
    } else {
      setIntervalC(20000)
    }
  };

  return (
    <div style={{marginTop: "7.1rem"}}>
      <CarouselR
        className="bg-gray-300 h-ft"
        showThumbs={false}
        onChange={editInterval}
        infiniteLoop
        autoPlay
        transitionTime={1000}
        interval={intervalC}
        showStatus={false}
      >
        {slides.map((slide, key) => {
          return (
            <div key={key} className="m-auto flex justify-center">
              {slide.video ? (
                <video
                  src={cmsImg(slide.media)}
                  style={{ height: "490px" }}
                  className="object-contain"
                  autoPlay
                  loop
                  muted
                />
              ) : (
                <img
                  src={cmsImg(slide.media)}
                  style={{ height: "490px" }}
                  className="object-contain"
                  alt={slide.name}
                />
              )}
            </div>
          );
        })}
      </CarouselR>
    </div>
  );
};

export default Carousel;
