import Line from "./global/Line"

export default function Invite (){

    return (
        <section id="invite" className=" text-mobileP text-primary font-secundary text-center flex flex-col justify-center items-center gap-y-12 px-8 py-10
                             md:text-desktop ">
        <p className="md:w-[31.25rem]">Se você se interessou por nossa festa venha fazer parte dela. Os ingressos podem estar acabando, <span className="text-info">Corra!</span></p>
        <img className="w-[12.313rem] h-[12.313rem] rounded-[25%]
                        md:w-[25rem] md:h-[25rem]"
            src="/Images/Terrifying_House.jpg"/>
        <button className="bg-primary rounded-[10px] text-background py-1 px-8 md:w-[20.313rem]">Adquirir ingresso</button>
        <Line />
            
        </section>
    )
}