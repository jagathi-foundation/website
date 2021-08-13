import React from "react";
import { Carousel as CarouselR } from "react-responsive-carousel";
import { SlideItemTypeList } from "../types/HomeTypes";
import cmsImg from '../utils/CMSImg';


interface Props {
  slides: SlideItemTypeList;
}

const Carousel: React.FC<Props> = ({ slides }) => {
  return (
    <>
      <CarouselR
        className="bg-gray-300 h-ft"
        showThumbs={false}
        infiniteLoop
        autoPlay
        transitionTime={1000}
        interval={4000}
        showStatus={false}
      >
        {slides.map((slide, key) => {

          return (
            <div key={key}>
              <img
                src={cmsImg(slide.image)}
                style={{ height: "490px" }}
                className="object-contain"
                alt={slide.name}
              />
            </div>
          );
        })}
      </CarouselR>
    </>
  );
};

export default Carousel;
