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
            className={`group relative  inline-flex min-h-[50px] min-w-[155px] items-center justify-center overflow-hidden rounded-full bg-[#CA943B] px-7 py-3 text-[20px]  font-extra-bold text-[#ffffff] shadow-[0_8px_25px_rgba(202,148,59,0.16)] transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[#E0B477] hover:shadow-[0_14px_35px_rgba(202,148,59,0.28)] active:translate-y-0 active:scale-[0.98] sm:min-h-[52px] sm:min-w-[160px] lg:min-h-[54px] lg:min-w-[170px] lg:text-[16px] lg:font-bold uppercase ${className}`}
        >
            {/* Soft Glow */}
            <span className="pointer-events-none absolute inset-0 rounded-full bg-white/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

            {/* Shine */}
            <span className="pointer-events-none absolute -left-[80%] top-0 h-full w-[45%] rotate-[20deg] bg-white/25 blur-sm transition-all duration-700 ease-out group-hover:left-[120%]" />

            {/* Content */}
            <span className="relative z-10  flex items-center justify-center gap-2 whitespace-nowrap">
                <span className="transition-transform duration-300 group-hover:translate-x-[1px]">{children}</span>
                {icon && <span className="flex shrink-0 items-center transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
            </span>
        </a>
    );
}