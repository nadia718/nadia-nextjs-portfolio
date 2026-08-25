export default function Button({
    href = "#",
    icon = null,
    download = false,
    className = "",
    children,
}) {
    return (
        <a
            href={href}
            download={download}
            className={`
                group relative inline-flex min-h-[50px] min-w-[155px]
                items-center justify-center overflow-hidden rounded-full
                bg-[#CA943B] px-7 py-3
                text-[20px] font-extrabold uppercase text-white
                shadow-[0_8px_25px_rgba(202,148,59,0.16)]
                transition-all duration-500 ease-out
                hover:-translate-y-1
                hover:shadow-[0_14px_40px_rgba(202,148,59,0.35)]
                active:translate-y-0 active:scale-[0.97]
                sm:min-h-[52px] sm:min-w-[160px]
                lg:min-h-[54px] lg:min-w-[170px]
                lg:text-[16px]
                ${className}
            `}
        >

            {/* =================================================
                HOVER BACKGROUND
            ================================================= */}
            <span
                className="
                    pointer-events-none absolute inset-0
                    -translate-x-full
                    bg-gradient-to-r
                    from-[#CE973A]
                    via-[#F5D97A]
                    to-[#CE973A]
                    transition-transform duration-700 ease-out
                    group-hover:translate-x-0
                "
            />

            {/* =================================================
                SECOND DARK GOLD LAYER
            ================================================= */}
            <span
                className="
                    pointer-events-none absolute inset-0
                    bg-gradient-to-r
                    from-transparent
                    via-white/[0.12]
                    to-transparent
                    opacity-0
                    transition-opacity duration-500
                    group-hover:opacity-100
                "
            />

            {/* =================================================
                MOVING SHINE
            ================================================= */}
            <span
                className="
                    pointer-events-none absolute
                    -left-[70%] top-[-20%]
                    h-[140%] w-[35%]
                    rotate-[20deg]
                    bg-white/30
                    blur-md
                    transition-all duration-700
                    ease-out
                    group-hover:left-[120%]
                "
            />

            {/* =================================================
                SOFT OUTER GLOW
            ================================================= */}
            <span
                className="
                    pointer-events-none absolute -inset-1
                    rounded-full
                    bg-[#F5D97A]/20
                    opacity-0
                    blur-xl
                    transition-opacity duration-500
                    group-hover:opacity-100
                "
            />

            {/* =================================================
                CONTENT
            ================================================= */}
            <span
                className="
                    relative z-10 flex items-center
                    justify-center gap-2 whitespace-nowrap
                "
            >
                <span
                    className="
                        transition-all duration-300
                        group-hover:text-[#0B0B0B]
                        group-hover:translate-x-[1px]
                    "
                >
                    {children}
                </span>

                {icon && (
                    <span
                        className="
                            flex shrink-0 items-center
                            text-white
                            transition-all duration-300
                            group-hover:translate-x-1
                            group-hover:text-[#0B0B0B]
                        "
                    >
                        {icon}
                    </span>
                )}
            </span>

        </a>
    );
}