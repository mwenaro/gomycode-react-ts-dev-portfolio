import { JobExperience } from "./about/JobExperience";

export function About() {
  return (
    <section className=" px-4 md:px-18 py-2   ">
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
        <JobExperience
          title="Junior Web Developer"
          company="Dr.Rajkumar's Learning App"
          location="Bengaluru"
          category="full-time"
        />
        <JobExperience
          title="Web Development Intern"
          company="IonPixelz Web Solutions"
          location="Bengaluru"
          category="internship"
        />
        <JobExperience
          title="SEO /SEM Sepcialist"
          company="HAAPS"
          location="Bengaluru"
          category="internship"
        />

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
