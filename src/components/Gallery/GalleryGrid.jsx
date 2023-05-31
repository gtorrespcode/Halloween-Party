import gallery from "../../data/gallery"

export default function GalleryGrid() {

    
    
    return (
        <div className="hidden w-[46.875rem] h-[30.6875rem] md:grid md:grid-cols-4 md:gap-6">
            { gallery.map((element, index) => {  return index === 1 || index === 4  || index === 7 ? <div key={index} className={ element + " bg-cover bg-center border-2 border-primary rounded-[0.5rem] col-span-2"}></div> : <div key={index} className={ element + " bg-cover bg-center border-2 border-primary rounded-[0.5rem] "}></div>} ) }

        
           
        </div>
    )
}





