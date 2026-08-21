import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#080A07] text-white border-t border-[#B98A4A]/20">

            <div className="max-w-[1280px] mx-auto px-6 lg:px-8">

                {/* Main Footer */}
                <div className="py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">

                    {/* Brand */}
                    <div>

                        <Link href="/" className="inline-block mb-6">

                            <Image
                                src="/images/logofooter.png"
                                alt="Nadia Nisar | Frontend Developer"
                                width={220}
                                height={80}
                                className="w-[210px] h-auto object-contain"
                            />

                        </Link>

                        <p className="text-[#A5A5A5] text-[15px] leading-7 max-w-[290px]">
                            I create modern, responsive and user-focused websites
                            that help businesses and brands grow online.
                        </p>


                        {/* Social Icons */}
                        <div className="flex items-center gap-3 mt-7">

                            <a
                                href="#"
                                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-sm font-medium hover:bg-[#B98A4A] hover:text-black hover:border-[#B98A4A] transition-all duration-300"
                            >
                                in
                            </a>

                            <a
                                href="#"
                                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-sm font-medium hover:bg-[#B98A4A] hover:text-black hover:border-[#B98A4A] transition-all duration-300"
                            >
                                f
                            </a>

                            <a
                                href="#"
                                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-sm font-medium hover:bg-[#B98A4A] hover:text-black hover:border-[#B98A4A] transition-all duration-300"
                            >
                                X
                            </a>

                            <a
                                href="#"
                                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-sm font-medium hover:bg-[#B98A4A] hover:text-black hover:border-[#B98A4A] transition-all duration-300"
                            >
                                G
                            </a>

                        </div>

                    </div>


                    {/* Quick Links */}
                    <div>

                        <h3 className="text-[18px] font-semibold mb-7">
                            Quick Links
                        </h3>

                        <ul className="space-y-4">

                            <li>
                                <Link
                                    href="/"
                                    className="text-[#9E9E9E] hover:text-[#D4A85C] transition-colors duration-300"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="#about"
                                    className="text-[#9E9E9E] hover:text-[#D4A85C] transition-colors duration-300"
                                >
                                    About Me
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="#services"
                                    className="text-[#9E9E9E] hover:text-[#D4A85C] transition-colors duration-300"
                                >
                                    Services
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="#projects"
                                    className="text-[#9E9E9E] hover:text-[#D4A85C] transition-colors duration-300"
                                >
                                    Projects
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="#contact"
                                    className="text-[#9E9E9E] hover:text-[#D4A85C] transition-colors duration-300"
                                >
                                    Contact
                                </Link>
                            </li>

                        </ul>

                    </div>


                    {/* Services */}
                    <div>

                        <h3 className="text-[18px] font-semibold mb-7">
                            Services
                        </h3>

                        <ul className="space-y-4">

                            <li className="text-[#9E9E9E]">
                                WordPress Development
                            </li>

                            <li className="text-[#9E9E9E]">
                                Frontend Development
                            </li>

                            <li className="text-[#9E9E9E]">
                                Responsive Web Design
                            </li>

                            <li className="text-[#9E9E9E]">
                                Elementor Development
                            </li>

                            <li className="text-[#9E9E9E]">
                                Figma to WordPress
                            </li>

                        </ul>

                    </div>


                    {/* Contact */}
                    <div>

                        <h3 className="text-[18px] font-semibold mb-7">
                            Get In Touch
                        </h3>

                        <div className="space-y-5">

                            <div>

                                <p className="text-[#6F6F6F] text-sm mb-1">
                                    Email
                                </p>

                                <a
                                    href="mailto:hello@nadia.dev"
                                    className="text-[#D0D0D0] hover:text-[#D4A85C] transition-colors duration-300"
                                >
                                    hello@nadia.dev
                                </a>

                            </div>


                            <div>

                                <p className="text-[#6F6F6F] text-sm mb-1">
                                    Location
                                </p>

                                <p className="text-[#D0D0D0]">
                                    Lahore, Pakistan
                                </p>

                            </div>


                            <Link
                                href="#contact"
                                className="inline-flex items-center gap-2 bg-[#B98A4A] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#D4A85C] hover:scale-105 transition-all duration-300"
                            >
                                Let's Talk

                                <span className="text-lg">
                                    →
                                </span>

                            </Link>

                        </div>

                    </div>

                </div>


                {/* Bottom Footer */}
                <div className="py-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">

                    <p className="text-[#707070] text-sm">
                        © 2026 Nadia Nisar. All rights reserved.
                    </p>

                    <p className="text-[#707070] text-sm">
                        Designed & Developed by{" "}
                        <span className="text-[#B98A4A]">
                            Nadia Nisar
                        </span>
                    </p>

                </div>

            </div>

        </footer>
    );
}