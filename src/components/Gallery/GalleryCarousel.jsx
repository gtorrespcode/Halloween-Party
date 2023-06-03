/* eslint-disable no-unused-vars */

import { Carousel } from "react-responsive-carousel";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import carousel from "../../data/carousel";

export default function MyCarousel() {
  const renderArrowPrev = (clickHandler, hasPrev, label) => (
    <button
      onClick={clickHandler}
      disabled={!hasPrev}
      className="absolute top-[50%] left-0 z-10"
    >
      <BiLeftArrowAlt className="text-[1.5rem]" />
    </button>
  );

  const renderArrowNext = (clickHandler, hasNext, label) => (
    <button
      onClick={clickHandler}
      disabled={!hasNext}
      className="absolute top-[50%] right-0 z-10"
    >
      <BiRightArrowAlt className="text-[1.5rem]  " />
    </button>
  );

  return (
    <div className="relative md:hidden">
      <Carousel
        renderArrowNext={renderArrowNext}
        renderArrowPrev={renderArrowPrev}
        showStatus={false}
        showArrows={true}
        showThumbs={false}
        // interval={5000}
        // autoPlay={true}
        // infiniteLoop={true}
        transitionTime={600}
        className="w-[16.25rem] h-[16.25rem] border-2 border-primary  md:hidden"
      >
        {carousel.map((element, index) => {
          return (
            <div key={index} className="h-[16rem] ">
              <img src={element} className=" h-full object-cover  " />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

// {props.galleryItem.map(item, index) => <li key={index}>{item}</li>}
