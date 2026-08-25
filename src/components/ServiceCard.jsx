import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ServiceCard({ service }) {
    return (
        <article className="group relative overflow-hidden rounded-[22px] bg-[linear-gradient(160deg,_#0B0B0A_0%,_#BC8833_100%)] p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(206,151,58,0.16)]">

            {/* Top Row */}
            <div className="mb-7 flex items-start justify-between">

                {/* Service Icon */}
                <div className="flex h-12 w-12 items-center justify-center text-[#F6DB79]">
                    <span className="text-[30px]">
                        ✦
                    </span>
                </div>

                {/* Service Number */}
                <span className="font-[var(--font-unbounded)] text-[46px] leading-none text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.18)]">
                    {service.number}
                </span>

            </div>

            {/* Title */}
            <h3 className="font-[var(--font-unbounded)] text-[21px] font-bold uppercase leading-tight text-white transition-all duration-300 group-hover:text-[#F6DB79]">
                {service.title}
            </h3>

            {/* Description */}
            <p className="mt-4 min-h-[52px] font-[var(--font-manrope)] text-[16px] leading-6 text-[#B9B5AF]">
                {service.description}
            </p>

            {/* Image */}
            <div className="group/image relative mt-6 aspect-[1.55/1] overflow-hidden rounded-[18px] border border-white/[0.06] bg-[#0B0B0A] shadow-[0_15px_35px_rgba(0,0,0,0.35)] transition-all duration-500 group-hover/image:border-[#CE973A]/50 group-hover/image:shadow-[0_20px_45px_rgba(206,151,58,0.18)]">

                {/* Gold Ambient Glow */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#CE973A]/0 blur-[90px] transition-all duration-700 group-hover/image:bg-[#CE973A]/[0.12]" />

                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-all duration-700 ease-out group-hover/image:scale-[1.07] group-hover/image:brightness-[1.06]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />

                {/* Gold Overlay */}
                <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(135deg,rgba(206,151,58,0.12)_0%,transparent_35%,transparent_65%,rgba(245,217,122,0.08)_100%)] opacity-0 transition-opacity duration-500 group-hover/image:opacity-100" />

                {/* Image Shine */}
                <div className="pointer-events-none absolute -left-[100%] top-[-20%] z-20 h-[150%] w-[35%] rotate-[20deg] bg-gradient-to-r from-transparent via-white/[0.16] to-transparent blur-[8px] transition-all duration-[1100ms] ease-out group-hover/image:left-[125%]" />

                {/* Image Edge */}
                <div className="pointer-events-none absolute inset-0 z-20 rounded-[18px] ring-1 ring-inset ring-white/[0.05] transition-all duration-500 group-hover/image:ring-[#F5D97A]/25" />

                {/* Arrow Button */}
                <Link
                    href="/services"
                    aria-label={`View ${service.title}`}
                    className="absolute bottom-[5px] right-[5px] z-30 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#CA943B] text-[#ffffff] shadow-[0_8px_25px_rgba(202,148,59,0.20)] transition-all duration-300 hover:scale-110 hover:bg-[#F5D97A] hover:text-[#090909] hover:shadow-[0_10px_30px_rgba(245,217,122,0.30)]"
                >
                    <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
                </Link>

            </div>

        </article>
    );
}