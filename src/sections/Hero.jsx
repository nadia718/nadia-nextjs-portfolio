// "use client";

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import Counter from "@/components/Counter";
import SocialLinks from "@/components/SocialLinks";
import { ArrowLeft, ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D09A3B] via-emerald-500 to-[#000000] text-white">

      {/* VERY SUBTLE BACKGROUND LIGHT */}
      <div className="pointer-events-none absolute left-[35%] top-[18%] h-[500px] w-[900px] rounded-full bg-gradient-to-r from-[#D09A3B] to-[#000000] blur-[200px] max-md:left-1/2 max-md:top-[12%] max-md:h-[400px] max-md:w-[400px] max-md:-translate-x-1/2 max-md:blur-[130px]" />

      {/* HERO CONTENT */}
      <div className="relative mx-auto flex min-h-[680px] max-w-[1280px] items-center px-6 font-[var(--font-manrope)] max-md:flex-col max-md:px-5 max-md:pt-24 lg:px-10">
        {/* LEFT CONTENT */}
        <div className="relative z-20 w-full pb-12 lg:w-[36%] max-md:flex max-md:w-full max-md:flex-col max-md:items-center max-md:pb-0 max-md:text-center">

          {/* Small Intro */}
          <div className="mb-4 flex items-center gap-2 max-md:justify-center">
            <span className="h-[1px] w-7 bg-[#C89A5B]" />

            <p className="text-[16px] font-semibold tracking-[0.08em] text-[#C89A5B]">
              HI, I'M
            </p>
          </div>

          {/* MAIN HEADING */}
          <h1 className="w-full font-[var(--font-unbounded)] text-[30px] font-extrabold uppercase leading-[1.3] tracking-[-0.045em] text-[#F5F3EE] lg:text-[37px] ">            <span className="block whitespace-nowrap">
            Nadia Nisar
          </span>

            <span className="mt-1 block whitespace-nowrap text-[#C89A5B]">
              Frontend Developer
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-6 max-w-[400px]  text-[18px] leading-7 text-[#AFAAA3] max-md:max-w-[350px] max-md:px-2 max-md:pr-0 max-md:text-[16px] max-md:leading-6">
            I build modern, responsive websites that help businesses
            and brands grow online.
          </p>

          {/* BUTTONS */}
          <div className="mt-8  flex items-center gap-4 max-md:justify-center">

            {/* Hire Button */}
            <Button
              href="#contact"
              icon={
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="7" width="20" height="15" rx="2" />
                  <path d="M8 7V5.5C8 4.67 8.67 4 9.5 4h5c.83 0 1.5.67 1.5 1.5V7" />
                  <path d="M3 11h18" />
                  <path d="M10 11v2h4v-2" />
                </svg>
              }
            >
              Hire Me Now
            </Button>

          </div>

          {/* PROFESSIONAL STATS */}
          <div className="mt-10 flex items-left justify-left gap-3 font-semibold max-md:mt-10 max-md:w-full max-md:justify-center max-md:gap-2">

            {/* Stat 1 */}
            <div className="min-w-[100px] max-md:min-w-0 max-md:w-[30%]">
              <h3 className="font-[var(--font-unbounded)] text-center text-[50px] font-bold text-[#F5F3EE] max-md:text-[34px]">
                <Counter end={4} suffix="+" />
              </h3>

              <p className="mt-1 text-center text-[12px] uppercase text-[#8F8A84] max-md:text-[9px] max-md:leading-4">
                Years Experience
              </p>
            </div>

            {/* Stat 2 */}
            <div className="min-w-[100px] max-md:min-w-0 max-md:w-[30%]">
              <h3 className="font-[var(--font-unbounded)] text-center text-[50px] font-bold text-[#F5F3EE] max-md:text-[34px]">
                <Counter end={60} suffix="+" />
              </h3>

              <p className="mt-1 text-center text-[12px] uppercase text-[#8F8A84] max-md:text-[9px] max-md:leading-4">
                Projects Completed
              </p>
            </div>

            {/* Stat 3 */}
            <div className="min-w-[100px] max-md:min-w-0 max-md:w-[30%]">
              <h3 className="font-[var(--font-unbounded)] text-center text-[50px] font-bold text-[#F5F3EE] max-md:text-[34px]">
                <Counter end={30} suffix="+" />
              </h3>

              <p className="mt-1 text-center text-[12px] uppercase text-[#8F8A84] max-md:text-[9px] max-md:leading-4">
                Happy Clients
              </p>
            </div>

          </div>

        </div>

        {/* CENTER IMAGE */}
        <div className="absolute left-[38%] top-0 z-10 h-full w-[25%] max-md:relative max-md:left-auto max-md:top-auto max-md:mt-10 max-md:h-[430px] max-md:w-full max-md:shrink-0">

          {/* Soft Glow Behind Person */}
          <div className="absolute left-1/2 top-[48%] h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C89A5B]/[0.045] blur-[70px] max-md:top-[45%] max-md:h-[260px] max-md:w-[260px]" />

          {/* OUTER CIRCLE */}
          <div className="absolute left-1/2 top-[45%] h-[410px] w-[410px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#CF9638]/25 transition-all duration-700 hover:scale-[1.025] hover:border-[#C89A5B]/45 max-md:h-[320px] max-md:w-[320px]" />

          {/* INNER CIRCLE */}
          <div className="absolute left-1/2 top-[45%] h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#F8DE82]/45 transition-all duration-700 hover:scale-[1.03] hover:border-[#ffffff] max-md:h-[275px] max-md:w-[275px]" />

          {/* GREEN DECORATIVE CIRCLE */}
          <div className="absolute right-[13%] top-[17%] h-[40px] w-[40px] rounded-full border-[4px] border-[#CF9638] shadow-[0_0_15px_rgba(101,229,28,0.10)] transition-transform duration-500 hover:scale-110 max-md:right-[17%] max-md:top-[10%] max-md:h-[34px] max-md:w-[34px]" />

          {/* SMALL YELLOW CIRCLE */}
          <div className="absolute right-[7%] top-[13%] h-[30px] w-[30px] rounded-full border-[4px] border-[#F8DE82] transition-transform duration-500 hover:scale-110 max-md:right-[10%] max-md:top-[6%] max-md:h-[25px] max-md:w-[25px]" />

          {/* YELLOW DOT */}
          <div className="absolute right-[5%] top-[26%] h-[48px] w-[48px] rounded-full bg-[#ffffff] shadow-[0_0_25px_rgba(255,184,0,0.12)] transition-all duration-500 hover:scale-110 hover:shadow-[0_0_35px_rgba(255,184,0,0.22)] max-md:right-[6%] max-md:top-[20%] max-md:h-[40px] max-md:w-[40px]" />

          {/* PERSON */}
          <div className="absolute bottom-0 left-1/2 w-[500px] -translate-x-1/2 max-md:w-[380px]">
            <Image
              src="/images/nadi.png"
              alt="Nadia Nisar - Frontend Developer"
              width={700}
              height={500}
              priority
              className="h-[600px] w-full object-contain transition-all duration-700 ease-out hover:scale-[1.015]"
            />
          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div className="relative z-20 ml-auto w-[31%] pb-4 pl-8 max-md:ml-0 max-md:mt-8 max-md:flex max-md:w-full max-md:flex-col max-md:items-center max-md:pb-12 max-md:pl-0 max-md:text-center">

          {/* SPECIALIZED */}
          <div className="mb-6 flex items-center gap-3 text-[14px] uppercase tracking-[0.06em] text-[#F5F3EE] max-md:justify-center">

            <span className="rounded-full bg-[#ffffff]/[0.05] px-[15px] py-[6px] text-[25px] font-bold text-[#C89A5B] shadow-[0_4px_15px_rgba(200,154,91,0.10)] transition-all duration-300 hover:scale-110 hover:shadow-[0_8px_25px_rgba(200,154,91,0.20)]">
              ♧
            </span>

            <span>
              Specialized In
            </span>

          </div>

          {/* RIGHT HEADING */}
          <h2 className="font-[var(--font-unbounded)] text-[27px] font-bold uppercase leading-[1.25] tracking-[-0.025em] text-[#F5F3EE] max-md:max-w-[350px] max-md:text-[27px]">
            WordPress &

            <span className="mt-1 block text-[#C89A5B]">
              Shopify Development
            </span>

          </h2>

          {/* RIGHT DESCRIPTION */}
          <p className="mt-6 max-w-[410px] text-[16px] leading-7 text-[#AFAAA3] max-md:max-w-[350px] max-md:px-2 max-md:text-[14px] max-md:leading-6">
            I create professional websites using WordPress, Elementor,
            ACF and modern frontend technologies.
          </p>

          {/* DOWNLOAD CV */}
          <Button
            href="#contact"
            className="mt-8 "
            icon={
              <Download className="h-4 w-4 sm:h-5 sm:w-5" />
            }
          >
            Hire Me Now
          </Button>

          {/* SOCIAL */}
          <div className="mt-20 flex items-center gap-4 max-md:mt-12 max-md:justify-center">

            <SocialLinks />

          </div>

        </div>

      </div>

      


    </section >
  );
}


