"use client";

import Link from "next/link";

interface ButtonProps {
  variant?: "primary" | "outlined" | "white" | "text";
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export default function Button({
  variant = "primary",
  href,
  children,
  className = "",
  external = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium cursor-pointer text-[1.4rem] rounded-full transition-all duration-300 active:scale-[0.97]";

  const variantMap: Record<string, string> = {
    primary:
      "bg-[#272523] text-white px-[2.8rem] py-[1.2rem] hover:bg-[#3a3735] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]",
    outlined:
      "border border-[#272523]/20 text-[#272523] px-[2.8rem] py-[1.2rem] hover:bg-[#272523] hover:text-white hover:border-[#272523]",
    white:
      "bg-white text-[#272523] px-[2.8rem] py-[1.2rem] hover:bg-[#f5f5f5] hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)]",
    text: "text-[#272523] animated-link",
  };

  const combinedClassName = `${baseStyles} ${variantMap[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        className={combinedClassName}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={combinedClassName}>
      {children}
    </Link>
  );
}
