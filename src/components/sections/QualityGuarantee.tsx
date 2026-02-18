"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import Button from "@/components/ui/Button";
import { QUALITY_IMAGES } from "@/lib/constants";

export default function QualityGuarantee() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const chatBubble1Ref = useRef<HTMLDivElement>(null);
  const chatBubble2Ref = useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        y: 60,
        opacity: 0,
        duration: 0.8,
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

  // Crossfade between model images
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % QUALITY_IMAGES.models.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!chatBubble1Ref.current || !chatBubble2Ref.current) return;

    const bubble1 = chatBubble1Ref.current;
    const bubble2 = chatBubble2Ref.current;

    const animate = () => {
      const tl = gsap.timeline({
        onComplete: () => {
          setTimeout(animate, 1500);
        },
      });

      tl.set([bubble1, bubble2], { autoAlpha: 0, y: 10 })
        .to(bubble2, {
          autoAlpha: 1,
          y: 0,
          duration: 0.4,
          ease: "back.out(1.4)",
        })
        .to(
          bubble1,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.4,
            ease: "back.out(1.4)",
          },
          "+=0.5"
        )
        .to(
          [bubble1, bubble2],
          {
            autoAlpha: 0,
            y: -10,
            duration: 0.3,
            ease: "power2.in",
          },
          "+=3"
        );
    };

    animate();

    return () => {
      gsap.killTweensOf([bubble1, bubble2]);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-[6rem] lg:py-[9.6rem]">
      <div className="max-w-[90rem] mx-auto px-[2rem]">
        {/* Heading */}
        <div className="text-center mb-[3.2rem] lg:mb-[4.8rem]">
          <h2 className="text-[2.8rem] lg:text-[3.2rem] font-semibold leading-[1.08] tracking-[-0.128rem] mb-[1.2rem]">
            Her ölçekte garantili kalite
          </h2>
          <p className="text-[1.5rem] text-[#666] leading-[1.5] max-w-[48rem] mx-auto">
            Moda odaklı yapay zekadan özel rötuş iş akışlarımıza kadar,
            her görsel markanızın tarzına ve standartlarına uygun olarak iyileştirilir.
          </p>
        </div>

        {/* Large model image with crossfade and chat overlays */}
        <div className="relative rounded-[2rem] overflow-hidden max-w-[72rem] mx-auto mb-[4.8rem] aspect-[16/10]">
          {QUALITY_IMAGES.models.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`AI fashion model ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                activeImage === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {/* Chat bubble - "All set! Your image is fixed" */}
          <div
            ref={chatBubble1Ref}
            className="absolute top-[40%] left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-auto lg:right-[15%] bg-white rounded-[1.2rem] px-[1.6rem] py-[1.2rem] shadow-[0_4px_24px_rgba(0,0,0,0.12)] flex items-center gap-[1rem]"
            style={{ visibility: "hidden" }}
          >
            <div className="w-[2.4rem] h-[2.4rem] rounded-full bg-[#22c55e] flex items-center justify-center shrink-0">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8L7 12L13 4"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-[1.3rem] font-medium text-[#272523] whitespace-nowrap">
              Tamam! Görseliniz düzeltildi
            </span>
          </div>

          {/* Chat bubble - user message */}
          <div
            ref={chatBubble2Ref}
            className="absolute bottom-[15%] left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-auto lg:right-[8%] bg-[#272523] rounded-[1.2rem] rounded-br-[0.3rem] px-[1.4rem] py-[1rem] shadow-[0_4px_24px_rgba(0,0,0,0.15)] flex items-center gap-[0.8rem]"
            style={{ visibility: "hidden" }}
          >
            <span className="text-[1.2rem] text-white/90 whitespace-nowrap">
              Modelin saçını düzeltir misiniz? Teşekkürler!
            </span>
            <div className="w-[2rem] h-[2rem] rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2 10L10 2M10 2H4M10 2V8"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Creative Partner Program CTA */}
        <div className="bg-[#272523] rounded-[2rem] p-[3.2rem] lg:p-[4.8rem] text-center text-white max-w-[72rem] mx-auto">
          <h3 className="text-[2.4rem] lg:text-[2.8rem] font-semibold leading-[1.15] tracking-[-0.112rem] mb-[1.2rem]">
            fashnai.co Kreatif Partner Programı
          </h3>
          <p className="text-[1.4rem] lg:text-[1.5rem] text-white/50 leading-[1.5] max-w-[40rem] mx-auto mb-[2.4rem]">
            AI moda ile neler mümkün olduğunu sergilemeye hazır mısınız?
            Üst düzey moda görselleri oluşturun ve fashnai.co ile dijital varlığınızı büyütün.
          </p>
          <Button href="/contact-us" variant="white">
            Başvur
          </Button>
        </div>
      </div>
    </section>
  );
}
