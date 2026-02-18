"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { HERO_IMAGES } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".hero-text > *", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power2.out",
        delay: 0.2,
      });
      gsap.from(".hero-image-wrapper", {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.5,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white min-h-[60vh] lg:min-h-[75vh] overflow-hidden"
    >
      <div className="hero-image-wrapper absolute top-0 right-0 w-full lg:w-[60%] h-full">
        {HERO_IMAGES.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`AI moda modeli ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-1000 ease-in-out ${
              activeIndex === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="hidden lg:block absolute inset-y-0 left-0 w-[30%] bg-gradient-to-r from-white to-transparent" />
      </div>

      <div className="relative z-10 px-[2rem] lg:px-[6rem] xl:px-[10rem] pt-[12rem] lg:pt-[16rem] pb-[4rem] lg:pb-[6rem]">
        <div className="hero-text max-w-[44rem]">
          <h1 className="text-[3.6rem] lg:text-[4.8rem] leading-[1.05] tracking-[-0.02em] mb-[2rem]">
            <span className="font-normal">AI ile oluşturulan modeller</span>
            <br />
            <span className="font-semibold">
              dünya çapında moda markalarının güvendiği
            </span>
          </h1>
          <p className="text-[1.5rem] lg:text-[1.6rem] text-[#666] leading-[1.55] max-w-[42rem] mb-[3.2rem]">
            fashnai.co, öncü markalara özgün ve markaya uygun görseller oluşturmalarında yardımcı olur; ekiplere yaratıcı özgürlük, tutarlılık ve tam kontrol sağlar.
          </p>
          <div className="flex items-center gap-[1.2rem]">
            <Button href="https://app.fashnai.co/create" external>
              Başla
            </Button>
            <Button href="/contact-us" variant="outlined">
              Görüşme Ayarla
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
