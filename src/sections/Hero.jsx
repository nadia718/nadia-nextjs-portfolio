// "use client";

import Image from "next/image";
import Button from "@/components/Button";
import Counter from "@/components/Counter";
import SocialLinks from "@/components/SocialLinks";
import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#090909] text-white">
      <div className="pointer-events-none absolute left-[25%] top-[5%] h-[600px] w-[700px] rounded-full bg-[#C89A5B]/20 blur-[180px] md:left-[30%] md:h-[500px] md:w-[550px] max-sm:left-1/2 max-sm:top-[5%] max-sm:h-[400px] max-sm:w-[400px] max-sm:-translate-x-1/2 max-sm:blur-[120px]" />

      <div className="relative mx-auto flex min-h-[680px] max-w-[1280px] flex-col px-5 py-14 font-[var(--font-manrope)] sm:px-8 md:px-10 lg:min-h-[680px] lg:flex-row lg:items-center lg:py-0">

        {/* LEFT CONTENT */}
        <div className="relative z-20 order-1 w-full text-center lg:w-[36%] lg:text-left">
          <div className="mb-4 flex items-center justify-center gap-2 lg:justify-start">
            <span className="h-[1px] w-7 bg-[#C89A5B]" />
            <p className="text-[14px] font-semibold tracking-[0.08em] text-[#C89A5B] sm:text-[15px]">
              HI, I'M
            </p>
          </div>

          <h1 className="font-[var(--font-unbounded)] text-[28px] font-extrabold uppercase leading-[1.2] tracking-[-0.045em] text-[#F5F3EE] sm:text-[34px] lg:text-[37px]">
            <span className="block">Nadia Nisar</span>
            <span className="mt-2 block text-[#C89A5B]">
              Frontend Developer
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-[400px] text-[15px] leading-6 text-[#AFAAA3] sm:mt-6 sm:text-[17px] sm:leading-7 lg:mx-0">
            I build modern, responsive websites that help businesses and brands
            grow online.
          </p>

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

          {/* STATS */}
          <div className="mt-9 flex justify-center gap-2 sm:gap-5 lg:justify-start">
            <div className="min-w-0 flex-1 sm:min-w-[100px] sm:flex-none">
              <h3 className="font-[var(--font-unbounded)] text-[28px] font-bold text-[#F5F3EE] sm:text-[42px] lg:text-[48px]">
                <Counter end={4} suffix="+" />
              </h3>
              <p className="mt-1 text-[7px] uppercase text-[#8F8A84] sm:text-[10px] lg:text-[11px]">
                Years Experience
              </p>
            </div>

            <div className="min-w-0 flex-1 sm:min-w-[100px] sm:flex-none">
              <h3 className="font-[var(--font-unbounded)] text-[28px] font-bold text-[#F5F3EE] sm:text-[42px] lg:text-[48px]">
                <Counter end={60} suffix="+" />
              </h3>
              <p className="mt-1 text-[7px] uppercase text-[#8F8A84] sm:text-[10px] lg:text-[11px]">
                Projects Completed
              </p>
            </div>

            <div className="min-w-0 flex-1 sm:min-w-[100px] sm:flex-none">
              <h3 className="font-[var(--font-unbounded)] text-[28px] font-bold text-[#F5F3EE] sm:text-[42px] lg:text-[48px]">
                <Counter end={30} suffix="+" />
              </h3>
              <p className="mt-1 text-[7px] uppercase text-[#8F8A84] sm:text-[10px] lg:text-[11px]">
                Happy Clients
              </p>
            </div>
          </div>
        </div>

        {/* CENTER IMAGE */}
        <div className="relative z-10 order-2 mx-auto mt-10 h-[390px] w-full max-w-[360px] sm:h-[460px] sm:max-w-[430px] lg:mt-0 lg:h-[680px] lg:w-[30%] lg:max-w-none">
          {/* Image Glow */}
          <div className="absolute left-1/2 top-[45%] h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C89A5B]/10 blur-[80px] sm:h-[320px] sm:w-[320px]" />

          {/* Outer Circle */}
          <div className="absolute left-1/2 top-[43%] h-[285px] w-[285px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#CF9638]/25 sm:h-[360px] sm:w-[360px] lg:h-[410px] lg:w-[410px]" />

          {/* Inner Circle */}
          <div className="absolute left-1/2 top-[43%] h-[245px] w-[245px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#F8DE82]/35 sm:h-[305px] sm:w-[305px] lg:h-[350px] lg:w-[350px]" />

          {/* Decorative Circles */}
          <div className="absolute right-[10%] top-[8%] h-[32px] w-[32px] rounded-full border-[3px] border-[#CF9638] sm:h-[40px] sm:w-[40px]" />

          <div className="absolute right-[2%] top-[5%] h-[24px] w-[24px] rounded-full border-[3px] border-[#F8DE82] sm:h-[30px] sm:w-[30px]" />

          <div className="absolute right-[0%] top-[18%] h-[38px] w-[38px] rounded-full bg-white shadow-[0_0_30px_rgba(255,255,255,0.12)] sm:h-[48px] sm:w-[48px]" />

          {/* PERSON */}
          <div className="absolute bottom-0 left-1/2 w-[300px] -translate-x-1/2 sm:w-[380px] lg:w-[500px]">
            <Image
              src="/images/frontend.png"
              alt="Nadia Nisar - Frontend Developer"
              width={700}
              height={900}
              priority
              className="h-auto max-h-[440px] pt-[20px] lg:pt-[0px] w-full object-contain object-bottom sm:max-h-[550px] lg:max-h-[620px]"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative z-20 pt-[50px] sm:pt:[0px] lg:pt-[0px] order-3 w-full text-center lg:ml-auto lg:w-[31%] lg:pl-8 lg:text-left">
          <div className="mb-5 flex items-center justify-center gap-3 text-[13px] uppercase tracking-[0.06em] text-[#F5F3EE] lg:justify-start sm:text-[14px]">
            <span className="rounded-full bg-white/[0.05] px-[14px] py-[5px] text-[21px] font-bold text-[#C89A5B]">
              ♧
            </span>
            <span>Specialized In</span>
          </div>

          <h2 className="font-[var(--font-unbounded)] text-[22px] font-bold uppercase leading-[1.25] tracking-[-0.025em] text-[#F5F3EE] sm:text-[26px] lg:text-[27px]">
            WordPress &
            <span className="mt-1 block text-[#C89A5B]">
              Shopify Development
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[350px] text-[14px] leading-6 text-[#AFAAA3] sm:text-[16px] sm:leading-7 lg:mx-0 lg:max-w-[410px]">
            I create professional websites using WordPress, Elementor, ACF and
            modern frontend technologies.
          </p>

          <div className="mt-7 flex justify-center lg:justify-start">
            <Button
              href="#contact"
              icon={<Download className="h-4 w-4 sm:h-5 sm:w-5" />}
            >
              Hire Me Now
            </Button>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4 lg:mt-16 lg:justify-start">
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}