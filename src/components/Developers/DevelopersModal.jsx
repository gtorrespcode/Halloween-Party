import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function DevelopersModal() {
  const { developersModal, content, setDevelopersModal } = useContext(ModalContext);
  return (
    <>
      {developersModal && (
        <div className="w-[100%] h-[100%] bg-background/25 backdrop-blur-[10px] fixed flex items-center justify-center z-50">
          <main className="w-[100%] max-h-[70%] mx-8 bg-primary font-secundary relative rounded-[8px] border-[8px] border-primary overflow-x-hidden animate-showCard  md:w-[30%] md:max-h-[80%] md:overflow-x-hidden">
            <div className="bg-primary py-[10px] text-[1.1rem] text-background uppercase flex items-center justify-center md:text-desktop">
              {content.title}
            </div>
            <div className="flex justify-center bg-background">
            <img className="" 
            src={content.image}/>
            </div>
            
            <div className="text-justify p-6 text-mobileP md:text-desktop">
              {content.description}
            </div>
            <div className="absolute top-[2%] right-[2%] text-[1.3rem] md:text-[2rem] md:top-[1%] md:right-[2%] text-background">
              <AiOutlineCloseCircle
                className="cursor-pointer"
                onClick={() => setDevelopersModal(false)}
              />
            </div>
          </main>
        </div>
      )}
    </>
  );
}
