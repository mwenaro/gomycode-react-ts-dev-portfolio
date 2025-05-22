
export function ContactSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className=" mx-auto flex flex-col  space-y-6">
        
        <div>
          <p className=" font-bold text-green-600">{'{007}'}</p>
          <p className="text-sm text-gray-700">pavanmg</p>
        </div>

        
        <div>
          <p className="text lg text-gray-800">For any questions please mail us:</p>
          <a
            href="mailto:hi@pavanmg.in"
            className="text-green-700"
          >
            hi@pavanmg.in
          </a>
        </div>

        
        <div className="text-sm text-gray-600 space-y-1">
          <p>+91 12345 09876</p>
          <p>info@example.com</p>
        </div>

        
        <div className="flex space-x-6 mt-4">
          <a href="#">
            <img src="/github-icon.png" alt="GitHub" className="h-6 w-6 hover:opacity-70" />
          </a>
          <a href="#">
            <img src="/linkedin-icon.png" alt="LinkedIn" className="h-6 w-6 hover:opacity-70" />
          </a>
          <a href="#">
            <img src="/twitter-icon.png" alt="Twitter" className="h-6 w-6 hover:opacity-70" />
          </a>
        </div>
      </div>
    </section>
  );
}