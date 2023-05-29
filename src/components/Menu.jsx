import MenuItem from "./MenuItem"
import {savory, candy, drink} from "../data/menuItems"

export default function Menu (){

    return (
        <div className="text-mbileP w-full font-secundary text-primary text-center flex flex-col justify-center items-center px-8 py-4 gap-y-8
                         md:text-desktop">
            <p className="md:w-[31.25rem]">Para matar sua fome nós temos <span className="text-info">O Poço</span>, ou melhor, alguns aperitivos para ninguém entrar em <span className="text-info">Pânico</span>.</p>
            <div className="flex flex-col justify-center items-center py-2 gap-y-8
                            md:flex-row md:gap-x-8">
            <MenuItem bg="savory" type="Salgados" items={savory}/>
            <div className="border-y-2 py-6 border-primary
                            md:border-y-0 md:border-x-2 md:px-6 md:py-0">
            <MenuItem bg="candy" type="Doces" items={candy}/>
            </div>
            <MenuItem bg="drinks" type="Bebidas e Drinks" items={drink}/>
            </div>


            

        </div>
    )
}