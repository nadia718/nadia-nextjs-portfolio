import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project }) {
    return (
        <div
            className={`
                ${project.size === "rectangle"
                    ? "col-span-2 md:col-span-3"
                    : "col-span-2 md:col-span-2"
                }
                group relative overflow-hidden rounded-[22px]
                bg-[#0F0F0E] p-4
                shadow-[0_10px_40px_rgba(0,0,0,0.35)]
            `}
        >
            <div
                className={`
                    relative overflow-hidden rounded-[18px]
                    bg-[#15130F]
                    aspect-square
                    ${project.size === "rectangle"
                        ? "md:aspect-[16/9]"
                        : "md:aspect-square"
                    }
                `}
            >
                <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={2000}
                    className="
                        absolute
                        left-0
                        top-0
                        h-auto
                        w-full
                        max-w-none
                        object-contain
                        object-top
                        transition-transform
                        duration-[3500ms]
                        ease-in-out
                        group-hover:-translate-y-[72%]
                    "
                />

                <div className="pointer-events-none absolute inset-0 bg-black/20" />

                <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.title}`}
                    className="
                        absolute
                        bottom-5
                        right-5
                        z-10
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        bg-[#C89A5B]
                        text-[#0B0B0B]
                        transition-transform
                        duration-300
                        hover:scale-110
                    "
                >
                    <ArrowUpRight className="h-5 w-5" />
                </Link>
            </div>
        </div>
    );
}