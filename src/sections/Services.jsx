import Button from "@/components/Button";
import { ArrowBigRight } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import services from "@/data/services";

export default function Services() {
    return (
        <section
            id="services"
            className="relative overflow-hidden bg-[#0B0B0B] px-5 py-[70px] text-white sm:px-8 lg:px-10 lg:pt-[200px] lg:pb-[100px] lg:mt-[-80px] "
        >
            {/* Background Glow */}
            <div className="pointer-events-none absolute left-[-180px] top-[180px] h-[450px] w-[450px] rounded-full bg-[#CA943B] opacity-70 blur-[120px]" />

            <div className="relative mx-auto max-w-[1280px]">

                {/* Header */}
                <div className="mb-12 grid items-end gap-8 lg:grid-cols-[1.2fr_0.8fr_auto]">

                    {/* Heading */}
                    <div>
                        <div className="mb-5 flex items-center gap-3 text-[#C89A5B] ">
                            <span className="h-[2px] w-14 bg-[#C89A5B]" />

                            <span className="font-[var(--font-manrope)] text-sm font-medium tracking-wide">
                                SERVICES
                            </span>

                            <span className="h-[2px] w-14 bg-[#C89A5B]" />
                        </div>

                        <h2 className="font-[var(--font-unbounded)] text-3xl font-bold uppercase leading-[1.12] tracking-tight sm:text-4xl lg:text-[48px]">
                            Delivering Excellence
                            <br />
                            Through{" "}
                            <span className="text-[#C89A5B]">
                                Experience.
                            </span>
                        </h2>
                    </div>

                    {/* View All */}
                    <div className="lg:ml-auto lg:flex lg:items-center lg:justify-end">
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
                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

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