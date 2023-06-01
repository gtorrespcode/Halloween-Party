import DevelopersCard from "./DevelopersCard"
export default function Developers (){

    return (
        <section id="developers" className="text-mobileP text-primary font-secundary text-center pb-12 px-8 mb-12  md:text-desktop">
            <p className="mb-2">Esse site foi desenvolvido por:</p>
            <div className="flex flex-col justify-center items-center gap-y-6 my-12 md:my-6 md:flex-row md:gap-x-20">
            <DevelopersCard name="Gabriel Torres"
                            linkedin="https://www.linkedin.com/in/gabriel-torres-2112b6212/"
                            github="https://github.com/gtorrespcode"
            />
            <DevelopersCard name="João Vitor Cardoso"
                            linkedin=""
                            github="https://github.com/devjohn42"
            />
            </div>
            

        </section>
    )
}