/* eslint-disable react/prop-types */

import { AiFillLinkedin, AiFillGithub} from "react-icons/ai";

export default function DevelopersCard(props){

    return (
        <div className="bg-primary w-[9.063rem] h-[13.313rem] rounded-[10px] py-2 flex flex-col justify-around items-center border-2 border-primary duration-500 hover:scale-[1.05] hover:duration-500 hover:drop-shadow-[0px_20px_5px_rgba(0,0,0,0.50)] md:w-[17.813rem] md:h-[26.25rem] ">
            <p className="text-background">{props.name}</p>
            <img src="/Images/drink.jpg" className=""/>
            <p className="text-background flex gap-x-2 py-2"><a href={props.linkedin}><AiFillLinkedin className=" text-[1.25rem] md:text-[2rem]" /></a> <a href={props.github}><AiFillGithub className="text-[1.25rem] md:text-[2rem]"/></a></p>
        </div>
    )
}