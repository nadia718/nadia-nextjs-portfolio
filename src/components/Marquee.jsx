export default function Marquee() {
    const services = [
        "WORDPRESS DEVELOPMENT",
        "SHOPIFY DEVELOPMENT",
        "FRONTEND DEVELOPMENT",

        
    ];

    return (
        <section className="overflow-hidden bg-[linear-gradient(360deg,_#0B0B0A_0%,_#1F1608_100%)] py-8">
            <div className="marquee">
                <div className="marquee-track">

                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="flex shrink-0 items-center gap-10 px-5"
                        >
                            <span className="font-[var(--font-unbounded)] text-[34px] font-bold uppercase tracking-tight text-transparent [-webkit-text-stroke:2px_#C89A5B] sm:text-[48px] lg:text-[60px]">
                                {service}
                            </span>

                            <span className="text-[30px] text-[#C89A5B] sm:text-[40px]">
                                ✦
                            </span>
                        </div>
                    ))}

                    {/* Duplicate for seamless loop */}
                    {services.map((service, index) => (
                        <div
                            key={`duplicate-${index}`}
                            className="flex shrink-0 items-center gap-10 px-5"
                        >
                            <span className="font-[var(--font-unbounded)] text-[34px] font-bold uppercase tracking-tight text-transparent [-webkit-text-stroke:2px_#C89A5B] sm:text-[48px] lg:text-[60px]">
                                {service}
                            </span>

                            <span className="text-[30px] text-[#C89A5B] sm:text-[40px]">
                                ✦
                            </span>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}