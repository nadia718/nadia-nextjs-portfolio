"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const skills = [
    {
        name: "WordPress",
        percentage: 95,
        icons: ["/images/logo/wordpress.svg"],
    },
    {
        name: "React.js",
        percentage: 70,
        icons: ["/images/logo/react.svg"],
    },
    {
        name: "Next.js",
        percentage: 70,
        icons: ["/images/logo/nextdotjs.svg"],
    },
    
    {
        name: "WordPress Custom Themes",
        percentage: 75,
        icons: ["/images/logo/wordpress.svg"],
    },
    {
        name: "Shopify",
        percentage: 90,
        icons: ["/images/logo/shopify.svg"],
    },
    {
        name: "Elementor",
        percentage: 90,
        icons: ["E"],
    },
    {
        name: "Figma to WordPress",
        percentage: 85,
        icons: ["F"],
    },
     {
        name: "JavaScript",
        percentage: 50,
        icons: ["/images/logo/javascript.svg"],
    },
    {
        name: "Tailwind",
        percentage: 75,
        icons: ["/images/logo/tailwindcss.svg"],
    },
    {
        name: "Bootstrap",
        percentage: 90,
        icons: ["/images/logo/bootstrap.svg"],
    },
    {
        name: "HTML",
        percentage: 80,
        icons: ["/images/logo/html5.svg"],
    },
    
    {
        name: "CSS",
        percentage: 80,
        icons: ["/images/logo/css.svg"],
    },
    
   
    
    
   
    
    
    
    
];
export default function Skills() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="skills"
            className="relative overflow-hidden bg-[linear-gradient(160deg,#21180C_0%,#171109_25%,#0D0B08_50%,#070707_75%,#050505_100%)] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-28"
        >
            {/* Background Glow */}
            <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#CE973A]/[0.035] blur-[150px]" />

            <div className="relative mx-auto max-w-[1280px]">

                {/* Section Heading */}
                <div className="mx-auto mb-14 max-w-[900px] text-center">

                    <div className="mb-5 flex items-center justify-center gap-3">
                        <span className="h-[2px] w-10 bg-[#F2DA7D] sm:w-10" />
                        <span style={{ fontFamily: "var(--font-dancing-script)" }} className=" text-[16px] font-bold  sm:text-[25px] normal-case text-[#F2DA7D]">
                            Skills
                        </span>

                        <span className="h-[2px] w-10 bg-[#F2DA7D] sm:w-10" />
                    </div>

                    <h2 className="font-[var(--font-unbounded)] text-3xl font-bold normal-case leading-[1.12] tracking-tight sm:text-4xl lg:text-[35px]">
                        Explore the core skills{"   "}

                        <span style={{ fontFamily: "var(--font-great-vibes)" }} className=" normal-case font-semibold text-[#CE973A]">
                            Behind My Work.
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-[780px] font-[var(--font-manrope)] text-[15px] leading-7 text-[#AFAAA3] sm:text-[16px]">
                        I build modern, responsive and user-focused digital
                        experiences using frontend technologies, React,
                        Next.js, WordPress, custom WordPress themes, Shopify,
                        Tailwind CSS and Bootstrap.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="group relative overflow-hidden rounded-[20px] bg-[linear-gradient(360deg,#21180C_0%,#171109_25%,#0D0B08_50%,#070707_75%,#050505_100%)] px-7 py-8 shadow-[0_25px_50px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Card Glow */}
                            <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#CE973A]/[0.035] blur-3xl" />

                            {/* Card Header */}
                            <div className="relative mb-8 flex items-center justify-between gap-4">

                                <div className="flex min-w-0 items-center gap-4">

                                    {/* Original SVG Logos */}
                                    {/* Skill Icon */}
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center gap-1 rounded-full border border-[#CE973A]/20 bg-[#CE973A]/[0.06]">

                                        {skill.icons.map((icon, index) => (
                                            typeof icon === "string" && icon.startsWith("/") ? (
                                                <Image
                                                    key={`${skill.name}-${index}`}
                                                    src={icon}
                                                    alt={`${skill.name} icon ${index + 1}`}
                                                    width={24}
                                                    height={24}
                                                    className="h-5 w-5 object-contain"
                                                />
                                            ) : (
                                                <span
                                                    key={`${skill.name}-${index}`}
                                                    className="font-[var(--font-manrope)] text-sm font-bold text-[#F5D97A]"
                                                >
                                                    {icon}
                                                </span>
                                            )
                                        ))}

                                    </div>

                                    {/* Skill Name */}
                                    <h3 className="font-[var(--font-manrope)] text-[16px] font-semibold leading-6 text-white">
                                        {skill.name}
                                    </h3>
                                </div>

                                {/* Percentage */}
                                <span className="shrink-0 font-[var(--font-manrope)] text-[16px] font-bold text-[#F5D97A]">
                                    {skill.percentage}%
                                </span>
                            </div>

                            {/* Progress Bar */}
                            <div className="relative h-[14px] w-full overflow-hidden rounded-full bg-white/90">

                                <div
                                    className="h-full rounded-full bg-gradient-to-r from-[#CE973A] to-[#F5D97A] shadow-[0_0_12px_rgba(206,151,58,0.22)] transition-all duration-[1600ms] ease-out"
                                    style={{
                                        width: isVisible
                                            ? `${skill.percentage}%`
                                            : "0%",
                                    }}
                                />

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section >
    );
}