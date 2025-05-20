export function MyTechStackSection() {
  return (
    <section>
      {/* text */}
      <div>
        <article className="text-wrap">
          <h3 className="bg-400">My Tech Stack</h3>
          <p>Technologies I've been working with recently</p>
        </article>
      </div>
      {/* Icons */}
      <span className="inline-grid grid-cols-3 gap-4">
        <span>01</span>
        <span>02</span>
        <span>03</span>
        <span>04</span>
        <span>05</span>
        <span>06</span>
      </span>
      <span className="inline-grid grid-cols-3 gap-4">
        <span>01</span>
        <span>02</span>
        <span>03</span>
        <span>04</span>
        <span>05</span>
        <span>06</span>
      </span>
      <div></div>
    </section>
  );
}
