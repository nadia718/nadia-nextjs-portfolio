import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <header className="w-full bg-[#080A08] border-b border-[#C79A55]/10">

            <div className="max-w-[1280px] mx-auto px-6 lg:px-8">

                <div className="h-[100px] flex items-center justify-between">

                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center shrink-0"
                    >
                        <Image
                            src="/images/logoheader.png"
                            alt="Nadia Nisar | Frontend Developer"
                            width={220}
                            height={60}
                            priority
                            className="w-[200px] h-auto object-contain"
                        />
                    </Link>


                    {/* Navigation */}
                    <nav className="hidden lg:flex items-center gap-9">

                        <Link
                            href="/"
                            className="text-[#F5F3EE] text-[16px] font-medium hover:text-[#C79A55] transition-colors duration-300"
                        >
                            Home
                        </Link>

                        <Link
                            href="#about"
                            className="text-[#F5F3EE] text-[16px] font-medium hover:text-[#C79A55] transition-colors duration-300"
                        >
                            About Me
                        </Link>

                        <Link
                            href="#services"
                            className="text-[#F5F3EE] text-[16px] font-medium hover:text-[#C79A55] transition-colors duration-300"
                        >
                            Services
                        </Link>

                        <Link
                            href="#projects"
                            className="text-[#F5F3EE] text-[16px] font-medium hover:text-[#C79A55] transition-colors duration-300"
                        >
                            Projects
                        </Link>

                        <Link
                            href="#pages"
                            className="text-[#F5F3EE] text-[16px] font-medium hover:text-[#C79A55] transition-colors duration-300"
                        >
                            Pages
                        </Link>

                        <Link
                            href="#contact"
                            className="text-[#F5F3EE] text-[16px] font-medium hover:text-[#C79A55] transition-colors duration-300"
                        >
                            Contact Us
                        </Link>

                    </nav>


                    {/* Get In Touch Button */}
                    <Link
                        href="#contact"
                        className="
              hidden lg:flex
              items-center
              gap-3
              bg-[#C79A55]
              text-[#080A08]
              px-7
              py-3.5
              rounded-full
              text-[15px]
              font-semibold
              transition-all
              duration-300
              hover:bg-[#D8B878]
              hover:scale-[1.03]
            "
                    >

                        {/* Phone Icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.19 18.85a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.22 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>

                        Get In Touch

                    </Link>


                    {/* Mobile Menu */}
                    <button
                        className="lg:hidden text-[#F5F3EE] text-2xl hover:text-[#C79A55] transition-colors"
                        aria-label="Open menu"
                    >
                        ☰
                    </button>

                </div>

            </div>

        </header>
    );
}