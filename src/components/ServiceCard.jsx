import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ServiceCard({ service }) {
    return (
        <article className="group relative overflow-hidden rounded-[22px] bg-[linear-gradient(160deg,_#0B0B0A_0%,_#BC8833_100%)] p-7 transition-all duration-500 hover:-translate-y-2">

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
            <h3 className="font-[var(--font-unbounded)] text-[21px] font-bold leading-tight text-white uppercase transition-all duration-300 group-hover:text-[#F6DB79]">
                {service.title}
            </h3>

            {/* Description */}
            <p className="mt-4 min-h-[52px] font-[var(--font-manrope)] text-[16px] leading-6 text-[#B9B5AF]">
                {service.description}
            </p>

            {/* Image */}
            <div className="relative mt-6 aspect-[1.55/1] overflow-hidden rounded-[18px] bg-white">

                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />

                {/* Arrow Button */}
                <Link
                    href="/services"
                    aria-label={`View ${service.title}`}
                    className="absolute bottom-[5px] right-[5px] flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#CA943B] text-[#ffffff] transition-all duration-300 hover:bg-[#C89A5B]"
                >
                    <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
                </Link>

            </div>

        </article>
    );
}