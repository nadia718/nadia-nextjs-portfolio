import ProjectCard from "@/components/ProjectCard";
import projectdata from "@/data/projects";



export default function Projects() {
    return (
        <section id="projects" className="relative overflow-hidden bg-[#0B0B0B] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-28">
            <div className="relative mx-auto max-w-[1280px]">
                <div className="mb-10 flex flex-col gap-8 sm:mb-12 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
                    {/* Left Content */}
                    <div className="w-full lg:w-1/2">
                        <div className="mb-3 flex items-center justify-center gap-3 sm:justify-start">
                            <span className="h-[2px] w-8 bg-[#F2DA7D] sm:w-10" />

                            <span
                                style={{ fontFamily: "var(--font-dancing-script)" }}
                                className="text-[18px] font-bold text-[#F2DA7D] sm:text-[22px] md:text-[25px]"
                            >
                                Projects
                            </span>

                            <span className="h-[2px] w-8 bg-[#F2DA7D] sm:w-10" />
                        </div>

                        <h2
                            className="text-center font-[var(--font-unbounded)] text-[28px] font-bold leading-[1.5] tracking-tight sm:text-left sm:text-[32px] md:text-[36px] lg:text-[35px]"
                        >
                            Turning Ideas Into{" "}
                            <span
                                style={{ fontFamily: "var(--font-great-vibes)" }}
                                className="font-semibold text-[#CE973A]"
                            >
                                Digital Experiences.
                            </span>
                        </h2>
                    </div>

                    {/* Right Description */}
                    <div className="w-full lg:w-1/2">
                        <p
                            className="
                mx-auto max-w-[650px]
                text-center text-[14px]
                leading-6 text-[#AFAAA3]
                sm:text-left sm:text-[15px] sm:leading-7
                md:text-[16px]
                lg:ml-auto lg:mr-0
            "
                        >
                            A selection of websites I’ve designed and developed across
                            WordPress, React, Next.js and Shopify — focused on responsive
                            design, performance and real-world business needs.
                        </p>
                    </div>
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