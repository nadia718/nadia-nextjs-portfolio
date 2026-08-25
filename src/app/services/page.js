import PageBanner from "@/components/PageBanner";
import ServiceCard from "@/components/ServiceCard";
import ServicesData from "@/data/services";

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-[#0B0B0B] text-white">
            <PageBanner
                title="Services"
                description="I provide modern, responsive and professional web development services tailored to your business and brand needs."
            />

            <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
                <div className="mx-auto max-w-[1180px]">
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {ServicesData.map((service) => (
                            <ServiceCard
                                key={service.number}
                                service={service}
                                href="tel:+923289102805"
                            />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}