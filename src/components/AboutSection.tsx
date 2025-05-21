export function About() {
  return (
    <section className=" m-10 px-7 py-14 max-w-4xl  ">
      {/* About me */}
      <div>
        <h2 className="text-4xl font-bold text-blue-900">About Me</h2>
        <p className="p-4 text-gray-600">
          The Generator App is an online tool that helps you to export
          ready-made templates ready to work as your future website. It helps
          you to combine slides, panels and other components and export it as a
          set of static files: HTML/CSS/JS.
        </p>
      </div>

      {/*Work Experience */}
      <div>
        <h2 className=" mb-4 text-4xl font-bold text-blue-900">Work Experience </h2>

        {/* job 1 */}
        <div className="">
          <h3 className=" mb-2 text-2xl font-semibold text-gray-600 [word-spacing:1rem] ">Junior Web Developer</h3>
          <p className="text-sm text-gray-400 ">Dr.Rajkumar's Learning App </p>
          <div>
            <span>full-time</span>
            <span>Sep 2021 - Dec 2021</span>
          </div>
        </div>
      </div>

      {/* job 2 */}
      <div>
        <h3 className=" mb-2 text-2xl font-semibold text-gray-600 [word-spacing:1rem] ">Web Development Intern</h3>
        <p className="text-sm text-gray-400" >IonPixelz Web Solutions </p>
        <div>
          <span>Internship</span>
          <span>Sep 2021 - Dec 2021</span>
        </div>
      </div>

           {/* job 3 */}
      <div>
        <h3 className=" mb-2 text-2xl font-semibold text-gray-600 [word-spacing:1rem] ">SEO /SEM Specialist</h3>
        <p className="text-sm text-gray-400">HAAPS</p>
        <div>
          <span>Internship</span>
          <span>Sep 2021 - Dec 2021</span>
        </div>
      </div>

      {/* Education */}
      <div>
        <h2 className="text-4xl font-bold text-blue-900">Education</h2>
        <h3>Bachelor in Electronics & Communication</h3>
      </div>
    </section>
  );
}
