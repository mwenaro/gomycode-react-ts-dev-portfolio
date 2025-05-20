

export function Hero() {
  return (
    <section className="flex items-center justify-center md:p-12">
      {/* text content */}
      <div className="flex-1 max-w">
        <h2 className="text-4xl font-bold mb-2">
          Hi 👋, <br />
          My name is <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to purple-600">Pavan MG</span>
           <br />I build things for web
        </h2>
      </div>

      {/* hero image */}

      <div className="flex-1 flex justify-center md:justify-end">
        <img src="./hero-pic.png" alt="hero iamge" className="w-64 h-64" />
      </div>
    </section>
  );
}
