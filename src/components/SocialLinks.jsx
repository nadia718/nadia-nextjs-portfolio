import {FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram,} from "react-icons/fa6";



export default function SocialLinks() {
    const socials = [
        { label: "Facebook", icon: <FaFacebookF />, href: "#" },
        { label: "X", icon: <FaXTwitter />, href: "#" },
        { label: "LinkedIn", icon: <FaLinkedinIn />, href: "#" },
        { label: "Instagram", icon: <FaInstagram />, href: "#" },
    ];

    return (
        <div className="flex items-center gap-4">
            <span className="text-[17px] font-semibold text-[#F5F3EE]">
                Follow Me:
            </span>

            <div className="flex items-center gap-2.5">
                {socials.map((social) => (
                    <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className="group flex h-10 w-10 items-center justify-center rounded-full bg-[#C89A5B] text-[13px] font-semibold text-[#090909] shadow-[0_5px_18px_rgba(200,154,91,0.10)] transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[#090909] hover:text-[#D7AE73] hover:shadow-[0_8px_24px_rgba(200,154,91,0.25)] active:translate-y-0 active:scale-95"
                    >
                        <span className="transition-transform duration-300 group-hover:scale-110">
                            {social.icon}
                        </span>
                    </a>
                ))}
            </div>
        </div>
    );
}