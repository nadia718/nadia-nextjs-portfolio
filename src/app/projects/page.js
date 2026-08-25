import PageBanner from "@/components/PageBanner";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects";

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-[#0B0B0B] text-white">

            <PageBanner
                title="Projects"
                description="A selection of websites and digital experiences built with clean design, responsive development and attention to detail."
            />

            <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
                <div className="mx-auto w-full max-w-[1180px]">

                    <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {projects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                page="projects"
                            />
                        ))}
                    </div>

                </div>
            </section>

        </main>
    );
}