import PageBanner from "@/components/PageBanner";
import Button from "@/components/Button";
import {
    ArrowUpRight,
    Mail,
    MessageCircle,
    MapPin,
    BriefcaseBusiness,
} from "lucide-react";
import Link from "next/link";

const contactInfo = [
    {
        label: "EMAIL",
        title: "Let's discuss your project",
        value: "nadianisar03@gmail.com",
        href: "mailto:nadianisar03@gmail.com",
        icon: Mail,
    },
    {
        label: "WHATSAPP",
        title: "Quick conversation",
        value: "+92 328 9102805",
        href: "https://wa.me/923289102805",
        icon: MessageCircle,
    },
    {
        label: "LOCATION",
        title: "Based in",
        value: "Lahore, Pakistan",
        href: "#",
        icon: MapPin,
    },
    {
        label: "AVAILABILITY",
        title: "Available for",
        value: "Freelance & Remote Projects",
        href: "#",
        icon: BriefcaseBusiness,
    },
];

const services = [
    "WordPress Development",
    "Frontend Development",
    "Shopify Development",
    "Figma to WordPress",
    "Figma to React / Next.js",
    "Elementor & ACF",
    "Theme Customization",
    "Plugin Configuration",
    "Website Redesign",
    "API Integration",
    "Speed & SEO Optimization",
    "Website Maintenance",
];

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#0B0B0B] text-white">

            {/* Page Banner */}
            <PageBanner
                title="Contact"
                description="Have a project in mind? Let's discuss your ideas and build a modern, responsive and professional web experience together."
            />

            {/* Contact Information */}
            <section className="relative overflow-hidden px-5 py-16 text-center sm:px-8 lg:px-10 lg:py-24 lg:text-left">

                {/* Background Glow */}
                <div className="pointer-events-none absolute left-[-180px] top-[100px] h-[350px] w-[350px] rounded-full bg-[#CE973A]/10 blur-[120px]" />

                <div className="relative mx-auto max-w-[1180px]">

                    {/* Intro */}
                    <div className="mx-auto mb-10 max-w-[760px] lg:mx-0">

                        {/* Section Label */}
                        <div className="mb-5 flex items-center justify-center gap-3 lg:justify-start">
                            <span className="h-[2px] w-10 bg-[#F2DA7D]" />

                            <span
                                style={{
                                    fontFamily: "var(--font-dancing-script)",
                                }}
                                className="text-[20px] font-bold text-[#F2DA7D]"
                            >
                                Let's Connect
                            </span>

                            <span className="h-[2px] w-10 bg-[#F2DA7D]" />
                        </div>

                        {/* Heading */}
                        <h2 className="font-[var(--font-unbounded)] text-center text-[26px] font-bold normal-case leading-tight sm:text-[34px] lg:text-left">
                            Have a project you want{" "}
                            <span
                                style={{
                                    fontFamily: "var(--font-great-vibes)",
                                }}
                                className="text-[#CE973A] normal-case"
                            >
                                built properly?
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="mx-auto mt-5 max-w-[680px] text-center font-[var(--font-manrope)] text-[14px] leading-7 text-[#A8A39C] sm:text-[15px] lg:mx-0 lg:text-left">
                            Whether you need a modern WordPress website, a responsive frontend, an
                            ecommerce store, or a custom web solution, I&apos;m here to help. Tell
                            me about your project and let&apos;s turn your idea into a professional
                            digital experience.
                        </p>
                    </div>

                    {/* Contact Cards */}
                    <div className="grid grid-cols-1 overflow-hidden rounded-[22px] border border-white/[0.10] bg-[#10100F] text-center sm:grid-cols-2 lg:grid-cols-4">

                        {contactInfo.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    target={
                                        item.href.startsWith("http")
                                            ? "_blank"
                                            : undefined
                                    }
                                    rel={
                                        item.href.startsWith("http")
                                            ? "noopener noreferrer"
                                            : undefined
                                    }
                                    className={`group min-h-[170px] p-6 text-center transition-all duration-300 hover:bg-[#17130E] ${index !== 0
                                        ? "border-t border-white/[0.08] sm:border-l sm:border-t-0"
                                        : ""
                                        }`}
                                >

                                    {/* Icon + Arrow */}
                                    <div className="relative flex items-center justify-center">

                                        <div className="flex h-11 w-11 items-center justify-center rounded-[12px] border border-[#CE943A]/20 bg-[#0B0B0B] text-[#CE943A] transition-all duration-300 group-hover:border-[#CE943A]/50 group-hover:bg-[#CE943A]/10">
                                            <Icon className="h-4 w-4" />
                                        </div>

                                        <ArrowUpRight className="absolute right-0 top-1 h-4 w-4 text-[#6F6A63] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#F5D97A]" />

                                    </div>

                                    {/* Card Content */}
                                    <div className="mt-8">

                                        <p className="font-[var(--font-manrope)] text-[10px] font-semibold tracking-[0.22em] text-[#77726B]">
                                            {item.label}
                                        </p>

                                        <h3 className="mt-2 font-[var(--font-manrope)] text-[13px] font-semibold text-[#F2F0EC]">
                                            {item.title}
                                        </h3>

                                        <p className="mt-1 break-words font-[var(--font-manrope)] text-[12px] leading-5 text-[#99938B]">
                                            {item.value}
                                        </p>

                                    </div>

                                </Link>
                            );
                        })}

                    </div>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:items-start lg:justify-start">
                        <Button
                            href="https://wa.me/923289102805"
                            target="_blank"
                            rel="noopener noreferrer"
                            icon={<ArrowUpRight className="h-4 w-4" />}
                        >
                            Let&apos;s Work Together
                        </Button>

                        <Button
                            href="mailto:nadianisar03@gmail.com"
                            icon={<ArrowUpRight className="h-4 w-4" />}
                        >
                            Send an Email
                        </Button>

                    </div>

                </div>
            </section>

            {/* Services */}
            <section className="border-t border-white/[0.06] bg-[#090909] px-5 py-16 text-center sm:px-8 lg:px-10 lg:py-24">

                <div className="mx-auto max-w-[1180px]">

                    {/* Section Heading */}
                    <div className="mx-auto mb-10 max-w-[700px]">

                        {/* Section Label */}
                        <div className="mb-5 flex items-center justify-center gap-3">
                            <span className="h-[2px] w-10 bg-[#F2DA7D]" />

                            <span
                                style={{
                                    fontFamily: "var(--font-dancing-script)",
                                }}
                                className="text-[20px] font-bold text-[#F2DA7D]"
                            >
                                What I Offer
                            </span>

                            <span className="h-[2px] w-10 bg-[#F2DA7D]" />
                        </div>

                        {/* Heading */}
                        <h2 className="font-[var(--font-unbounded)] text-[25px] font-bold uppercase sm:text-[34px]">
                            What can I help you with?
                        </h2>

                        {/* Description */}
                        <p className="mx-auto mt-4 max-w-[650px] font-[var(--font-manrope)] text-[14px] leading-6 text-[#96918A]">
                            Choose a service that matches your project needs,
                            or get in touch to discuss a custom solution.
                        </p>

                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 gap-3 text-left md:grid-cols-2 xl:grid-cols-3">

                        {services.map((service, index) => (
                            <div
                                key={service}
                                className="group flex items-center gap-4 rounded-[14px] border border-white/[0.07] bg-[#10100F] px-5 py-4 transition-all duration-300 hover:border-[#CE973A]/30 hover:bg-[#15130F]"
                            >

                                <span className="font-[var(--font-unbounded)] text-[10px] text-[#CE973A]/60">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <span className="font-[var(--font-manrope)] text-[13px] font-medium text-[#D5D0C8] transition-colors duration-300 group-hover:text-[#F5D97A]">
                                    {service}
                                </span>

                            </div>
                        ))}

                    </div>

                </div>
            </section>

            {/* Final CTA */}
            <section className="relative overflow-hidden px-5 py-20 text-center sm:px-8 lg:py-28">

                {/* Background Glow */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#CE973A]/10 blur-[130px]" />

                <div className="relative mx-auto max-w-[750px]">

                    {/* Section Label */}
                    <div className="mb-5 flex items-center justify-center gap-3">
                        <span className="h-[2px] w-10 bg-[#F2DA7D]" />

                        <span
                            style={{
                                fontFamily: "var(--font-dancing-script)",
                            }}
                            className="text-[20px] font-bold text-[#F2DA7D]"
                        >
                            Ready to Start?
                        </span>

                        <span className="h-[2px] w-10 bg-[#F2DA7D]" />
                    </div>

                    {/* Heading */}
                    <h2 className="font-[var(--font-unbounded)] text-[25px] font-bold normal-case leading-tight sm:text-[34px]">
                        Let&apos;s build something{" "}
                        <span
                            style={{
                                fontFamily: "var(--font-great-vibes)",
                            }}
                            className="text-[#CE973A]"
                        >
                            great.
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="mx-auto mt-5 max-w-[600px] font-[var(--font-manrope)] text-[14px] leading-6 text-[#8F8A83]">
                        I&apos;m always open to discussing new projects,
                        creative ideas and opportunities to work together.
                    </p>

                    {/* CTA Button */}
                    <div className="mt-8 flex justify-center">
                        <Button
                            href="https://wa.me/923289102805"
                            target="_blank"
                            rel="noopener noreferrer"
                            icon={<ArrowUpRight className="h-4 w-4" />}
                        >
                            Start a Conversation
                        </Button>
                    </div>

                </div>

            </section>

        </main>
    );
}