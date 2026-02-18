"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import StatBadge from "@/components/ui/StatBadge";
import { gsap } from "@/lib/gsap";
import { CaseStudy } from "@/types";

interface CaseStudyBlockProps extends CaseStudy {
  className?: string;
}

export default function CaseStudyBlock({
  headline,
  stat,
  statLabel,
  description,
  supportingText,
  quote,
  quoteAuthor,
  caseStudyUrl,
  images,
  reversed,
  className = "",
}: CaseStudyBlockProps) {
  const blockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!blockRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(blockRef.current, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: blockRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, blockRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={blockRef}
      className={`case-study-block py-[3.2rem] lg:py-[4.8rem] ${className}`}
    >
      <div
        className={`flex flex-col ${
          reversed ? "lg:flex-row-reverse" : "lg:flex-row"
        } gap-[2.4rem] lg:gap-[4.8rem] items-center`}
      >
        {/* Text Content */}
        <div className="lg:w-[45%] flex flex-col gap-[1.6rem]">
          <StatBadge stat={stat} label={statLabel} />
          <h2 className="text-[2.8rem] lg:text-[3.2rem] font-semibold leading-[1.08] tracking-[-0.112rem]">
            {headline}
          </h2>
          {description && (
            <p className="text-[1.6rem] text-[#666] leading-[1.5]">
              {description}
            </p>
          )}
          {supportingText && (
            <p className="text-[1.4rem] text-[#999] leading-[1.5]">
              {supportingText}
            </p>
          )}
          {quote && (
            <blockquote className="text-[1.6rem] lg:text-[1.8rem] leading-[1.5] italic text-[#272523]">
              {quote}
            </blockquote>
          )}
          {quoteAuthor && (
            <p className="text-[1.4rem] text-[#666]">{quoteAuthor}</p>
          )}
          <Link
            href={caseStudyUrl}
            className="inline-flex items-center gap-[0.6rem] text-[1.4rem] font-medium animated-link w-fit"
          >
            Vaka çalışmasını oku
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M3 8h10m0 0L9 4m4 4L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        {/* Image */}
        <div className="lg:w-[55%]">
          <div className="rounded-[1.6rem] overflow-hidden group">
            <img
              src={images[0]}
              alt={headline}
              className="w-full h-auto object-cover aspect-[423/284] transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
