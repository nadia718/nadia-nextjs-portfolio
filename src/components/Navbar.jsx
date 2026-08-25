import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import Button from "./Button";

const navItems = [
    { label: "Home", href: "/" },
    { label: "About Me", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Pages", href: "#pages" },
    { label: "Contact Us", href: "#contact" },
];

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-[#CE973A]/10 bg-[#000000]/95 text-white backdrop-blur-md">
            <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">

                <div className="flex h-[82px] items-center justify-between">

                    {/* Logo */}
                    <Link
                        href="/"
                        className="group flex shrink-0 items-center"
                    >
                        <Image
                            src="/images/logoheader.png"
                            alt="Nadia Nisar | Frontend Developer"
                            width={220}
                            height={60}
                            priority
                            className="h-auto w-[175px] object-contain transition-transform duration-300 group-hover:scale-[1.02] sm:w-[190px] lg:w-[200px]"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden items-center gap-7 lg:flex xl:gap-9">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="group relative font-[var(--font-manrope)] text-[13px] font-medium text-[#D8D3CC] transition-colors duration-300 hover:text-[#F5D97A] xl:text-[14px]"
                            >
                                {item.label}

                                <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#CE973A] transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </nav>

                    {/* Get In Touch Button */}
                    <div className="hidden lg:block">
                        <Button
                            href="#contact"
                            icon={
                                <Phone className="h-4 w-4" strokeWidth={2} />
                            }
                        >
                            Get In Touch
                        </Button>
                    </div>

                    {/* Mobile Menu */}
                    <button
                        type="button"
                        aria-label="Open menu"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#CE973A]/20 bg-[#12110F] text-[#F5F3EE] transition-all duration-300 hover:border-[#CE973A]/50 hover:bg-[#CE973A] hover:text-[#0B0B0B] lg:hidden"
                    >
                        <span className="text-xl leading-none">
                            ☰
                        </span>
                    </button>

                </div>

            </div>
        </header>
    );
}