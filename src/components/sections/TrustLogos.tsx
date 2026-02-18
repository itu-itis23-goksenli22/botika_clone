"use client";

import { TRUST_LOGOS } from "@/lib/constants";

export default function TrustLogos() {
  const logos = TRUST_LOGOS;

  return (
    <section className="bg-[#272523] py-[3.2rem] lg:py-[4rem] overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-[2rem] mb-[2rem]">
        <p className="text-center text-[1.3rem] lg:text-[1.4rem] text-white/60 tracking-[0.02em]">
          En iyi moda kreatif ekipleri fashnai.co&apos;yu tercih ediyor
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div className="flex animate-scroll">
          {/* First set */}
          <div className="flex shrink-0 items-center gap-[3rem] lg:gap-[4rem]">
            {logos.map((logo, i) => (
              <img
                key={`a-${i}`}
                src={logo.src}
                alt={logo.alt}
                className="h-[1.8rem] lg:h-[2.4rem] w-auto object-contain brightness-0 invert opacity-60"
              />
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex shrink-0 items-center gap-[3rem] lg:gap-[4rem] ml-[3rem] lg:ml-[4rem]">
            {logos.map((logo, i) => (
              <img
                key={`b-${i}`}
                src={logo.src}
                alt={logo.alt}
                className="h-[1.8rem] lg:h-[2.4rem] w-auto object-contain brightness-0 invert opacity-60"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
