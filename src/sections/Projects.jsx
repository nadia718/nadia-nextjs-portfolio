import ProjectCard from "@/components/ProjectCard";
import projectdata from "@/data/projects";



export default function Projects() {
    return (
        <section id="projects" className="relative overflow-hidden bg-[#0B0B0B] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-28">
            <div className="relative mx-auto max-w-[1280px]">
                <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <div className="mb-5 flex items-center gap-3 text-[#C89A5B]">
                            <span className="h-[2px] w-12 bg-[#C89A5B]" />
                            <span className="font-[var(--font-manrope)] text-sm font-medium tracking-wide">PROJECTS</span>
                            <span className="h-[2px] w-12 bg-[#C89A5B]" />
                        </div>

                        <h2 className="font-[var(--font-unbounded)] text-3xl font-bold uppercase leading-[1.12] tracking-tight sm:text-4xl lg:text-[48px]">
                            Where Design Meets{" "}
                            <span className="text-[#C89A5B]">Function.</span>
                        </h2>
                    </div>

                    <p className="max-w-[420px] text-[16px] leading-7 text-[#AFAAA3]">
                        A selection of websites and digital experiences built with clean design, responsive development and attention to detail.
                    </p>
                </div>

                <div className="grid gap-5 md:grid-cols-6">
                    {projectdata.slice(0, 5).map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}