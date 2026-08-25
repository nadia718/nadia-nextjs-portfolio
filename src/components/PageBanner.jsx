export default function PageBanner({ title, description }) {
    return (
        <section className="relative overflow-hidden border-b border-[#CE973A]/10 bg-[#0B0B0B] px-5 py-20 text-center text-white sm:px-8 sm:py-24 lg:px-10 lg:py-28">

            {/* Background Glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#CE973A]/[0.06] blur-[140px]" />

            {/* Top Decorative Line */}
            <div className="relative z-10 mb-5 flex items-center justify-center gap-3">
                <span className="h-[2px] w-10 bg-[#F2DA7D] sm:w-14" />

                <span
                    style={{ fontFamily: "var(--font-dancing-script)" }}
                    className="text-[18px] font-bold text-[#F2DA7D] sm:text-[22px]"
                >
                    Explore
                </span>

                <span className="h-[2px] w-10 bg-[#F2DA7D] sm:w-14" />
            </div>

            {/* Page Title */}
            <h1 className="relative z-10 font-[var(--font-unbounded)] text-[32px] font-bold uppercase leading-[1.15] tracking-[-0.03em] text-[#F5F3EE] sm:text-[42px] lg:text-[52px]">
                {title}
            </h1>

            {/* Description */}
            <p className="relative z-10 mx-auto mt-5 max-w-[720px] font-[var(--font-manrope)] text-[14px] leading-7 text-[#AFAAA3] sm:text-[16px] sm:leading-8">
                {description}
            </p>

            {/* Bottom Glow Line */}
            <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#CE973A]/40 to-transparent" />

        </section>
    );
}