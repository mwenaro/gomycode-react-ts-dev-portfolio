import { ProjectCard } from "./project/ProjectCard";

export function ProjectSection() {
    return (
        <section className="px-18 py-2 max-w-[1600px]">
            <h2 className="font-bold text-4xl text-[#42446E]">Projects</h2>
            <p className="my-4">Things I've built so far</p>

            <div className=" flex flex-wrap">
                <ProjectCard
                    imgSrc="/images/project-1.png" />
                <ProjectCard
                    imgSrc="/images/project-2.png" />
                <ProjectCard
                    imgSrc="/images/project-3.png" />
                <ProjectCard
                    imgSrc="/images/project-4.png" />
                <ProjectCard
                    imgSrc="/images/project-5.png" />
                <ProjectCard
                    imgSrc="/images/project-6.png" />


            </div>

        </section>
    )
}
