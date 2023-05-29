export default function Home() {
  return (
    <>
      <section className="bg-home bg-no-repeat bg-cover bg-center min-h-screen flex items-center justify-center">
        <img
          className="hidden md:block md:w-[25%] md:max-w-[380px] md:h-[25%] md:origin-center md:rotate-[-17deg]"
          src="public\Images\Pumpkin_logo.png"
          alt="pumpking-logo"
        />
        <div className=" w-[90%] max-w-[350px] min-w-[300px] h-[270px] bg-black/[.5] rounded-[20px] backdrop-blur-[2px] flex flex-col items-center justify-center py-8 md:w-[30%] md:max-w-[390px] md:h-[230px] md:py-6 md:gap-y-4 ">
          <h1 className="text-primary font-primary text-3xl text-center md:text-7xl">
            Halloween
          </h1>
          <img
            className="w-[180px] h-[180px] origin-center my-1 md:hidden"
            src="/Images/Pumpkin_logo.png"
            alt="pumpking-logo"
          />
          <h1 className="text-primary font-primary text-3xl text-center md:text-7xl">
            Party
          </h1>
        </div>
        <img
          className="hidden md:block md:w-[25%] md:max-w-[380px] md:h-[25%] md:origin-center md:rotate-[17deg] md:-scale-x-[1]"
          src="public\Images\Pumpkin_logo.png"
          alt="pumpking-logo"
        />
      </section>
      {/* <section className="bg-home bg-no-repeat bg-cover bg-center min-h-screen flex items-center justify-center z-0">
        <img
          className="w-[380px] h-[380px] origin-center -rotate-[17deg]"
          src="public\Images\Pumpkin_logo.png"
          alt="pumpking-logo"
        />
        <div className="bg-black/[.5] rounded-[20px] backdrop-blur-[2px] w-[482px] h-[270px] flex items-center justify-center">
          <h1 className="text-primary font-primary text-8xl text-center">
            HALLOWEEN PARTY
          </h1>
        </div>
        <img
          className="w-[380px] h-[380px] origin-center rotate-[17deg] -scale-x-[1]"
          src="public\Images\Pumpkin_logo.png"
          alt="pumpking-logo"
        />
      </section> */}
    </>
  );
}
