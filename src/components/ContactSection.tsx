export function ContactSection() {
  return (
    <section className="bg-white py-16 text-center px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-6">
        <div>
          <p className="text-xl font-bold text-gray-800">
            For any questions please mail us:
          </p>
          <a
            href="mailto:hi@pavanmg.in"
            className="text-purple-700 font-semibold hover:underline text-xl"
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
            <img
              src="/github-icon.png"
              alt="GitHub"
              className="h-6 w-6 hover:opacity-70"
            />
          </a>
          <a href="#">
            <img
              src="/linkedin-icon.png"
              alt="LinkedIn"
              className="h-6 w-6 hover:opacity-70"
            />
          </a>
          <a href="#">
            <img
              src="/twitter-icon.png"
              alt="Twitter"
              className="h-6 w-6 hover:opacity-70"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
