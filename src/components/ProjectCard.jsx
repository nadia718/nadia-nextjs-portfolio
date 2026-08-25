import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, page = "home" }) {
    const isProjectsPage = page === "projects";

    return (
        <article className={`${isProjectsPage ? "col-span-1 self-start" : project.size === "rectangle" ? "col-span-2 md:col-span-3" : "col-span-2 md:col-span-2"} group relative overflow-hidden rounded-[22px] bg-[#0F0F0E] p-4 shadow-[0_10px_40px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(206,151,58,0.12)]`}>

            <div className={`${isProjectsPage ? "aspect-[4/3]" : project.size === "rectangle" ? "aspect-square md:aspect-[16/9]" : "aspect-square md:aspect-square"} group/image relative overflow-hidden rounded-[18px] border border-white/[0.05] bg-[#15130F] transition-all duration-500 group-hover/image:border-[#CE973A]/45 group-hover/image:shadow-[0_20px_55px_rgba(206,151,58,0.16)]`}>

                <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#CE973A]/0 blur-[100px] transition-all duration-700 group-hover/image:bg-[#CE973A]/[0.12]" />

                <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={2000}
                    className="absolute left-0 top-0 h-auto w-full max-w-none object-contain object-top transition-transform duration-[3500ms] ease-in-out group-hover:-translate-y-[72%] group-hover/image:scale-[1.035]"
                />

                <div className="pointer-events-none absolute inset-0 bg-black/20 transition-all duration-500 group-hover/image:bg-black/10" />

                <div className="pointer-events-none absolute inset-0 z-[5] bg-[linear-gradient(135deg,rgba(206,151,58,0.12)_0%,transparent_35%,transparent_65%,rgba(245,217,122,0.08)_100%)] opacity-0 transition-opacity duration-500 group-hover/image:opacity-100" />

                <div className="pointer-events-none absolute -left-[100%] top-[-20%] z-[6] h-[150%] w-[32%] rotate-[20deg] bg-gradient-to-r from-transparent via-white/[0.14] to-transparent blur-[8px] transition-all duration-[1200ms] ease-out group-hover/image:left-[125%]" />

                <div className="pointer-events-none absolute inset-0 z-[7] rounded-[18px] ring-1 ring-inset ring-white/[0.04] transition-all duration-500 group-hover/image:ring-[#F5D97A]/25" />

                <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.title}`}
                    className="absolute bottom-5 right-5 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-[#C89A5B] text-[#0B0B0B] shadow-[0_8px_25px_rgba(200,154,91,0.20)] transition-all duration-300 hover:scale-110 hover:bg-[#F5D97A] hover:shadow-[0_10px_30px_rgba(245,217,122,0.30)]"
                >
                    <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
                </Link>

            </div>
        </article>
    );
}