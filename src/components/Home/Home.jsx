export default function Home() {
  return (
    <>
      <section
        id="home"
        className="bg-home bg-no-repeat bg-cover bg-center min-h-screen flex items-center justify-center px-8"
      >
        <img
          className="hidden md:block md:w-[25%] md:max-w-[380px] md:h-[25%] md:origin-center md:rotate-[-17deg]"
          src="/Images/Pumpkin_logo.png"
          alt="pumpking-logo"
        />
        <div className=" w-[90%] max-w-[21.875rem] min-w-[18.75rem] h-[16.875rem] bg-black/[.5] rounded-[20px] backdrop-blur-[2px] flex flex-col items-center justify-center py-8 md:w-[30%] md:max-w-[24.375rem] md:h-[14.375rem] md:py-6 md:gap-y-4 ">
          <h1 className="text-primary font-primary text-3xl text-center md:text-7xl">
            Halloween
          </h1>
          <img
            className="w-[11.25rem] h-[11.25rem] origin-center my-1 md:hidden"
            src="/Images/Pumpkin_logo.png"
            alt="pumpking-logo"
          />
          <h1 className="text-primary font-primary text-3xl text-center md:text-7xl">
            Party
          </h1>
        </div>
        <img
          className="hidden md:block md:w-[25%] md:max-w-[380px] md:h-[25%] md:origin-center md:rotate-[17deg] md:-scale-x-[1]"
          src="/Images/Pumpkin_logo.png"
          alt="pumpking-logo"
        />
      </section>
    </>
  );
}
