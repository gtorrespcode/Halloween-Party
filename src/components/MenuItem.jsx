

/* eslint-disable react/prop-types */
export default function MenuItem(props) {

    

    return (
                <div className={"w-[18.75rem] h-[15rem] bg-" + props.bg + " bg-cover rounded-[0.625rem] md:w-[26.6875rem] md:h-[26.3125rem]"}>
                    <div className="backdrop-blur-[2px] w-full h-full flex flex-col justify-center items-center">
                        <p className="w-[11.875rem] text-2xl text-white bg-background/70 rounded-[0.625rem] mb-6 
                                      md:w-[17.1875rem] md:text-[2rem] md:py-2">{props.type}</p>
                        <div className="w-[11.875rem] bg-background/70 text-base rounded-[0.625rem] py-2
                                        md:w-[17.1875rem] md:text-2xl md:py-6">
                            <ul>
                                {props.items.map((item, index) => <li key={index}>{item}</li> )}
                            </ul>                           
                        </div>
                    </div>
                </div>   
    )

}

