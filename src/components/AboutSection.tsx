export function About() {
  return (
    <section className=" px-18 py-2 max-w-3xl  ">
      {/* About me */}
      <div>
        <h2 className="text-4xl font-bold text-[#42446E]">About Me</h2>
        <p className="p-4 text-gray-600 text-lg mb-[10px] ">
          The Generator App is an online tool that helps you to export
          ready-made templates ready to work as your future website. It helps
          you to combine slides, panels and other components and export it as a
          set of static files: HTML/CSS/JS.
        </p>
      </div>

      {/*Work Experience */}
      <div>
        <h2 className=" mb-4 text-4xl font-bold text-[#42446E]">
          Work Experience
        </h2>

        {/* Job 1 */}
        <div className=" mb-4 border-b-2 border-gray-200 pb-4 flex justify-between items-start gap-4 flex-wrap">
          {/* Left side */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-gray-500 [word-spacing:1rem] mb-1">
              Junior Web Developer
            </h3>
            <div className="flex items-center gap-2 flex-wrap">
              <img
                src="/images/jobicons.png"
                alt="job icon"
                className="w-5 h-5"
              />
              <p className="text-sm text-gray-400">
                Dr.Rajkumar's Learning App
              </p>
              <img
                src="/images/location.png"
                alt="location icon"
                className="w-4 h-4"
              />
              <span className="text-sm text-gray-400">Bengaluru</span>
            </div>
          </div>
          {/* Right side */}
          <div className="flex flex-col items-end gap-2 text-sm text-gray-500 min-w-fit">
            <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-3xl">
              full-time
            </span>
            {/* Calendar */}
            <div className="flex items-center gap-1">
              <img
                src="/calender.png"
                alt="calendar icon"
                className="w-4 h-4"
              />
              <span>Sep 2021 - Dec 2021</span>
            </div>
          </div>
        </div>

        {/* Job 2 */}
        <div className=" mb-4 border-b-2 border-gray-200 pb-4 flex justify-between items-start gap-4 flex-wrap">
          {/* Left side */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-gray-500 [word-spacing:1rem] mb-1">
              Web Development Intern
            </h3>
            <div className="flex items-center gap-2 flex-wrap">
              <img
                src="/images/jobicons.png"
                alt="job icon"
                className="w-5 h-5"
              />
              <p className="text-sm text-gray-400">IonPixelz Web Solutions </p>
              <img
                src="/images/location.png"
                alt="location icon"
                className="w-4 h-4"
              />
              <span className="text-sm text-gray-400">Bengaluru</span>
            </div>
          </div>
          {/* Right side */}
          <div className="flex flex-col items-end gap-2 text-sm text-gray-500 min-w-fit">
            <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-3xl">
              internship
            </span>
            {/* Calendar*/}
            <div className="flex items-center gap-1">
              <img
                src="/calender.png"
                alt="calendar icon"
                className="w-4 h-4"
              />
              <span>Sep 2021 - Dec 2021</span>
            </div>
          </div>
        </div>

        {/* Job 3 */}
        <div className=" mb-4 border-b-2 border-gray-200 pb-4 flex justify-between items-start gap-4 flex-wrap">
          {/* Left side */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-gray-500 [word-spacing:1rem] mb-1">
              SEO /SEM Sepcialist
            </h3>
            <div className="flex items-center gap-2 flex-wrap">
              <img
                src="/images/jobicons.png"
                alt="job icon"
                className="w-5 h-5"
              />
              <p className="text-sm text-gray-400">HAAPS </p>
              <img
                src="/images/location.png"
                alt="location icon"
                className="w-4 h-4"
              />
              <span className="text-sm text-gray-400">Bengaluru</span>
            </div>
          </div>
          {/* Right side */}
          <div className="flex flex-col items-end gap-2 text-sm text-gray-500 min-w-fit">
            <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-3xl">
              internship
            </span>
            {/* Calendar */}
            <div className="flex items-center gap-1">
              <img
                src="/calender.png"
                alt="calendar icon"
                className="w-4 h-4"
              />
              <span>Sep 2021 - Dec 2021</span>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="border-b-2 border-gray-200 pb-4">
          <h2 className="mb-4 text-4xl font-bold text-[#42446E]">Education</h2>

          <div className="flex justify-between items-start w-full gap-4">
            {/* Left side */}
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold text-gray-500 [word-spacing:1rem] mb-1">
                Bachelor in Electronics & Communication
              </h3>

              {/* Icon and School Name */}
              <div className="flex items-center gap-2">
                <img
                  src="/images/jobicons.png"
                  alt="job icon"
                  className="w-5 h-5"
                />
                <p className="text-sm text-gray-400">
                  Bangalore Institute of Technology
                </p>
              </div>
            </div>

            {/* Right side */}
            <div className="flex flex-col items-end gap-2 text-sm text-gray-500 min-w-fit">
              <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-3xl">
                Full Time
              </span>
              <div className="flex items-center gap-1">
                <img
                  src="calender.png"
                  alt="calendar icon"
                  className="w-4 h-4"
                />
                <span>Aug 2015 - Dec 2020</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
