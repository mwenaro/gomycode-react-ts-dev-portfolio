

export  function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-300 pb-4">
        
        <div className="mb-4 md:mb-0">
          <div className="text-xl font-bold">{'{'}<span className="text-purple-600">007</span>{'}'}</div>
          <div className="text-sm text-gray-600">pavanmg</div>
        </div>

        
        <div className="flex flex-wrap gap-4 text-sm text-gray-700 mb-4 md:mb-0">
          <a href="#" className="hover:text-purple-600">Home</a>
          <a href="#" className="hover:text-purple-600">About</a>
          <a href="#" className="hover:text-purple-600">Technologies</a>
          <a href="#" className="hover:text-purple-600">Projects</a>
          <a href="#" className="hover:text-purple-600">Contact</a>
        </div>

        
        <div className="flex flex-row items-start">
          <div className="mx-2 ">+91 12345 09876</div>
          <div className="mx-2">
            <a href="mailto:info@example.com" className="hover:text-green-600">info@example.com</a>
          </div>
          <div className="flex gap-3 mt-2">
            <a href="#">
              <img src="/github-icon.png/" alt="GitHub" className="w-5 h-5 hover:opacity-70" />
            </a>
            <a href="#">
              <img src="/twitter-icon.png" alt="Twitter" className="w-5 h-5 hover:opacity-70" />
            </a>
            <a href="#">
              <img src="/linkedin-icon.png" alt="LinkedIn" className="w-5 h-5 hover:opacity-70" />
            </a>
          </div>
          <div className="mt-2 px-2 py-1 bg-blue-500 text-white text-xs rounded">
    
          </div>
        </div>
      </div>

      {/* Bottom Footer Note */}
      <div className="text-center mt-4 text-xs text-gray-600">
        Designed and built by <span className="text-purple-600 ">Pavan MG</span> with <span className="text-purple-500">Love</span> & <span className="text-pink-500">Caffee</span>
      </div>
    </footer>
  );
}