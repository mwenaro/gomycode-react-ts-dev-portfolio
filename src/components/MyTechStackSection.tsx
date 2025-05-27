export function MyTechStackSection() {
  return (
    <section className="py-16 bg-white text-center">
      {/* text */}
      <div>
        <article className="text-wrap text-left ml-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-2">My Tech Stack</h3>
          <p className="text-gray-500 mb-10">Technologies I've been working with recently</p>
        </article>
      </div>
      {/* Icons */}
      <span className="inline-grid gap-17 mb-10 sm:grid-cols-3 md:grid-cols-6 gap-x-6 gap-y-10">
        <span>
          <p className="text-sm text-gray-600 mb-2">VSCO...</p>
          <img src="/images/html.png" alt="HTML logo" className="w-20 h-20 w-16 sm:w-20 md:w-24 object-contain mx-auto" />
        </span>
        <span>
          <p className="text-sm text-gray-600 mb-2">VSCO...</p>
          <img src="/images/css.png" alt="CSS logo" className="w-20 h-20 object-contain mx-auto" />
        </span>
        <span>
          <p className="text-sm text-gray-600 mb-2">VSCO...</p>
          <img src="/images/javascript.png" alt="JS logo" className="w-20 h-20 object-contain mx-auto" />
        </span>
        <span>
          <p className="text-sm text-gray-600 mb-2">logos...</p>
          <img src="/images/react.png" alt="React logo" className="w-20 h-20 object-contain mx-auto" />
        </span>
        <span>
          <img src="/images/redux.png" alt="JS logo" className="w-20 h-20 object-contain mx-auto" />
        </span>
        <span>
          <p className="text-sm text-gray-600 mb-2">log...</p>
          <img src="/images/bootstrap.png" alt="JS logo" className="w-20 h-20 object-contain mx-auto" />
        </span>
      </span>
      <span className="inline-grid gap-17 sm:grid-cols-3 md:grid-cols-6 gap-x-6 gap-y-10">
        <span>
          <p className="text-sm text-gray-600 mb-2">vscod...</p>
          <img src="/images/tailwind.png" alt="Tailwind logo" className="w-20 h-20 object-contain mx-auto" />
        </span>
        <span>
          <p className="text-sm text-gray-600 mb-2">logos...</p>
          <img src="/images/sass.png" alt="Tailwind logo" className="w-20 h-20 object-contain mx-auto" />
        </span>
        <span>
          <p className="text-sm text-gray-600 mb-2">logo...</p>
          <img src="/images/git.png" alt="Tailwind logo" className="w-20 h-20 object-contain mx-auto" />
        </span>
        <span>
          <p className="text-sm text-gray-600 mb-2">cib:gr...</p>
          <img src="/images/GSAP.png" alt="Tailwind logo" className="w-20 h-20 object-contain mx-auto" />
        </span>
        <span>
          <p className="text-sm text-gray-600 mb-2">vsco...</p>
          <img src="/images/vscode.jpg" alt="Tailwind logo" className="w-20 h-20 object-contain mx-auto" />
        </span>
        <span>
          <p className="text-sm text-gray-600 mb-2">aka...</p>
          <img src="/images/githubdark.png" alt="Tailwind logo" className="w-20 h-20 object-contain mx-auto" />
        </span>
      </span>
      <div></div>
    </section>
  );
}
