import MyCarousel from "./GalleryCarousel"
import GalleryGrid from "./GalleryGrid"
import Line from "../global/Line"

export default function Gallery (){

    return (
        <section id="gallery" className="text-mobileP w-full font-secundary text-primary text-center flex flex-col justify-center items-center px-8 mb-12  gap-y-12 md:gap-y-12
                            md:text-desktop">
            <p className="md:w-[31.25rem] ">Esse é o terceiro ano da nossa festa. Como você pode imaginar, já rolou muita <span className="text-info">Atividade Paranormal</span> por aqui. </p>
            
                
            
            <GalleryGrid />
            <MyCarousel/>
            
            <p className="mb-12">Agora é sua vez de ser <span className="text-info">O Iluminado</span>.</p>
            <Line />
        </section>
    )
}


//  Estilo para grid --> className="flex flex-row justify-center items-center"
{/* <GalleryGrid/> */}