/* eslint-disable no-unused-vars */

import { Carousel } from "react-responsive-carousel"
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi"

export default function MyCarousel() {

    // eslint-disable-next-line no-unused-vars
    const renderArrowPrev = (clickHandler, hasPrev, label) => (
        <button
          onClick={clickHandler}
          disabled={!hasPrev}
          className="absolute top-[50%] left-0 z-10"
        >
          <BiLeftArrowAlt className="text-[1.5rem]"/>
        </button>
      );
    
      const renderArrowNext = (clickHandler, hasNext, label) => (
        <button
          onClick={clickHandler}
          disabled={!hasNext}
          className="absolute top-[50%] right-0 z-10"
        >
          <BiRightArrowAlt className="text-[1.5rem]  "/>
        </button>
      );
    

    

    return (
        <div className="relative">
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
                    className="w-[16.25rem] h-[16.25rem] md:hidden"
                    >
                    
            
                <img src="/Images/card_1.jpg"/>
                <img src="/Images/card_0.jpg"/>
                <img src="/Images/card_2.jpg"/>
                
            
        </Carousel>
        </div>
        
    );
}

// {props.galleryItem.map(item, index) => <li key={index}>{item}</li>}