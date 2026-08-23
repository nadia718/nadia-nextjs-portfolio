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
        <section className="relative z-10 mt-[-150px] mx-[20px] sm:mx-[0px] lg:mx-[0px] overflow-hidden sm:mt-[-90px] ">
            <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-0">
                <div className="rounded-[22px] bg-[linear-gradient(360deg,_#0B0B0A_0%,_#1F1608_100%)] px-4 py-8 shadow-lg sm:px-6 sm:py-12 lg:px-10">

                    <div className="grid grid-cols-3 place-items-center p-[20] gap-x-4 gap-y-4 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-12 sm:gap-y-4 lg:justify-between lg:gap-x-3">

                        {technologies.map((technology, index) => (
                            <div
                                key={index}
                                className={`group flex shrink-0 items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-110 `}
                            >
                                <Image
                                    src={technology.icon}
                                    alt="Technology"
                                    width={60}
                                    height={60}
                                    className="h-10 w-10 object-cover sm:h-20 sm:w-20 lg:h-15 lg:w-15"
                                />
                            </div>
                        ))}

                    </div>

                </div>
            </div>
        </section>
    );
}