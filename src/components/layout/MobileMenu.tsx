"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_DROPDOWNS } from "@/lib/constants";
import Button from "@/components/ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (label: string) => {
    setOpenAccordion(openAccordion === label ? null : label);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-[40rem] bg-white z-50 transform transition-transform duration-300 lg:hidden overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-[2.4rem]">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="flex items-center justify-center w-[4rem] h-[4rem] ml-auto mb-[2rem]"
            aria-label="Close menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M2 2L18 18M18 2L2 18"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Nav Items */}
          <nav className="flex flex-col gap-[0.4rem]">
            {NAV_DROPDOWNS.map((dropdown) => (
              <div key={dropdown.label} className="border-b border-gray-100">
                <button
                  onClick={() => toggleAccordion(dropdown.label)}
                  className="flex items-center justify-between w-full py-[1.6rem] text-[1.8rem] font-medium"
                >
                  {dropdown.label}
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 10 6"
                    fill="none"
                    className={`transition-transform duration-300 ${
                      openAccordion === dropdown.label ? "rotate-180" : ""
                    }`}
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
                  className={`overflow-hidden transition-all duration-300 ${
                    openAccordion === dropdown.label
                      ? "max-h-[30rem] pb-[1.2rem]"
                      : "max-h-0"
                  }`}
                >
                  {dropdown.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      className="block py-[1rem] pl-[1.6rem] text-[1.6rem] text-botika-gray hover:text-black transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <Link
              href="/pricing"
              onClick={onClose}
              className="py-[1.6rem] text-[1.8rem] font-medium border-b border-gray-100"
            >
              Fiyatlandırma
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-[1.2rem] mt-[3.2rem]">
            <Button href="/contact-us" variant="outlined" className="w-full">
              Görüşme Ayarla
            </Button>
            <Button
              href="https://app.fashnai.co/create"
              variant="primary"
              className="w-full"
              external
            >
              Başla
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
