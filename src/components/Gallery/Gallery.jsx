import MyCarousel from "./GalleryCarousel";
import GalleryGrid from "./GalleryGrid";
import Movie from "../global/Movie";
import Line from "../global/Line";
import { motion } from "framer-motion";
import { animations } from "../../data/animations";

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="text-mobileP w-full font-secundary text-primary text-center flex flex-col justify-center items-center px-8 mb-12  gap-y-12 md:gap-y-12 md:text-desktop"
    >
      <p className="md:w-[31.25rem] ">
        Esse é o terceiro ano da nossa festa. Como você pode imaginar, já rolou
        muita <Movie index={2} movie="Atividade Paranormal" /> por aqui.{" "}
      </p>
      <motion.div {...animations.growUp}>
        <GalleryGrid />
        <MyCarousel />
      </motion.div>

      <p className="mb-12">
        Agora é sua vez de ser <Movie index={3} movie="O Iluminado" />.
      </p>
      <Line />
    </section>
  );
}
