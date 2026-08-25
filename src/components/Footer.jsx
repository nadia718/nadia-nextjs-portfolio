import Link from "next/link";
import Image from "next/image";
import SocialLinks from "./SocialLinks";

export default function Footer() {
    return (
        <footer className="relative overflow-hidden border-t border-[#CE973A]/15 bg-[#000000] text-white">

            {/* Background Glow */}
            <div className="pointer-events-none absolute -left-[180px] top-[10%] h-[420px] w-[420px] rounded-full bg-[#CE973A]/[0.035] blur-[140px]" />

            <div className="pointer-events-none absolute -right-[180px] bottom-[-150px] h-[450px] w-[450px] rounded-full bg-[#F5D97A]/[0.025] blur-[150px]" />

            {/* Subtle Grid */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(206,151,58,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(206,151,58,0.35)_1px,transparent_1px)] [background-size:80px_80px]" />

            <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-8">

                {/* Main Footer */}
                <div className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr_1fr] lg:gap-16 lg:py-20">

                    {/* Brand */}
                    <div>

                        <Link href="/" className="mb-6 inline-block">
                            <Image
                                src="/images/logofooter.png"
                                alt="Nadia Nisar | Frontend Developer"
                                width={220}
                                height={80}
                                className="h-auto w-[200px] object-contain"
                            />
                        </Link>

                        <p className="max-w-[300px] font-[var(--font-manrope)] text-[14px] leading-7 text-[#AFAAA3] sm:text-[15px]">
                            I create modern, responsive and user-focused websites
                            that help businesses and brands build a strong online
                            presence.
                        </p>

                        {/* Social Icons */}
                        <div className="mt-7 flex items-center gap-3">

                            <SocialLinks />

                        </div>

                    </div>


                    {/* Quick Links */}
                    <div>

                        <div className="mb-7 flex items-center gap-3">
                            

                            <h3 className="font-[var(--font-unbounded)] text-[20px] font-semibold uppercase tracking-[0.02em] text-[#F5F3EE]">
                                Quick Links
                            </h3>
                        </div>

                        <ul className="space-y-4">

                            {[
                                ["Home", "/"],
                                ["About Me", "#about"],
                                ["Services", "#services"],
                                ["Projects", "#projects"],
                                ["Contact", "#contact"],
                            ].map(([label, href]) => (
                                <li key={label}>
                                    <Link
                                        href={href}
                                        className="font-[var(--font-manrope)] text-[16px] text-[#9E9E9E] transition-all duration-300 hover:translate-x-1 hover:text-[#F5D97A]"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}

                        </ul>

                    </div>


                    {/* Services */}
                    <div>

                        <div className="mb-7 flex items-center gap-3">

                            <h3 className="font-[var(--font-unbounded)] text-[20px] font-semibold uppercase tracking-[0.02em] text-[#F5F3EE]">
                                Services
                            </h3>
                        </div>

                        <ul className="space-y-4">

                            {[
                                "WordPress Development",
                                "Frontend Development",
                                "Responsive Web Design",
                                "Elementor Development",
                                "Figma to WordPress",
                            ].map((service) => (
                                <li
                                    key={service}
                                    className="font-[var(--font-manrope)] text-[16px] text-[#9E9E9E] transition-colors duration-300 hover:text-[#F5D97A]"
                                >
                                    {service}
                                </li>
                            ))}

                        </ul>

                    </div>


                    {/* Contact */}
                    <div>

                        <div className="mb-7 flex items-center gap-3">

                            <h3 className="font-[var(--font-unbounded)] text-[20px] font-semibold uppercase tracking-[0.02em] text-[#F5F3EE]">
                                Get In Touch
                            </h3>
                        </div>

                        <div className="space-y-5">

                            {/* Email */}
                            <div>
                                <p className="mb-1 font-[var(--font-manrope)] text-[16px] text-[#6F6F6F]">
                                    Email
                                </p>

                                <a
                                    href="mailto:nadianisar03@gmail.com"
                                    className="font-[var(--font-manrope)] text-[14px] text-[#D0D0D0] transition-colors duration-300 hover:text-[#F5D97A]"
                                >
                                    nadianisar03@gmail.com
                                </a>
                            </div>


                            {/* Phone */}
                            <div>
                                <p className="mb-1 font-[var(--font-manrope)] text-[16px] text-[#6F6F6F]">
                                    Phone
                                </p>

                                <a
                                    href="tel:03289102805"
                                    className="font-[var(--font-manrope)] text-[14px] text-[#D0D0D0] transition-colors duration-300 hover:text-[#F5D97A]"
                                >
                                    03289102805
                                </a>
                            </div>


                            {/* Location */}
                            <div>
                                <p className="mb-1 font-[var(--font-manrope)] text-[16px] text-[#6F6F6F]">
                                    Location
                                </p>

                                <p className="font-[var(--font-manrope)] text-[14px] text-[#D0D0D0]">
                                    Lahore, Pakistan
                                </p>
                            </div>



                        </div>

                    </div>

                </div>


                {/* Bottom Footer */}
                <div className="flex flex-col items-center justify-between gap-3 border-t border-white/[0.07] py-6 text-center md:flex-row md:text-left">

                    <p className="font-[var(--font-manrope)] text-[12px] text-[#707070]">
                        © 2026 Nadia Nisar. All rights reserved.
                    </p>

                    <p className="font-[var(--font-manrope)] text-[12px] text-[#707070]">
                        Designed & Developed by{" "}
                        <span className="text-[#CE973A]">
                            Nadia Nisar
                        </span>
                    </p>

                </div>

            </div>

        </footer>
    );
}