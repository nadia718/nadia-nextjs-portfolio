import Button from "@/components/Button";
import Counter from "@/components/Counter";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function About() {
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-[radial-gradient(circle_at_75%_35%,rgba(200,154,91,0.18)_0%,#3B2E14_15%,transparent_55%),linear-gradient(135deg,#080807_0%,#0B0B0B_75%,#241A0D_100%)] py-[50px] text-white lg:pt-[100px] lg:pb-[200px]">
            {/* Background Glow */}



            <div className="relative mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">

                <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">

                    {/*  LEFT VISUAL  */}
                    <div className="relative mx-auto min-h-[300px] sm:min-h-[500px] w-full max-w-[100%] h-[200px] sm:h-[500px] lg:h-[500px]">

                        <Image
                            src="/images/aboutvertical.png"
                            alt="Nadia Nisar - WordPress and Frontend Developer"
                            width={700}
                            height={500}

                            className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03] rounded-xl shadow-[0_8px_30px_rgba(200,154,91,0.15)]"
                        />
                    </div>


                    {/* RIGHT CONTENT */}
                    <div className="relative">

                        {/* Section Label */}
                        <div className="mb-5 flex items-center gap-3 justify-center sm:justify-start text-[#C89A5B] sm:mb-7">
                            <span className="h-[2px] w-10 bg-[#C89A5B]" />

                            <span className="text-sm font-medium tracking-wide text-[#C89A5B]">
                                ABOUT ME
                            </span>

                            <span className="h-[2px] w-10 bg-[#C89A5B]" />
                        </div>


                        {/* Heading */}
                        <h2 className="max-w-[700px] text-center sm:text-left text-3xl font-bold uppercase leading-[1.08] tracking-tight">                            I TURN DESIGNS & IDEAS INTO{" "}

                            <span className="text-[#C89A5B]">
                                HIGH-QUALITY DIGITAL EXPERIENCES.
                            </span>

                        </h2>


                        {/* Description */}
                        <div className="mt-7 text-center sm:text-left text-base text-[#B9B5AF] sm:text-[16px] sm:leading-6">

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


                        {/* Bottom Action + Stats */}
                        <div className="mt-9 flex flex-col gap-7 sm:flex-row sm:items-center sm:gap-8">

                            <Button
                                href="#contact"
                                icon={<ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />}
                            >
                                Let's Work Together
                            </Button>

                            {/* <div className="min-w-[100px] max-md:min-w-0 max-md:w-[30%]">
                                <h3 className="font-[var(--font-unbounded)] text-center text-[50px] font-bold text-[#F5F3EE] max-md:text-[34px]">
                                    <Counter end={60} suffix="+" />
                                </h3>

                                <p className="mt-1 text-center text-[12px] uppercase text-[#8F8A84] max-md:text-[9px] max-md:leading-4">
                                    Projects Completed
                                </p>
                            </div>

                            <div className="min-w-[100px] max-md:min-w-0 max-md:w-[30%]">
                                <h3 className="font-[var(--font-unbounded)] text-center text-[50px] font-bold text-[#F5F3EE] max-md:text-[34px]">
                                    <Counter end={30} suffix="+" />
                                </h3>

                                <p className="mt-1 text-center text-[12px] uppercase text-[#8F8A84] max-md:text-[9px] max-md:leading-4">
                                    Happy Clients
                                </p>
                            </div>  */}

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}