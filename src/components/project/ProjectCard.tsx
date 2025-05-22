
interface ProjectCardProps {
    imgSrc:string;
    

}
export function ProjectCard({
    imgSrc
}:ProjectCardProps) {
    return (

        <div className="max-w-[250px] pb-2 m-4 bg-white rounded-xl shadow">
            {/* image */}
            <img src={imgSrc} alt={imgSrc} />

            <div className="m-3">
                <h3 className="font-medium text-center">Project Tile goes here</h3>
                {/* text content */}
                <p className="font-light">This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content</p>

                <span className="text-sm m-3 inline-block">Tech stack : HTML , JavaScript, SASS, React</span>

                <div className="inline-flex flex gap-2">
                    {/* icons */}
                    <img src="./live-preview-icon.png" alt="live preview icon" />
                    <span className="text-sm underline">Live Preview</span>

                    <img src="./github-icon.png" alt="githud icon" />
                    <span className="text-sm underline">View Code</span>
                </div>
            </div>
        </div>


    )
}
