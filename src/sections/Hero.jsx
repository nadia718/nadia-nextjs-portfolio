"use client";

import Image from "next/image";
import Button from "@/components/Button";
import Counter from "@/components/Counter";
import SocialLinks from "@/components/SocialLinks";
import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="group relative overflow-hidden bg-[#070707] text-white">

      {/*PREMIUM HERO BACKGROUND*/}

      {/* Base dark + warm gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(206,151,58,0.09)_0%,rgba(206,151,58,0.045)_24%,transparent_62%),linear-gradient(135deg,#070707_0%,#0B0907_45%,#120D08_100%)]" />

      {/* Reference-style subtle grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.11] bg-[linear-gradient(rgba(206,151,58,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(206,151,58,0.18)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:linear-gradient(to_bottom,black_0%,black_65%,transparent_100%)]" />

      {/* Large left ambient glow */}
      <div className="pointer-events-none absolute -left-[260px] -top-[180px] h-[700px] w-[700px] rounded-full bg-[#CE973A]/[0.075] blur-[170px] transition-all duration-1000 group-hover:bg-[#CE973A]/[0.11] group-hover:scale-110" />

      {/* Main center glow */}
      <div className="pointer-events-none absolute left-1/2 top-[5%] h-[620px] w-[760px] -translate-x-1/2 rounded-full bg-[#CE973A]/[0.045] blur-[180px] transition-all duration-1000 group-hover:bg-[#CE973A]/[0.075] group-hover:scale-105" />

      {/* Right warm glow */}
      <div className="pointer-events-none absolute -right-[250px] top-[10%] h-[650px] w-[650px] rounded-full bg-[#F5D97A]/[0.025] blur-[180px] transition-all duration-1000 group-hover:bg-[#F5D97A]/[0.05]" />

      {/* Hero center light */}
      <div className="pointer-events-none absolute left-1/2 top-[42%] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(206,151,58,0.10)_0%,rgba(206,151,58,0.035)_35%,transparent_72%)] blur-[20px]" />

      {/* Dark cinematic vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(0,0,0,0.60)_100%)]" />

      {/* Top fade */}
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-[120px] bg-gradient-to-b from-[#050505]/80 to-transparent" />

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[220px] bg-gradient-to-t from-[#050505] via-[#050505]/75 to-transparent" />

      {/*DECORATIVE LIGHT POINTS */}

      <div className="pointer-events-none absolute left-[12%] top-[32%] h-1 w-1 rounded-full bg-[#F5D97A] opacity-60 shadow-[0_0_15px_#F5D97A]" />

      <div className="pointer-events-none absolute left-[43%] top-[23%] h-1.5 w-1.5 rounded-full bg-[#CE973A] opacity-60 shadow-[0_0_18px_#CE973A]" />

      <div className="pointer-events-none absolute right-[18%] top-[38%] h-1 w-1 rounded-full bg-[#F5D97A] opacity-50 shadow-[0_0_15px_#F5D97A]" />

      <div className="pointer-events-none absolute left-[48%] bottom-[22%] h-1 w-1 rounded-full bg-[#CE973A] opacity-50 shadow-[0_0_15px_#CE973A]" />

      {/* HERO CONTENT */}

      <div className="relative z-10 mx-auto flex min-h-[680px] max-w-[1280px] flex-col px-5 py-14 font-[var(--font-manrope)] sm:px-8 md:px-10 lg:min-h-[680px] lg:flex-row lg:items-center lg:py-0">

        {/* LEFT CONTENT*/}

        <div className="group/left relative z-20 order-1 w-full text-center lg:w-[36%] lg:text-left">

          {/* Local hover atmosphere */}
          <div className="pointer-events-none absolute -left-24 top-0 h-[350px] w-[350px] rounded-full bg-[#CE973A]/0 blur-[120px] transition-all duration-700 group-hover/left:bg-[#CE973A]/[0.09]" />

          <div className="relative">

            {/* Label */}
            <div style={{ fontFamily: "var(--font-dancing-script)" }} className="mb-4 flex items-center justify-center gap-2 lg:justify-start">



              <p className="text-[14px] font-semibold tracking-[0.12em] text-[#F2DA7D] sm:text-[12px]">
                HI, I'M
              </p>

            </div>

            {/* Heading */}
            <h1 className="font-[var(--font-unbounded)] text-[28px] font-extrabold leading-[1.05] tracking-[-0.045em] text-white sm:text-[34px] lg:text-[37px] ">
              <span className="block uppercase">
                Nadia Nisar
              </span>

              <span
                style={{ fontFamily: "var(--font-great-vibes)" }}
                className="mt-1 block text-[28px] font-normal  normal-case leading-[1.5] tracking-normal text-[#CE973A] sm:text-[60px] lg:text-[45px]"
              >
                Frontend Developer
              </span>
            </h1>
            {/* Description */}
            <p className="mx-auto  max-w-[400px] text-[16px] leading-6 text-[#ffffff] sm:mt-2 sm:text-[17px] sm:leading-7 lg:mx-0">
              I build modern, responsive websites that help businesses and
              brands grow online.
            </p>

            {/* CTA */}
            <div className="mt-7 flex justify-center lg:justify-start">
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

            {/* Stats */}
            <div className="mt-9 flex justify-center gap-2 sm:gap-5 lg:justify-start">

              <div className="min-w-0 flex-1 sm:min-w-[100px] sm:flex-none">
                <h3 className="font-[var(--font-unbounded)] text-[28px] font-bold text-white transition-colors duration-500 group-hover/left:text-[#F5D97A] sm:text-[30px] lg:text-[35px]">
                  <Counter end={4} suffix="+" />
                </h3>

                <p className="mt-1 text-[10px] uppercase tracking-[0.08em] text-[#ffffff] sm:text-[10px] lg:text-[14px]">
                  Years Experience
                </p>
              </div>

              <div className="min-w-0 flex-1 sm:min-w-[100px] sm:flex-none">
                <h3 className="font-[var(--font-unbounded)] text-[28px] font-bold text-white transition-colors duration-500 group-hover/left:text-[#F5D97A] sm:text-[30px] lg:text-[35px]">
                  <Counter end={60} suffix="+" />
                </h3>

                <p className="mt-1 text-[10px] uppercase tracking-[0.08em] text-[#ffffff] sm:text-[10px] lg:text-[14px]">
                  Projects Completed
                </p>
              </div>



            </div>
          </div>
        </div>

        {/* CENTER IMAGE*/}

        <div className="group/image relative z-10 order-2 mx-auto mt-10 h-[390px] w-full max-w-[360px] sm:h-[460px] sm:max-w-[430px] lg:mt-0 lg:h-[680px] lg:w-[30%] lg:max-w-none">

          {/* Large image atmosphere */}
          <div className="pointer-events-none absolute left-1/2 top-[47%] h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#CE973A]/[0.07] blur-[100px] transition-all duration-700 group-hover/image:scale-110 group-hover/image:bg-[#CE973A]/[0.15] group-hover/image:opacity-100 sm:h-[460px] sm:w-[460px] lg:h-[520px] lg:w-[520px]" />

          {/* Bright center glow */}
          <div className="pointer-events-none absolute left-1/2 top-[53%] h-[250px] w-[250px] -translate-x-1/2 rounded-full bg-[#F5D97A]/[0.045] blur-[90px] transition-all duration-700 group-hover/image:bg-[#F5D97A]/[0.12] sm:h-[310px] sm:w-[310px]" />

          {/* Outer ring */}
          <div className="absolute left-1/2 top-[43%] h-[285px] w-[285px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#CE973A]/25 transition-all duration-700 group-hover/image:scale-[1.04] group-hover/image:border-[#CE973A]/50 group-hover/image:shadow-[0_0_90px_rgba(206,151,58,0.14)] sm:h-[360px] sm:w-[360px] lg:h-[410px] lg:w-[410px]" />

          {/* Inner ring */}
          <div className="absolute left-1/2 top-[43%] h-[245px] w-[245px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#F5D97A]/25 transition-all duration-700 group-hover/image:scale-[1.06] group-hover/image:border-[#F5D97A]/50 sm:h-[305px] sm:w-[305px] lg:h-[350px] lg:w-[350px]" />

          {/* Decorative ring 1 */}
          <div className="absolute right-[10%] top-[8%] h-[32px] w-[32px] rounded-full border-[2px] border-[#CE973A] transition-all duration-500 group-hover/image:scale-125 group-hover/image:shadow-[0_0_30px_rgba(206,151,58,0.35)] sm:h-[40px] sm:w-[40px]" />

          {/* Decorative ring 2 */}
          <div className="absolute right-[2%] top-[5%] h-[24px] w-[24px] rounded-full border-[2px] border-[#F5D97A] transition-all duration-500 group-hover/image:scale-125 group-hover/image:shadow-[0_0_30px_rgba(245,217,122,0.30)] sm:h-[30px] sm:w-[30px]" />

          {/* White light */}
          <div className="absolute right-0 top-[18%] h-[38px] w-[38px] rounded-full bg-white shadow-[0_0_30px_rgba(255,255,255,0.14)] transition-all duration-500 group-hover/image:scale-125 group-hover/image:shadow-[0_0_55px_rgba(255,255,255,0.28)] sm:h-[48px] sm:w-[48px]" />

          {/* Person */}
          <div className="absolute bottom-0 left-1/2 w-[300px] -translate-x-1/2 transition-transform duration-700 ease-out group-hover/image:scale-[1.018] sm:w-[380px] lg:w-[500px]">

            <Image
              src="/images/frontend.png"
              alt="Nadia Nisar - Frontend Developer"
              width={700}
              height={900}
              priority
              className="h-auto max-h-[440px] w-full object-contain object-bottom pt-[20px] sm:max-h-[550px] lg:max-h-[620px] lg:pt-0"
            />

          </div>
        </div>

        {/*RIGHT CONTENT */}

        <div className="group/right relative z-20 order-3 w-full  text-center  lg:ml-auto lg:w-[31%] lg:pl-8  lg:text-left">

          {/* Right ambient glow */}
          <div className="pointer-events-none absolute -right-24 top-0  w-[350px] rounded-full bg-[#CE973A]/0 blur-[130px] transition-all duration-700 group-hover/right:bg-[#CE973A]/[0.08]" />

          <div className="relative">

            {/* Specialization label */}
            <div className="mb-5 mt-[50px] flex items-center justify-center gap-3 text-[13px] uppercase tracking-[0.08em] text-white lg:justify-start sm:text-[14px]">

              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#CE973A]/20 bg-[#CE973A]/[0.05] text-[20px] font-bold text-[#CE973A] transition-all duration-500 hover:border-[#CE973A]/50 hover:bg-[#CE973A]/10 hover:shadow-[0_0_30px_rgba(206,151,58,0.18)]">
                ♧
              </span>

              <span className="text-[#D7D1C8]">
                Specialized In
              </span>

            </div>

            {/* Right heading */}
            <h2 className="font-[var(--font-unbounded)] text-[22px] font-semibold normal-case leading-[1.5] tracking-[-0.025em] text-white sm:text-[26px] lg:text-[23px]">

              WordPress &
              <span style={{ fontFamily: "var(--font-great-vibes)" }} className=" normal-case mt-1 block text-[#CE973A] transition-colors duration-500 group-hover/right:text-[#F5D97A] lg:text-[30px] font-semibold  leading-[1.2]">
                Shopify Development
              </span>

            </h2>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-[350px] text-[16px] leading-6 text-[#ffffff] sm:text-[16px] sm:leading-7 lg:mx-0 lg:max-w-[410px]">
              I create professional websites using WordPress, Elementor, ACF
              and modern frontend technologies.
            </p>

            {/* CTA */}
            <div className="mt-7 flex justify-center lg:justify-start">
              <Button
                href="#contact"
                icon={<Download className="h-4 w-4 sm:h-5 sm:w-5" />}
              >
                Hire Me Now
              </Button>
            </div>

            <div className="mt-[50px] flex justify-center lg:justify-start">
              <SocialLinks />
            </div>

          </div>
        </div>

      </div>

      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#CE973A]/30 to-transparent" />

    </section>
  );
}