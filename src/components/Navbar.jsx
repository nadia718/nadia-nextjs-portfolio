"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, X } from "lucide-react";
import { useState } from "react";
import Button from "./Button";

const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="relative sticky top-0 z-50 w-full border-b border-[#CE973A]/10 bg-[#000000]/95 text-white backdrop-blur-md">

            <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="flex h-[76px] items-center justify-between sm:h-[82px]">

                    {/* Logo */}
                    <Link
                        href="/"
                        onClick={() => setMenuOpen(false)}
                        className="group flex shrink-0 items-center"
                    >
                        <Image
                            src="/images/logoheader.png"
                            alt="Nadia Nisar | Frontend Developer"
                            width={220}
                            height={60}
                            priority
                            className="h-auto w-[155px] object-contain transition-transform duration-300 group-hover:scale-[1.02] sm:w-[180px] lg:w-[200px]"
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

                    {/* Desktop Get In Touch */}
                    <div className="hidden lg:block">
                        <Button
                            href="tel:03289102805"
                            icon={
                                <Phone
                                    className="h-4 w-4"
                                    strokeWidth={2}
                                />
                            }
                        >
                            Get In Touch
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#CE973A]/20 bg-[#12110F] text-[#F5F3EE] transition-all duration-300 hover:border-[#CE973A]/50 hover:bg-[#CE973A] hover:text-[#0B0B0B] lg:hidden"
                    >
                        {menuOpen ? (
                            <X className="h-5 w-5" />
                        ) : (
                            <span className="text-xl leading-none">
                                ☰
                            </span>
                        )}
                    </button>

                </div>

            </div>

            {/* Mobile Navigation */}
            <div
                className={`absolute left-0 top-full w-full border-t border-[#CE973A]/10 bg-[#000000]/98 shadow-[0_20px_40px_rgba(0,0,0,0.45)] transition-all duration-300 lg:hidden ${menuOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible pointer-events-none -translate-y-2 opacity-0"
                    }`}
            >
                <nav className="mx-auto max-w-[1280px] px-5 py-5 sm:px-6">

                    {/* Menu Links */}
                    <div className="flex flex-col gap-1">

                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setMenuOpen(false)}
                                className="rounded-xl px-4 py-3.5 font-[var(--font-manrope)] text-[14px] font-medium text-[#D8D3CC] transition-all duration-300 hover:bg-[#CE973A]/10 hover:text-[#F5D97A]"
                            >
                                {item.label}
                            </Link>
                        ))}

                    </div>

                    {/* Mobile Get In Touch */}
                    <div className="mt-4 border-t border-white/[0.06] pt-4">
                        <Button
                            href="tel:03289102805"
                            onClick={() => setMenuOpen(false)}
                            icon={
                                <Phone
                                    className="h-4 w-4"
                                    strokeWidth={2}
                                />
                            }
                        >
                            Get In Touch
                        </Button>
                    </div>

                </nav>
            </div>

        </header>
    );
}