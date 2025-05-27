export function Hero() {
  return (
    <section
      className="flex flex-col md:flex-row items-center justify-center p-6 md:p-12 gap-8 ml-7"
      id="hero"
    >
      {/* text content - order changes on mobile */}

      {/* // order1 and order2 reverse image/text order */}
      <div className="order-2 md:order-1 flex-1 max-w-full md:max-w-[50%] text-center md:text-left">
        {/* //leading tight for mobile better spacing */}

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 leading-tight">
          Hi 👋, <br />
          My name is <br />
          <span className="text-transparent bg-clip-text bg-[linear-gradient(60deg,#13B0F5,#CA24B4)]">
            Pavan MG
          </span>{" "}
          <br />I build things for web
        </h2>
      </div>

      {/* hero image */}
      <div className="order-1 md:order-2 flex-1 flex justify-center md:justify-end">
        <img
          src="./hero-pic.png"
          alt="hero image"
          className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72"
        />
      </div>
    </section>
  );
}
