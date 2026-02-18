"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { HERO_SLIDES } from "@/lib/constants";
import { gsap } from "@/lib/gsap";
import Button from "@/components/ui/Button";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

export default function BrandsCarousel() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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

  return (
    <section ref={sectionRef} className="py-[6rem] lg:py-[9.6rem] overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-[2rem]">
        {/* Heading */}
        <div className="text-center mb-[3.2rem] lg:mb-[4.8rem]">
          <h2 className="text-[2.8rem] lg:text-[3.2rem] font-semibold leading-[1.08] tracking-[-0.128rem] mb-[1.2rem]">
            Gerçek markalar, gerçek sonuçlar.
          </h2>
          <p className="text-[1.5rem] text-[#666] leading-[1.5] mb-[2.4rem]">
            AI ile oluşturulan moda modelleri nasıl fark yaratıyor, görün.
          </p>
          <div className="flex items-center justify-center gap-[1.2rem]">
            <Button href="https://app.fashnai.co/create" external>
              Başla
            </Button>
            <Button href="/contact-us" variant="outlined">
              Görüşme Ayarla
            </Button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="max-w-[100rem] mx-auto relative">
        <Swiper
          modules={[EffectCoverflow, Navigation]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          speed={600}
          navigation={{
            nextEl: ".brands-next",
            prevEl: ".brands-prev",
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: -15,
            depth: 80,
            scale: 0.9,
            modifier: 1,
            slideShadows: false,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
          className="brands-carousel"
        >
          {HERO_SLIDES.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="!w-[22rem] sm:!w-[26rem] lg:!w-[30rem]"
            >
              <div
                className={`relative overflow-hidden rounded-[1.2rem] aspect-[3/4] transition-all duration-600 ${
                  activeIndex === index
                    ? "opacity-100 scale-100"
                    : "opacity-50 scale-95"
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                />
                {/* Brand tag */}
                <div
                  className={`absolute bottom-[1.4rem] left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full px-[1.4rem] py-[0.5rem] transition-opacity duration-400 ${
                    activeIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <span className="text-[1.1rem] font-semibold text-[#272523] uppercase tracking-[0.05em]">
                    {slide.brand}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <div className="flex items-center justify-center gap-[1.6rem] mt-[3.2rem]">
          <button
            className="brands-prev w-[4rem] h-[4rem] rounded-full border border-[#272523]/20 flex items-center justify-center hover:bg-[#272523] hover:text-white transition-all duration-300 text-[#272523]"
            aria-label="Previous"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M10 4L6 8L10 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            className="brands-next w-[4rem] h-[4rem] rounded-full border border-[#272523]/20 flex items-center justify-center hover:bg-[#272523] hover:text-white transition-all duration-300 text-[#272523]"
            aria-label="Next"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M6 4L10 8L6 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <style jsx global>{`
        .brands-carousel .swiper-wrapper {
          align-items: center;
        }
        .brands-carousel .swiper-slide {
          transition: transform 0.6s ease, opacity 0.6s ease;
        }
        .brands-carousel .swiper-slide-active {
          transform: scale(1.1);
          z-index: 2;
        }
      `}</style>
    </section>
  );
}
