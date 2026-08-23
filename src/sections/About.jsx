import Button from "@/components/Button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function About() {
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-[radial-gradient(circle_at_75%_35%,rgba(200,154,91,0.12)_0%,rgba(60,43,20,0.28)_18%,transparent_55%),linear-gradient(135deg,#090909_0%,#0D0C0A_55%,#21170B_100%)] pt-[50px] pb-[230px] text-white lg:pt-[100px] lg:pb-[200px] "
        >

            {/* Subtle Background Glow */}
            <div className="pointer-events-none absolute right-[-180px] top-[15%] h-[500px] w-[500px] rounded-full bg-[#C89A5B]/[0.06] blur-[140px]" />

            <div className="relative mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">

                <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">

                    {/* LEFT VISUAL */}
                    <div className="relative mx-auto h-[300px] w-full sm:h-[500px]">

                        <Image
                            src="/images/aboutvertical.png"
                            alt="Nadia Nisar - WordPress and Frontend Developer"
                            width={700}
                            height={500}
                            className="h-full w-full rounded-xl object-cover shadow-[0_8px_30px_rgba(200,154,91,0.12)] transition-transform duration-700 hover:scale-[1.03]"
                        />

                    </div>


                    {/* RIGHT CONTENT */}
                    <div className="relative">

                        {/* Section Label */}
                        <div className="mb-5 flex items-center justify-center gap-3 text-[#C89A5B] sm:mb-7 sm:justify-start">

                            <span className="h-[2px] w-10 bg-[#C89A5B]" />

                            <span className="font-[var(--font-manrope)] text-sm font-medium tracking-wide">
                                ABOUT ME
                            </span>

                            <span className="h-[2px] w-10 bg-[#C89A5B]" />

                        </div>


                        {/* Heading */}
                        <h2 className="max-w-[700px] text-center font-[var(--font-unbounded)] text-3xl font-bold uppercase leading-[1.08] tracking-tight sm:text-left">

                            I TURN DESIGNS & IDEAS INTO{" "}

                            <span className="text-[#C89A5B]">
                                HIGH-QUALITY DIGITAL EXPERIENCES.
                            </span>

                        </h2>


                        {/* Description */}
                        <div className="mt-7 space-y-4 text-center font-[var(--font-manrope)] text-base leading-7 text-[#AFAAA3] sm:text-left sm:text-[16px]">

                            <p>
                                I specialize in WordPress and Frontend Development, creating
                                modern, responsive and user-friendly websites for businesses,
                                brands and online platforms.
                            </p>

                            <p>
                                I work with both custom code and CMS solutions, including
                                WordPress, Elementor and ACF, and convert Figma designs into
                                pixel-perfect websites with clean, professional and
                                responsive interfaces.
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
                                href="#contact"
                                icon={
                                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                                }
                            >
                                Let's Work Together
                            </Button>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}