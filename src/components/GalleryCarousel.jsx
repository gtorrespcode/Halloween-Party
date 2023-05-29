
import { Carousel } from "react-responsive-carousel"
export default function MyCarousel() {

    

    return (
        
        <Carousel  
        
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
        
    );
}

// {props.galleryItem.map(item, index) => <li key={index}>{item}</li>}