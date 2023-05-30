import MyCarousel from "./GalleryCarousel"
import GalleryGrid from "./GalleryGrid"

export default function Gallery (){

    return (
        <section id="gallery" className="text-mobileP w-full font-secundary text-primary text-center flex flex-col justify-center items-center px-8 py-4 gap-y-12
                            md:text-desktop">
            <p className="md:w-[31.25rem] ">Esse é o terceiro ano da nossa festa. Como você pode imaginar, já rolou muita <span className="text-info">Atividade Paranormal</span> por aqui. </p>
            <div className="md:flex md:flex-row md:justify-center md:items-center">
                <img src="/Images/ghost_2.png"
                className="w-[16.25rem] h-[16.25rem]
                            md:hidden" />
            
             <GalleryGrid />
            <MyCarousel/>
            </div>
            <p>Agora é sua vez de ser <span className="text-info">O Iluminado</span>.</p>
            
        </section>
    )
}


//  Estilo para grid --> className="flex flex-row justify-center items-center"
{/* <GalleryGrid/> */}