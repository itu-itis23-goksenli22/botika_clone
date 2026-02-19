"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import Button from "@/components/ui/Button";
import { PRODUCT_SHOWCASE_IMAGES, VIDEO_TEASER_URL } from "@/lib/constants";

const PRODUCT_TYPES = [
  {
    label: "Model \u00fczerinde",
    image: PRODUCT_SHOWCASE_IMAGES.onModel,
  },
  {
    label: "D\u00fcz y\u00fczey",
    image: PRODUCT_SHOWCASE_IMAGES.flatLay,
  },
  {
    label: "Manken",
    image: PRODUCT_SHOWCASE_IMAGES.mannequin,
  },
  {
    label: "Video",
    video: VIDEO_TEASER_URL,
  },
];

export default function ProductShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeType, setActiveType] = useState(0);

  // GSAP ScrollTrigger: pin section and cycle through product types
  useEffect(() => {
    if (!sectionRef.current || !cardsRef.current) return;

    const cards = cardsRef.current.querySelectorAll(".showcase-card");
    const totalCards = cards.length;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 10%",
          end: `+=${totalCards * 80}%`,
          pin: true,
          scrub: 0.5,
          onUpdate: (self) => {
            const progress = self.progress;
            const newIndex = Math.min(
              Math.floor(progress * totalCards),
              totalCards - 1
            );
            setActiveType(newIndex);
          },
        },
      });

      // Animate each card sliding up and stacking
      cards.forEach((card, i) => {
        if (i === 0) return;
        tl.fromTo(
          card,
          { yPercent: 100, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 1, ease: "power2.out" },
          i * 0.8
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-[6rem] lg:py-[9.6rem]">
      <div className="max-w-[110rem] mx-auto px-[2rem]">
        {/* Heading */}
        <div className="text-center mb-[3.2rem] lg:mb-[4.8rem]">
          <h2 className="text-[2.8rem] lg:text-[3.2rem] font-semibold leading-[1.08] tracking-[-0.128rem] mb-[1.6rem]">
            Her moda iş akışı için tek platform
          </h2>
          <Button href="/products" variant="outlined">
            Daha Fazla
          </Button>
        </div>

        {/* Card stack area */}
        <div
          ref={cardsRef}
          className="relative w-full aspect-[16/9] rounded-[1.6rem] overflow-hidden bg-[#f5f5f5]"
        >
          {PRODUCT_TYPES.map((type, index) => (
            <div
              key={type.label}
              className={`showcase-card absolute inset-0 rounded-[1.6rem] overflow-hidden ${
                index === 0 ? "" : "opacity-0"
              }`}
              style={{ zIndex: index }}
            >
              {"video" in type && type.video ? (
                <video
                  src={type.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={"image" in type ? type.image : ""}
                  alt={type.label}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          ))}

          {/* Gradient overlay to cover English labels in images */}
          <div className="absolute right-0 top-0 bottom-0 w-[45%] bg-gradient-to-l from-white/90 via-white/70 to-transparent z-[5]" />

          {/* Turkish labels */}
          <div className="absolute right-[4rem] lg:right-[6rem] top-1/2 -translate-y-1/2 flex flex-col gap-[0.4rem] z-10">
            {PRODUCT_TYPES.map((type, index) => (
              <span
                key={type.label}
                className={`text-[2rem] lg:text-[3.2rem] font-semibold transition-all duration-500 leading-[1.3] ${
                  activeType === index
                    ? "text-[#272523] opacity-100"
                    : "text-[#272523]/20"
                }`}
              >
                {type.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
