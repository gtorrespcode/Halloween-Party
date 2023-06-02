import { AiOutlineCloseCircle } from "react-icons/ai";

export default function InfoModal(props) {
  return (
    <div className="w-[100%] h-[100%] bg-background/80 backdrop-blur-[5px] fixed flex items-center justify-center z-50">
      <main className="w-[100%] max-h-[70%] mx-8 bg-primary font-secundary relative rounded-[8px] border-[8px] border-background overflow-x-hidden  md:w-[70%] md:max-h-[50%] md:overflow-x-hidden">
        <div className="bg-background py-[10px] text-[1.1rem] text-info uppercase flex items-center justify-center md:text-desktop">{props.title}</div>
        <div className="text-center p-4 text-mobileP">{props.description}</div>
        <div className="absolute top-[2%] right-[2%] text-[1.3rem] md:text-[2rem] md:top-[1%] md:right-[2%] text-primary"><AiOutlineCloseCircle/></div>
      </main>
    </div>
  );
}
