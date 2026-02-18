"use client";

import { useState } from "react";
import Link from "next/link";
import { NavItem } from "@/types";

interface NavDropdownProps {
  label: string;
  items: NavItem[];
  isScrolled: boolean;
}

export default function NavDropdown({
  label,
  items,
  isScrolled,
}: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className="flex items-center gap-[0.4rem] text-[1.4rem] animated-link py-[0.4rem]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        >
          <path
            d="M1 1L5 5L9 1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div
        className={`absolute top-full left-0 min-w-[20rem] pt-[0.6rem] transition-all duration-300 z-50 ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-[0.4rem]"
        }`}
      >
        <div
          className={`rounded-[1rem] p-[0.8rem] shadow-[0_4px_20px_rgba(0,0,0,0.08)] ${
            isScrolled
              ? "bg-[#272523]/90 backdrop-blur-[20px]"
              : "bg-white"
          }`}
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-[1.2rem] py-[0.8rem] text-[1.3rem] rounded-[0.6rem] transition-colors duration-200 ${
                isScrolled
                  ? "text-white/70 hover:text-white hover:bg-white/10"
                  : "text-[#666] hover:text-[#272523] hover:bg-[#f5f5f5]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