{/* TECHNOLOGY BAR */}

// <div className="relative z-30 mx-auto -mt-10 max-w-[1280px] px-6 lg:px-10 max-md:mt-0 max-md:px-4">

//   <div className="mb-10 flex min-h-[60px] flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-[6px] border border-[#C89A5B]/20 bg-[#080808] px-6 py-4 shadow-[0_10px_35px_rgba(0,0,0,0.20)] transition-all duration-500 hover:border-[#C89A5B]/40 hover:bg-[#0A0A0A] max-md:gap-x-5 max-md:gap-y-4 max-md:px-4 max-md:py-5">

//     {/* Title */}
//     <span className="mr-2 text-[14px] font-semibold tracking-[0.04em] text-[#C89A5B] max-md:w-full max-md:text-center max-md:text-[11px]">
//       TECHNOLOGIES I WORK WITH
//     </span>

//     {/* Technologies */}
//     <span className="text-[13px] text-[#8E8982] transition-colors duration-300 hover:text-[#F5F3EE] max-md:text-[11px]">
//       HTML5
//     </span>

//     <span className="text-[13px] text-[#8E8982] transition-colors duration-300 hover:text-[#F5F3EE] max-md:text-[11px]">
//       CSS3
//     </span>

//     <span className="text-[13px] text-[#8E8982] transition-colors duration-300 hover:text-[#F5F3EE] max-md:text-[11px]">
//       JavaScript
//     </span>

//     <span className="text-[13px] text-[#8E8982] transition-colors duration-300 hover:text-[#F5F3EE] max-md:text-[11px]">
//       React
//     </span>

//     <span className="text-[13px] text-[#8E8982] transition-colors duration-300 hover:text-[#F5F3EE] max-md:text-[11px]">
//       Next.js
//     </span>

//     <span className="text-[13px] text-[#8E8982] transition-colors duration-300 hover:text-[#F5F3EE] max-md:text-[11px]">
//       Tailwind CSS
//     </span>

//     <span className="text-[13px] text-[#8E8982] transition-colors duration-300 hover:text-[#F5F3EE] max-md:text-[11px]">
//       Bootstrap
//     </span>

//   </div>

// </div>