import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function InviteModal() {
  const { inviteModal, setInviteModal } = useContext(ModalContext);
  return (
    <>
      { inviteModal && (
        <div className="w-[100%] h-[100%] bg-background/25 backdrop-blur-[10px] fixed flex items-center justify-center z-50">
          <main className="w-[100%] max-h-[70%] mx-8 bg-primary font-secundary relative rounded-[8px] border-[8px] border-background overflow-x-hidden animate-openModal  md:w-[50%] md:max-h-[50%] md:overflow-x-hidden">
            <div className="bg-background py-[10px] text-[1.1rem] text-info uppercase flex items-center justify-center md:text-desktop">
              Muito Obrigado!
            </div>
            <div className="text-justify p-6 text-mobileP md:text-desktop">
            Opa, se você chegou até aqui agradeço de coração. Isso se trata de um projeto em desenvolvimento. A festa realmente existe mas ainda não conseguimos expandir a quantidade de pessoas por questões internas, mas definitivamente um dia tornaremos esse evento acessível a todos. 
            </div>
            <div className="absolute top-[2%] right-[2%] text-[1.3rem] md:text-[2rem] md:top-[1%] md:right-[2%] text-primary">
              <AiOutlineCloseCircle
                className="cursor-pointer"
                onClick={() => setInviteModal(false)}
              />
            </div>
          </main>
        </div>
      )}
    </>
  );
}
