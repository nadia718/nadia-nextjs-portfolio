import Button from "@/components/Button";
import { Phone } from "lucide-react";

export default function ContactCTA() {
    return (
        <section className="relative overflow-hidden bg-[#0B0B0B] px-5 py-20 sm:px-8 lg:px-10 lg:py-[110px]">

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/images/ctacontact.png')",
                }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/70" />

            {/* Content */}
            <div className="relative mx-auto max-w-[1280px]">

                <div className="mx-auto flex min-h-[390px] max-w-[1150px] flex-col items-center justify-center rounded-[28px] border border-white/5 bg-black/65 px-6 py-14 text-center backdrop-blur-[2px] sm:px-10 lg:px-16">

                    <h2 className="font-[var(--font-unbounded)] text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[42px] uppercase">
                        Let’s Design Something Extraordinary.
                    </h2>

                    <p className="mt-6 max-w-[900px] font-[var(--font-manrope)] text-base leading-7 text-[#D0CCC5] sm:text-lg">
                        I’m passionate about creating meaningful digital experiences
                        that connect ideas, people, and innovation.
                    </p>

                    <Button
                        href="/contact"
                        className="mt-8 bg-[#78E61D] text-white hover:bg-[#C89A5B]"
                        icon={<Phone className="h-5 w-5" />}
                    >
                        Contact Now
                    </Button>

                </div>

            </div>
        </section>
    );
}