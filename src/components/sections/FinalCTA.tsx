"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".final-cta-content > *", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-[6rem] lg:py-[9.6rem]">
      <div className="max-w-[90rem] mx-auto px-[2rem]">
        <div className="final-cta-content flex flex-col items-center text-center">
          <h2 className="text-[3.6rem] lg:text-[6.4rem] font-semibold leading-[1.05] tracking-[-0.288rem] max-w-[64rem] mb-[3.2rem]">
            Fotoğraf çekimlerini dönüştürün ve kısa sürede kusursuz sonuçlar elde edin
          </h2>
          <div className="flex items-center gap-[1.6rem]">
            <Button href="https://app.fashnai.co/create" external>
              Başla
            </Button>
            <Button href="/contact-us" variant="text">
              Görüşme Ayarla
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
