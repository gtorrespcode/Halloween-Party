import { useState } from "react"

export default function Nav() {

    const [navOpen, setNavOpen] = useState(false);

    const changeNav = () => {
        setNavOpen(!navOpen);
    }


    return (
        <nav className={navOpen ? "bg-background/30 absolute top-0 left-0 h-full w-full flex flex-col py-2 px-[18px]" 
        : "bg-background/30 fixed w-full h-[55px] flex justify-end items-center px-[18px] border-b-[1px] border-black "}>

        <div className={navOpen ? "self-end" : ""}>
        <img src={ navOpen ? "/Images/Nav_Ghost_Open.png" : "/Images/Nav_Ghost.png"} 
        className="w-[35px] h-[35px] "
        onClick={changeNav}
        />
        </div>
        

        <div className={navOpen ? "basis-[90%] flex flex-col justify-center items-center font-primary text-xl text-primary decoration-1 underline gap-y-4" : "hidden"}>
        <a href="*">O CHAMADO</a>
        <a href="*">ARQUIVO MORTO</a>
        <a href="*">JOGOS MORTAIS</a>
        <a href="*">O POÇO</a>
        </div>
        
            
        </nav>
    )
}

