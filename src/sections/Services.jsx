import Button from "@/components/Button";
import { ArrowBigRight } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import services from "@/data/services";

export default function Services() {
    return (
        <section id="services" className="relative mt-[-150px] overflow-hidden bg-[#0B0B0B] px-5 pb-[60px] pt-[230px] text-white sm:mt-[-80px] sm:px-8 sm:pt-[160px] lg:mt-[-110px] lg:px-10 lg:pb-[100px] lg:pt-[200px]">

            {/* Background Glow */}
            <div className="pointer-events-none absolute left-[-220px] top-[180px] h-[380px] w-[380px] rounded-full bg-[#CA943B] opacity-50 blur-[110px] sm:left-[-180px] sm:h-[450px] sm:w-[450px] sm:opacity-70 sm:blur-[120px]" />

            <div className="relative mx-auto max-w-[1280px]">

                {/* Header */}
                <div className="mb-10 flex flex-col items-center gap-7 text-center lg:mb-12 lg:grid lg:grid-cols-[1.2fr_0.8fr_auto] lg:items-end lg:gap-8 lg:text-left">

                    {/* Heading */}
                    <div className="w-full">

                        {/* Section Label */}
                        <div className="mb-5 flex items-center justify-center gap-3 text-[#C89A5B] lg:justify-start">

                            <span className="h-[2px] w-10 bg-[#F2DA7D] sm:w-10" />


                            <span style={{ fontFamily: "var(--font-dancing-script)" }} className=" text-[16px] font-bold  sm:text-[25px] normal-case text-[#F2DA7D]">
                                Services
                            </span>

                            <span className="h-[2px] w-10 bg-[#F2DA7D] sm:w-10" />

                        </div>

                        {/* Heading */}
                        <h2 className="font-[var(--font-unbounded)] text-[26px] font-bold uppercase leading-[1.2] tracking-tight sm:text-4xl lg:text-[35px]">

                            Delivering Excellence  {"   "}

                            <span style={{ fontFamily: "var(--font-great-vibes)" }} className=" text-[#CE973A] normal-case word-spacing-[5px] font-semibold text-[40px]">
                               Through Experience.
                            </span>

                        </h2>

                    </div>

                    {/* View All */}
                    <div className="flex justify-center lg:ml-auto lg:items-center lg:justify-end">

                        <Button
                            href="/services"
                            icon={
                                <ArrowBigRight className="h-4 w-4 sm:h-5 sm:w-5" />
                            }
                        >
                            View All
                        </Button>

                    </div>

                </div>

                {/* Service Cards */}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">

                    {services.slice(0, 3).map((service) => (
                        <ServiceCard
                            key={service.number}
                            service={service}
                        />
                    ))}

                </div>

            </div>
        </section>
    );
}