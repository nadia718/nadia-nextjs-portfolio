import { ArrowUpRight } from "lucide-react";

const processSteps = [
    {
        number: "01",
        title: "Requirement & Discovery",
        description:
            "I first understand your business, goals, target audience, content, required features and exact project requirements before deciding how the website should be built.",
    },

    {
        number: "02",
        title: "Research & Direction",
        description:
            "I research your industry, competitors and suitable solutions to find the right structure, functionality and design direction for your website.",
    },

    {
        number: "03",
        title: "Design & Planning",
        description:
            "I plan the website structure, sections and user flow, then select or adapt the design according to your brand, requirements and business goals.",
    },

    {
        number: "04",
        title: "Development & Integration",
        description:
            "I turn the approved direction into a responsive website using WordPress, Elementor, ACF, custom themes, React, Next.js or Shopify according to the project.",
    },

    {
        number: "05",
        title: "Optimization & Testing",
        description:
            "I optimize images and website assets, improve performance, check responsive layouts and test functionality across desktop, tablet and mobile devices.",
    },

    {
        number: "06",
        title: "Launch & Ongoing Support",
        description:
            "After final review, I handle deployment, migration or launch requirements and provide maintenance, updates and bug fixing when ongoing support is needed.",
    },
];




export default function WorkProcess() {
    return (
        <section
            id="process"
            className="relative overflow-hidden bg-[#0B0B0B] px-5 py-[100px] text-white sm:px-8 sm:py-[120px] lg:px-10 lg:py-[150px]"
        >
            {/* Background Glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#CE973A]/[0.035] blur-[160px]" />

            {/* Subtle Grid */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(206,151,58,0.45)_1px,transparent_1px),linear-gradient(90deg,rgba(206,151,58,0.45)_1px,transparent_1px)] bg-[size:70px_70px] opacity-[0.025]" />

            <div className="relative z-10 mx-auto max-w-[1280px]">
                {/* SECTION HEADER */}
                <div className="mx-auto mb-14 max-w-[900px] text-center sm:mb-16">
                    <div className="mb-2 flex items-center justify-center gap-3">
                        <span className="h-[2px] w-10 bg-[#F2DA7D] sm:w-10" />

                        <span style={{ fontFamily: "var(--font-dancing-script)" }} className=" text-[16px] font-bold  sm:text-[25px] normal-case text-[#F2DA7D]">
                            Work Process
                        </span>

                        <span className="h-[2px] w-10 bg-[#F2DA7D] sm:w-10" />
                    </div>

                    <h2 className="font-[var(--font-unbounded)] text-[26px] font-bold normal-case leading-[1.6] tracking-tight sm:text-4xl lg:text-[35px]">
                        Step-by-Step Process Behind
                        <br />
                        <span style={{ fontFamily: "var(--font-great-vibes)" }} className="text-[26px] text-[#CE973A] normal-case word-spacing-[5px] font-semibold lg:text-[40px]">
                            Every Great Project.
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-[760px] font-[var(--font-manrope)] text-[15px] leading-7 text-[#AFAAA3] sm:text-[16px]">
                        I follow a structured development process that turns client requirements into professional, responsive and well-optimized websites — from research and planning to development, testing and final delivery.
                    </p>
                </div>


                <div className="relative mx-auto max-w-[1180px]">
                    <div className="grid grid-cols-1 gap-y-7 md:grid-cols-2 md:gap-x-5 md:gap-y-7 lg:gap-x-5 lg:gap-y-8">
                        {processSteps.map((step, index) => (
                            <div
                                key={step.number}
                                className={`group relative flex min-h-[136px] items-center overflow-hidden rounded-full  bg-[linear-gradient(180deg,#1A1813_0%,#151515_100%)] px-7 py-6 transition-all duration-500 hover:-translate-y-1  hover:shadow-[0_18px_50px_rgba(206,151,58,0.10)] sm:min-h-[140px] sm:px-8 lg:px-8 ${index === 2 ? "lg:-ml-[80px] lg:mr-[80px]" : ""} ${index === 3 ? "lg:ml-[80px] lg:-mr-[80px]" : ""}`}                            >
                                <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-full bg-gradient-to-b from-[#CE973A]/[0.08] to-transparent" />

                                <div className="relative z-10  w-[78px] shrink-0 font-[var(--font-unbounded)] text-[48px] font-normal leading-none tracking-[-0.06em] text-transparent [-webkit-text-stroke:1.5px_rgba(245,217,122,0.72)] transition-all duration-500 group-hover:[-webkit-text-stroke:1.5px_rgba(245,217,122,1)]  sm:w-[88px] sm:text-[52px]">
                                    {step.number}
                                </div>

                                <div className="relative z-10 min-w-0">
                                    <h3 className="font-[var(--font-unbounded)] text-[15px] font-bold leading-tight text-[#F5F3EE] transition-colors duration-300 group-hover:text-[#F5D97A] sm:text-[17px] lg:text-[18px]">
                                        {step.title}
                                    </h3>

                                    <p className="mt-2 max-w-[390px] font-[var(--font-manrope)] text-[13px] leading-5 text-[#AFAAA3] sm:text-[14px] sm:leading-6">
                                        {step.description}
                                    </p>
                                </div>

                                <div className="pointer-events-none absolute bottom-0 left-[15%] right-[15%] h-px scale-x-0 bg-gradient-to-r from-transparent via-[#CE973A]/50 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                            </div>
                        ))}
                    </div>

                    <div className="pointer-events-none absolute left-1/2 top-1/2 z-30 hidden h-[132px] w-[132px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#CE973A]/35 bg-[#15130F] shadow-[0_0_45px_rgba(206,151,58,0.18)] lg:flex">
                        <div className="absolute inset-[-9px] rounded-full border border-[#CE973A]/25" />

                        <div className="absolute inset-[-4px] rounded-full border border-dashed border-[#F5D97A]/35 animate-[spin_18s_linear_infinite]" />



                        <div className="relative z-20 flex h-[62px] w-[62px] items-center justify-center rounded-full bg-gradient-to-br from-[#CE973A] to-[#F5D97A] text-[#0B0B0B] shadow-[0_0_30px_rgba(206,151,58,0.30)]">
                            <ArrowUpRight className="h-7 w-7 stroke-[2]" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}