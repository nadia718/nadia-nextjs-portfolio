import Button from "@/components/Button";
import { ArrowRight, Check } from "lucide-react";

const highlights = [
    "Creative & Professional Design",
    "Responsive Frontend Development",
    "Clean & Maintainable Code",
];

export default function FinalCTA() {
    return (
        <section
            id="cta"
            className="relative overflow-hidden bg-[#000000] px-5 py-[90px] text-white sm:px-8 sm:py-[110px] lg:px-10 lg:py-[130px]"
        >
            {/* Background Glow */}
            <div className="pointer-events-none absolute left-[-180px] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#CE973A]/[0.07] blur-[150px]" />

            <div className="pointer-events-none absolute right-[-180px] top-[-100px] h-[450px] w-[450px] rounded-full bg-[#F5D97A]/[0.035] blur-[150px]" />

            {/* Content */}
            <div className="relative z-10 mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-2 lg:gap-20">

                {/* LEFT CONTENT */}
                <div className="max-w-[620px]">

                    {/* Section Label */}
                    <div className="mb-6 flex items-center gap-3 text-[#CE973A]">
                        <span className="h-[2px] w-10 bg-[#F2DA7D] sm:w-10" />

                        <span
                            style={{ fontFamily: "var(--font-dancing-script)" }}
                            className="text-[16px] font-bold normal-case text-[#F2DA7D] sm:text-[20px]"
                        >
                            Let's Work Together
                        </span>

                        <span className="h-[2px] w-10 bg-[#F2DA7D] sm:w-10" />
                    </div>

                    {/* Heading */}
                    <h2 className="font-[var(--font-unbounded)] text-[32px] font-bold uppercase leading-[1.15] tracking-[-0.03em] text-white sm:text-[42px] lg:text-[35px]">
                        LET'S TURN YOUR {" "}
                        

                        <span
                            style={{ fontFamily: "var(--font-great-vibes)" }}
                            className="font-semibold normal-case tracking-normal text-[#CE973A] text-[40px] sm:text-[50px] lg:text-[35px]"
                        >
                            Ideas into reality.
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="mt-6 max-w-[560px] font-[var(--font-manrope)] text-[15px] leading-7 text-[#AFAAA3] sm:text-[16px]">
                        Have a website idea, design or project in mind? I create
                        modern, responsive and professional websites that help
                        businesses and brands build a strong online presence.
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-wrap gap-4">
                        <Button
                            href="#contact"
                            icon={
                                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                            }
                        >
                            Let's Work Together
                        </Button>

                        <Button
                            href="#projects"
                            icon={
                                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                            }
                        >
                            View My Work
                        </Button>
                    </div>
                </div>

                {/* RIGHT CONTENT */}
                <div className="relative">

                    {/* Subtle Glow */}
                    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#CE973A]/[0.045] blur-[110px]" />

                    <div className="relative space-y-4">

                        {highlights.map((item, index) => (
                            <div
                                key={item}
                                className="group flex items-center gap-5 rounded-full  bg-[linear-gradient(180deg,#1A1712_0%,#141414_100%)] px-6 py-5 shadow-[0_15px_45px_rgba(0,0,0,0.20)] transition-all duration-500 hover:-translate-x-1 hover:border-[#CE973A]/35 hover:shadow-[0_18px_50px_rgba(206,151,58,0.10)] sm:px-7 sm:py-6"
                            >
                                {/* Number */}
                                

                                {/* Check */}
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#CE973A]/10 text-[#F5D97A] transition-all duration-300 group-hover:bg-[#CE973A] group-hover:text-[#0B0B0B]">
                                    <Check
                                        className="h-4 w-4"
                                        strokeWidth={2.5}
                                    />
                                </span>

                                {/* Text */}
                                <span className="font-[var(--font-manrope)] text-[14px] font-semibold text-[#F5F3EE] sm:text-[16px]">
                                    {item}
                                </span>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
}