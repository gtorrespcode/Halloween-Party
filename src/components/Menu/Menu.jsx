import MenuItem from "./MenuItem";
import Movie from "../global/Movie";
import Line from "../global/Line";
import { savory, candy, drink } from "../../data/menuItems";

export default function Menu() {
  return (
    <section
      id="menu"
      className="text-mobileP w-full font-secundary text-primary text-center flex flex-col justify-center items-center px-8  mb-12 gap-y-8 md:gap-y-16
                         md:text-desktop"
    >
      <p className="lg:w-[31.25rem] md:pt-12">
        Para matar sua fome nós temos <Movie index={4} movie="O Poço" />, ou melhor, alguns aperitivos para ninguém entrar em{" "}
        <Movie index={5} movie="Pânico" />.
      </p>
      <div
        className="flex flex-col justify-center items-center py-2 gap-y-12 md:mb-24
                            lg:flex-row lg:gap-x-8"
      >
        <MenuItem bg="bg-savory" type="Salgados" items={savory} />
        <div
          className="border-y-2 py-6 border-primary
                            lg:border-y-0 lg:border-x-2 lg:px-6 lg:py-0"
        >
          <MenuItem bg="bg-candy" type="Doces" items={candy} />
        </div>
        <MenuItem bg="bg-drinks" type="Bebidas e Drinks" items={drink} />
      </div>
      <Line />
    </section>
  );
}
