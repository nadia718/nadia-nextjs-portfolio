import Image from "next/image";

export default function Logobar() {
    const technologies = [
        {

            icon: "/images/logo/wordpress.svg",
        },
        {

            icon: "/images/logo/shopify.svg",
        },
        {

            icon: "/images/logo/react.svg",
        },
        {

            icon: "/images/logo/nextdotjs.svg",
        },
        {

            icon: "/images/logo/tailwindcss.svg",
        },
        {

            icon: "/images/logo/bootstrap.svg",
        },
        {

            icon: "/images/logo/javascript.svg",
        },
        {

            icon: "/images/logo/html5.svg",
        },
        {
            icon: "/images/logo/css.svg",
        },
    ];

    return (
        <section className="overflow-hidden mt-[-80px] z-10 relative ">
            <div className="mx-auto max-w-[1280px]">

                <div className="overflow-hidden bg-[linear-gradient(360deg,_#0B0B0A_0%,_#1F1608_100%)] py-14 px-4 sm:px-6 lg:px-10  rounded-[22px] shadow-lg" >

                    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12 lg:justify-between lg:gap-x-3">

                        {technologies.map((technology) => (
                            <div
                                key={technology.name}
                                className="group flex shrink-0 items-center transition-all duration-300 hover:-translate-y-1 hover:scale-110"
                            >
                                <Image
                                    src={technology.icon}
                                    alt={technology.name}
                                    width={42}
                                    height={42}
                                    className="h-15 w-15 object-contain"
                                />

                                
                            </div>
                        ))}

                    </div>

                </div>

            </div>
        </section>
    );
}