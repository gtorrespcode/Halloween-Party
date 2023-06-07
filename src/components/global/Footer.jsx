export default function Footer() {
  return (
    <footer
      className="w-full h-[6.25rem] text-[0.625rem] bg-primary relative bottom-20 flex justify-between items-center px-4 py-2 md:py-6 md:justify-around md:text-base
                                md:h-[10.25rem]"
    >
      <img
        src="/Images/Pumpkin_logo.png"
        className="w-[4.375rem] h-[4.375rem] md:w-[8rem] md:h-[8rem]"
      />
      <div className="text-center">
        <p className="font-bold">Imagens</p>
        <p>Geradas por uma IA</p>
        <p>
          Background:<a target="blank" href="https://br.freepik.com/autor/macrovector"> Imagem de macroveclor</a>
        </p>
        <p>
          <a href="https://icons8.com/icon/10137/ghost">Ghost</a> icon by{" "}
          <a href="https://icons8.com">Icons8</a>
        </p>
      </div>

      <div className="text-center">
        <p className="font-bold">Contatos</p>
        <p>
          Gabriel Torres:{" "}
          <a
            href="mailto:gabrieltorresp2009@gmail.com?subject=Olá, em que posso ajudar?"
            className="italic"
          >
            gabrieltorresp2009@gmail.com
          </a>
        </p>
        <p>
          João Vitor Cardoso:{" "}
          <a
            href="mailto:devjohncb@gmail.com?subject=Olá, em que posso ajudar?"
            className="italic"
          >
            devjohncb@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
}

{
  /*  */
}
