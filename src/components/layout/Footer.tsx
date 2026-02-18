import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#0000000d] py-[4.8rem] lg:py-[6.4rem]">
      <div className="max-w-[90rem] mx-auto px-[2rem]">
        <div className="flex flex-col lg:flex-row gap-[3.2rem] lg:gap-[6rem]">
          {/* Logo & Description */}
          <div className="lg:max-w-[34rem] shrink-0">
            <Link href="/" className="inline-block mb-[1.6rem]">
              <span className="text-[2rem] font-bold tracking-[-0.02em] text-black">
                fashn<span className="font-light">{" "}ai</span>
              </span>
            </Link>
            <p className="text-[1.3rem] text-[#666] leading-[1.6]">
              fashnai.co, online moda mağazalarını yapay zeka ile
              geliştirerek AI modeller ve sınırsız profesyonel moda
              fotoğrafları sunar. Bu teknoloji perakendecilerin müşterileri
              etkileşime geçirmesine, yeni pazarlara açılmasına ve
              dönüşüm oranlarını artırmasına yardımcı olur.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-[4rem] lg:gap-[6rem]">
            <div>
              <h4 className="text-[1.3rem] font-semibold mb-[1.2rem] text-black">
                Şirket
              </h4>
              <nav className="flex flex-col gap-[0.8rem]">
                <Link
                  href="/about"
                  className="text-[1.3rem] text-[#666] hover:text-black transition-colors"
                >
                  Hakkımızda
                </Link>
                <a
                  href="https://help.fashnai.co/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[1.3rem] text-[#666] hover:text-black transition-colors"
                >
                  Yardım Merkezi
                </a>
                <Link
                  href="/resources/thethread"
                  className="text-[1.3rem] text-[#666] hover:text-black transition-colors"
                >
                  Blog
                </Link>
                <Link
                  href="/contact-us"
                  className="text-[1.3rem] text-[#666] hover:text-black transition-colors"
                >
                  İletişim
                </Link>
              </nav>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-[1.3rem] font-semibold mb-[1.2rem] text-black">
              Bizi takip edin
            </h4>
            <div className="flex gap-[1.2rem]">
              <a
                href="https://www.instagram.com/fashnai.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#666] hover:text-black transition-colors"
                aria-label="Instagram"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/fashnai-co/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#666] hover:text-black transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@fashnai_co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#666] hover:text-black transition-colors"
                aria-label="YouTube"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-[1.2rem] mt-[4rem] pt-[2rem] border-t border-[#0000000d]">
          <p className="text-[1.2rem] text-[#999]">
            © 2026 fashnai.co, tüm hakları saklıdır
          </p>
          <div className="flex gap-[2rem]">
            <Link
              href="/legal/terms-of-service"
              className="text-[1.2rem] text-[#999] hover:text-black transition-colors"
            >
              Kullanım Koşulları
            </Link>
            <Link
              href="/legal/privacy-policy"
              className="text-[1.2rem] text-[#999] hover:text-black transition-colors"
            >
              Gizlilik Politikası
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
