"use client";

import { CASE_STUDIES } from "@/lib/constants";
import CaseStudyBlock from "./CaseStudyBlock";

export default function CaseStudies() {
  return (
    <section className="py-[4rem] lg:py-[9.6rem]">
      <div className="max-w-[90rem] mx-auto px-[2rem]">
        <div className="case-study-container">
          {CASE_STUDIES.map((study, index) => (
            <CaseStudyBlock key={index} {...study} />
          ))}
        </div>
      </div>
    </section>
  );
}
