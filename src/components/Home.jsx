export default function Home() {
  return (
    <>
      <section className="bg-home bg-no-repeat bg-cover bg-center min-h-screen flex items-center justify-center">
        <div className=" w-[350px] h-[270] bg-black/[.5] rounded-[20px] backdrop-blur-[2px] flex flex-col items-center justify-center py-8">
          <h1 className="text-primary font-primary text-3xl text-center">
            Halloween
          </h1>
          <img
            className="w-[180px] h-[180px] origin-center my-4"
            src="/Images/Pumpkin_logo.png"
            alt="pumpking-logo"
          />
          <h1 className="text-primary font-primary text-3xl text-center">
            Party
          </h1>
        </div>
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
