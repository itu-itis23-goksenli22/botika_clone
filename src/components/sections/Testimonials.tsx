"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { TESTIMONIALS } from "@/lib/constants";
import ProgressCircle from "@/components/ui/ProgressCircle";

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progressActive, setProgressActive] = useState(true);

  useEffect(() => {
    if (TESTIMONIALS.length <= 1) return;

    const interval = setInterval(() => {
      setProgressActive(false);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
        setProgressActive(true);
      }, 100);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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

  const testimonial = TESTIMONIALS[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="py-[6rem] lg:py-[9.6rem]"
    >
      <div className="max-w-[70rem] mx-auto px-[2rem] text-center">
        <blockquote className="text-[2rem] lg:text-[2.4rem] font-medium leading-[1.35] tracking-[-0.04rem] mb-[3.2rem] text-[#272523]">
          {testimonial.quote}
        </blockquote>

        <div className="flex flex-col items-center gap-[1.6rem]">
          {/* Author Photo with Progress Circle */}
          <div className="relative w-[7.2rem] h-[7.2rem]">
            <img
              src={testimonial.photo}
              alt={testimonial.author}
              className="w-full h-full rounded-full object-cover"
            />
            <ProgressCircle isActive={progressActive} size={72} />
          </div>

          <div>
            <p className="text-[1.4rem] font-semibold text-black">
              {testimonial.author}
            </p>
            <p className="text-[1.3rem] text-[#666]">
              {testimonial.title}, {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
