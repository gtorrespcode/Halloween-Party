import DevelopersCard from "./DevelopersCard";
import Movie from "../global/Movie";
export default function Developers() {
  return (
    <section
      id="developers"
      className="text-mobileP text-primary font-secundary text-center pb-12 px-8 mb-12 md:text-desktop"
    >
      <p className="mb-2">
        Esse site foi desenvolvido por <Movie index={9} movie="Nós" />:
      </p>
      <div className="flex flex-col justify-center items-center gap-y-6 my-12 md:my-28 md:flex-row md:gap-x-20">
        <DevelopersCard
          name="Gabriel Torres"
          image="/Images/TorresProfileH.png"
          description='Desenvolvedor Front-end. "Programação é a arte de transformar café em código."'
          linkedin="https://www.linkedin.com/in/gabriel-torres-2112b6212/"
          github="https://github.com/gtorrespcode"
        />
        <DevelopersCard
          name="João Vitor Cardoso"
          image="/Images/BarbosaProfileH.png"
          description='Desenvolvedor Front-end. "Programar e Desenvolver são ferramentas que me ajudam a pintar um quadro em branco."'
          linkedin="https://www.linkedin.com/in/jo%C3%A3o-vitor-cardoso-barbosa-407173225/"
          github="https://github.com/devjohn42"
        />
      </div>
    </section>
  );
}
