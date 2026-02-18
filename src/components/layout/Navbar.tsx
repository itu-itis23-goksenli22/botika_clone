"use client";

import { useState } from "react";
import Link from "next/link";
import { useNavScroll } from "@/hooks/useNavScroll";
import { NAV_DROPDOWNS } from "@/lib/constants";
import NavDropdown from "./NavDropdown";
import MobileMenu from "./MobileMenu";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const isScrolled = useNavScroll(50);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header
        className={`fixed z-50 transition-all duration-500 ${
          isScrolled
            ? "top-[0.8rem] left-[0.8rem] right-[0.8rem] bg-black/40 backdrop-blur-[40px] rounded-[0.8rem] text-white"
            : "top-0 left-0 right-0 bg-transparent text-black"
        }`}
      >
        <div className="max-w-[140rem] mx-auto px-[2rem] lg:px-[3.2rem]">
          <div className="flex items-center justify-between h-[5.6rem] lg:h-[6.4rem]">
            {/* Logo */}
            <Link href="/" className="relative z-10 shrink-0">
              <span
                className={`text-[2rem] font-bold tracking-[-0.02em] transition-colors duration-500 ${
                  isScrolled ? "text-white" : "text-black"
                }`}
              >
                fashn<span className="font-light">{" "}ai</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-[2.4rem] ml-[4rem]">
              {NAV_DROPDOWNS.map((dropdown) => (
                <NavDropdown
                  key={dropdown.label}
                  label={dropdown.label}
                  items={dropdown.items}
                  isScrolled={isScrolled}
                />
              ))}
              <Link
                href="/pricing"
                className="text-[1.4rem] animated-link py-[0.4rem]"
              >
                Fiyatlandırma
              </Link>
            </nav>

            {/* Spacer */}
            <div className="hidden lg:block flex-1" />

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-[1.6rem]">
              <Link
                href="/contact-us"
                className="text-[1.4rem] animated-link py-[0.4rem]"
              >
                Bize Ulaşın
              </Link>
              <Button
                href="https://app.fashnai.co/create"
                variant={isScrolled ? "white" : "primary"}
                external
              >
                Başla
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden flex flex-col justify-center gap-[0.5rem] w-[2.8rem] h-[2.8rem] relative z-10"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Menüyü aç"
            >
              <span
                className={`block h-[1.5px] w-full rounded-full transition-colors ${
                  isScrolled ? "bg-white" : "bg-black"
                }`}
              />
              <span
                className={`block h-[1.5px] w-full rounded-full transition-colors ${
                  isScrolled ? "bg-white" : "bg-black"
                }`}
              />
              <span
                className={`block h-[1.5px] w-[60%] rounded-full transition-colors ${
                  isScrolled ? "bg-white" : "bg-black"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
