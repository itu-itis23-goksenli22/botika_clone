export interface NavItem {
  label: string;
  href: string;
}

export interface NavDropdownItem {
  label: string;
  items: NavItem[];
}

export interface HeroSlide {
  image: string;
  brand: string;
  alt: string;
}

export interface TrustLogo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface CaseStudy {
  headline: string;
  stat: string;
  statLabel: string;
  description: string;
  supportingText?: string;
  quote?: string;
  quoteAuthor?: string;
  caseStudyUrl: string;
  images: string[];
  reversed: boolean;
}

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
  photo: string;
}

export interface ProductCard {
  image: string;
  label: string;
  alt: string;
}
