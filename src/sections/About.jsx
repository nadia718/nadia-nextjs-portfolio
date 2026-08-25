import Button from "@/components/Button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function About() {
    return (
        <section
            id="about"
            className="group relative overflow-hidden bg-[linear-gradient(135deg,#090909_0%,#0B0907_45%,#151008_100%)] pt-[70px] pb-[220px] text-white sm:pt-[80px] sm:pb-[150px] lg:pt-[100px] lg:pb-[180px]"
        >
            {/* BACKGROUND EFFECTS*/}

            <div className="pointer-events-none absolute left-[-220px] top-[15%] h-[550px] w-[550px] rounded-full bg-[#CE973A]/[0.025] blur-[170px]" />

            <div className="pointer-events-none absolute right-[-180px] top-[10%] h-[550px] w-[550px] rounded-full bg-[#F5D97A]/[0.035] blur-[170px]" />

            <div className="pointer-events-none absolute left-1/2 top-[35%] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#CE973A]/[0.025] blur-[180px]" />

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.58)_100%)]" />

            {/* CONTENT*/}

            <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
                <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">

                    {/* LEFT IMAGE */}

                    <div className="group/image relative mx-auto w-full max-w-[650px]">

                        {/* Main Image Glow */}
                        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#CE973A]/[0.10] blur-[110px] opacity-70 transition-all duration-700 ease-out group-hover/image:scale-110 group-hover/image:bg-[#CE973A]/[0.18] group-hover/image:opacity-100 sm:h-[500px] sm:w-[500px]" />

                        {/* Secondary Glow */}
                        <div className="pointer-events-none absolute left-1/2 top-[55%] h-[260px] w-[500px] -translate-x-1/2 rounded-full bg-[#F5D97A]/[0.045] blur-[90px] transition-all duration-700 group-hover/image:bg-[#F5D97A]/[0.10]" />

                        {/* Image Frame */}
                        <div className="relative overflow-hidden rounded-[18px]  bg-[#0A0908] p-[1px] shadow-[0_25px_70px_rgba(0,0,0,0.55)] transition-all duration-700 ease-out group-hover/image:-translate-y-1  group-hover/image:shadow-[0_30px_90px_rgba(206,151,58,0.18)]">

                            <div className="relative overflow-hidden rounded-[17px] bg-[#0B0A08]">

                                <Image
                                    src="/images/aboutvertical.png"
                                    alt="Nadia Nisar - WordPress and Frontend Developer"
                                    width={700}
                                    height={500}
                                    className="h-[300px] w-full object-cover transition-all duration-700 ease-out group-hover/image:scale-[1.035] group-hover/image:brightness-[1.05] sm:h-[650px]"
                                />

                                {/* Gold Overlay */}
                                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(206,151,58,0.10)_0%,transparent_35%,transparent_65%,rgba(245,217,122,0.06)_100%)] opacity-60 transition-opacity duration-700 group-hover/image:opacity-100" />

                                {/* Image Edge Light */}
                                <div className="pointer-events-none absolute inset-0 rounded-[17px] ring-1 ring-inset ring-white/[0.04] transition-all duration-700 group-hover/image:ring-[#F5D97A]/20" />

                                {/* Moving Shine */}
                                <div className="pointer-events-none absolute -left-[100%] top-0 h-full w-[45%] rotate-[18deg] bg-gradient-to-r from-transparent via-white/[0.12] to-transparent blur-[8px] transition-all duration-[1200ms] ease-out group-hover/image:left-[130%]" />

                            </div>
                        </div>

                        {/* Corner Circle */}
                        <div className="pointer-events-none absolute -right-3 -top-3 h-14 w-14 rounded-full border border-[#F5D97A]/20 opacity-60 transition-all duration-500 group-hover/image:scale-125 group-hover/image:border-[#F5D97A]/50 group-hover/image:shadow-[0_0_30px_rgba(245,217,122,0.25)]" />

                        {/* Corner Dot */}
                        <div className="pointer-events-none absolute -right-1 top-3 h-2 w-2 rounded-full bg-[#F5D97A] shadow-[0_0_15px_rgba(245,217,122,0.55)]" />
                    </div>

                    {/* RIGHT CONTENT*/}

                    <div className="group/content relative">

                        {/* Content Glow */}
                        <div className="pointer-events-none absolute -right-20 top-0 h-[350px] w-[350px] rounded-full bg-[#CE973A]/0 blur-[130px] transition-all duration-700 group-hover/content:bg-[#CE973A]/[0.06]" />

                        <div className="relative">

                            {/* Section Label */}
                            <div className="mb-2 flex items-center justify-center gap-3 text-[#CE973A] sm:mb-2 sm:justify-start">
                                <span className="h-[2px] w-10 bg-[#F2DA7D] sm:w-10" />

                                <span style={{ fontFamily: "var(--font-dancing-script)" }} className=" text-[16px] font-bold  sm:text-[25px] normal-case text-[#F2DA7D]">
                                    About Me
                                </span>

                                <span className="h-[2px] w-10 bg-[#F2DA7D] sm:w-10" />
                            </div>

                            {/*  PROFESSIONAL HEADING*/}
                            <h2 className="max-w-[760px] text-center font-[var(--font-unbounded)] text-[26px] font-bold normal-case leading-[1.5] tracking-[-0.035em] text-white sm:text-left sm:text-[32px] lg:text-[35px]">
                                I turn designs & ideas into

                                <span
                                    style={{ fontFamily: "var(--font-great-vibes)" }}
                                    className="mt-1 block text-[28px] font-semibold normal-case leading-[1.2] tracking-normal text-[#CE973A] sm:text-[35px] lg:text-[35px]"
                                >
                                    High-quality digital experiences.
                                </span>
                            </h2>

                            {/* Description */}
                            <div className="mt-8 space-y-4 text-center font-[var(--font-manrope)] text-[15px] leading-7 text-[#AFAAA3] sm:text-left sm:text-[16px]">

                                <p>
                                    I specialize in WordPress and Frontend Development, creating
                                    modern, responsive and user-friendly websites for businesses,
                                    brands and online platforms.
                                </p>

                                <p>
                                    I work with both custom code and CMS solutions, including
                                    WordPress, Elementor and ACF, and convert Figma designs into
                                    pixel-perfect websites with clean, professional and responsive
                                    interfaces.
                                </p>

                                <p>
                                    My experience covers ecommerce, booking, recruitment,
                                    business and service websites, along with custom theme
                                    development, website migration, bug fixing, speed
                                    optimization, on-page SEO and cross-device responsive
                                    development.
                                </p>

                                <p>
                                    I focus on clean implementation, professional UI, strong
                                    performance and websites that are easy to manage and built
                                    around each client's requirements.
                                </p>

                            </div>

                            {/* CTA */}
                            <div className="mt-9 flex justify-center sm:justify-start">
                                <Button
                                    href="mailto:nadianisar03@gmail.com"
                                    icon={<ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />}
                                >
                                    Let's Work Together
                                </Button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}