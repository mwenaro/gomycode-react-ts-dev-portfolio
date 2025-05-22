interface JobExperienceProps {
  title: string;
  company: string;
  category: "full-time" | "internship" | "part-time";
  period?: string;
  location: string;
}
export function JobExperience({
  title,
  company,
  category,
  period="Sep 2021 - Dec 2021",
  location,
}: JobExperienceProps) {
  return (
    <div className="relative mb-4 border-b-2 border-gray-200 pb-4 flex justify-between items-start gap-4 flex-wrap">
      {/* Left side */}
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-gray-500 [word-spacing:1rem] mb-1">
          {title}
        </h3>
        <div className="flex items-center gap-2 flex-wrap">
          <img src="/images/jobicons.png" alt="job icon" className="w-5 h-5" />
          <p className="text-sm text-gray-400">{company}</p>
          <img
            src="/images/location.png"
            alt="location icon"
            className="w-4 h-4"
          />
          <span className="text-sm text-gray-400">{location}</span>
        </div>
      </div>
      {/* Right side */}
      <div className=" absolute top-3 right-3 flex flex-col items-end gap-2 text-sm text-gray-500 min-w-fit">
        <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-3xl">
          {category}{" "}
        </span>
        {/* Calendar */}
        <div className="flex items-center gap-1">
          <img src="/calender.png" alt="calendar icon" className="w-4 h-4" />
          <span>{period}</span>
        </div>
      </div>
    </div>
  );
}
