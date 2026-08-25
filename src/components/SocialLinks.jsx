import {
    FaFacebookF,
    FaXTwitter,
    FaLinkedinIn,
    FaInstagram,
} from "react-icons/fa6";

export default function SocialLinks() {
    const socials = [
        {
            label: "Facebook",
            icon: <FaFacebookF />,
            href: "#",
        },
        {
            label: "X",
            icon: <FaXTwitter />,
            href: "#",
        },
        {
            label: "LinkedIn",
            icon: <FaLinkedinIn />,
            href: "#",
        },
        {
            label: "Instagram",
            icon: <FaInstagram />,
            href: "#",
        },
    ];

    return (
        <div className="flex items-center gap-4">
            {/* Label */}
            <span className="font-[var(--font-manrope)] text-[15px] font-semibold text-[#F5F3EE]">
                Follow Me:
            </span>

            {/* Social Icons */}
            <div className="flex items-center gap-2">
                {socials.map((social) => (
                    <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className="
                            group relative
                            flex h-10 w-10 items-center justify-center
                            rounded-full
                            border border-[#C89A5B]/40
                            bg-[#15110B]/80
                            text-[13px]
                            text-[#C89A5B]
                            backdrop-blur-sm
                            shadow-[0_4px_20px_rgba(200,154,91,0.08)]
                            transition-all duration-300 ease-out
                            hover:-translate-y-1
                            hover:border-[#F5D97A]
                            hover:bg-[#C89A5B]
                            hover:text-[#090909]
                            hover:shadow-[0_0_25px_rgba(200,154,91,0.28)]
                            active:translate-y-0
                            active:scale-95
                        "
                    >
                        {/* Inner Glow */}
                        <span
                            className="
                                pointer-events-none
                                absolute inset-[3px]
                                rounded-full
                                border border-[#C89A5B]/10
                                transition-all duration-300
                                group-hover:border-[#F5D97A]/30
                            "
                        />

                        {/* Icon */}
                        <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                            {social.icon}
                        </span>
                    </a>
                ))}
            </div>
        </div>
    );
}