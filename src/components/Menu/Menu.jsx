import MenuItem from "./MenuItem"
import {savory, candy, drink} from "../../data/menuItems"

export default function Menu (){

    return (
        <section id="menu" className="text-mobileP w-full font-secundary text-primary text-center flex flex-col justify-center items-center px-8 pb-12 gap-y-8
                         md:text-desktop">
            <p className="lg:w-[31.25rem]">Para matar sua fome nós temos <span className="text-info">O Poço</span>, ou melhor, alguns aperitivos para ninguém entrar em <span className="text-info">Pânico</span>.</p>
            <div className="flex flex-col justify-center items-center py-2 gap-y-8
                            lg:flex-row lg:gap-x-8">
            <MenuItem bg="bg-savory" type="Salgados" items={savory}/>
            <div className="border-y-2 py-6 border-primary
                            lg:border-y-0 lg:border-x-2 lg:px-6 lg:py-0">
            <MenuItem bg="bg-candy" type="Doces" items={candy}/>
            </div>
            <MenuItem bg="bg-drinks" type="Bebidas e Drinks" items={drink}/>
            </div>


            

        </section>
    )
}