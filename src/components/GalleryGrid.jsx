

export default function GalleryGrid() {

    const myData = ["bg-gImage0", "bg-gImage1", "bg-gImage2", "bg-gImage3", "bg-gImage4", "bg-gImage5", "bg-gImage6", "bg-gImage4", "bg-gImage5"];
    
    return (
        <div className="hidden w-[46.875rem] h-[30.6875rem] md:grid md:grid-cols-4 md:gap-6">
            { myData.map((element, index) => {  return index === 1 || index === 4  || index === 7 ? <div key={index} className={ element + " bg-cover bg-center border-2 border-primary col-span-2"}></div> : <div key={index} className={ element + " bg-cover bg-center border-2 border-primary"}></div>} ) }

        
           
        </div>
    )
}





