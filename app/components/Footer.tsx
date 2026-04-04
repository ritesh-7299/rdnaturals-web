import { LeafSprig } from "./icons";
import Image from "next/image";

interface FooterProps {
  onOrderClick?: () => void;
}

export default function Footer({ onOrderClick }: FooterProps) {
  return (
    <footer className="bg-forest text-ivory relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
        <LeafSprig className="w-full h-full" />
      </div>
      <div className="absolute bottom-0 left-0 w-48 h-48 opacity-5 rotate-180">
        <LeafSprig className="w-full h-full" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Brand with Logo */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-20 h-20">
                <Image
                  src="/main_logo_header_large.png"
                  alt="RD Naturals Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="font-display text-lg italic text-gold">
              Pure • Fresh • Natural
            </p>
            <p className="mt-4 text-ivory/70 leading-relaxed">
              Farm-fresh mushrooms delivered daily from the heart of Gujarat.
              Quality you can trust, freshness you can taste.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="font-display text-sm uppercase tracking-widest text-sage mb-6">
              Explore
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-ivory/70 hover:text-terracotta-light transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sage/50 group-hover:bg-terracotta transition-colors"></span>
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-ivory/70 hover:text-terracotta-light transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sage/50 group-hover:bg-terracotta transition-colors"></span>
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-ivory/70 hover:text-terracotta-light transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sage/50 group-hover:bg-terracotta transition-colors"></span>
                  Pricing
                </a>
              </li>
              {/* 
              <li>
                <a
                  href="#testimonials"
                  className="text-ivory/70 hover:text-terracotta-light transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sage/50 group-hover:bg-terracotta transition-colors"></span>
                  Testimonials
                </a>
              </li>
              */}              <li>
                <a
                  href="#why-us"
                  className="text-ivory/70 hover:text-terracotta-light transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sage/50 group-hover:bg-terracotta transition-colors"></span>
                  Why Choose Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-ivory/70 hover:text-terracotta-light transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sage/50 group-hover:bg-terracotta transition-colors"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-1">
            <h4 className="font-display text-sm uppercase tracking-widest text-sage mb-6">
              Get In Touch
            </h4>
            <button
              onClick={onOrderClick}
              className="inline-flex items-center gap-3 px-6 py-3 bg-terracotta/20 hover:bg-terracotta/30 border border-terracotta/40 rounded-full text-terracotta-light transition-all duration-300 group w-full sm:w-auto justify-center"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="font-medium">Place Your Order</span>
            </button>
            <div className="mt-6 space-y-2 text-ivory/60 text-sm">
              <p>Gujarat, India</p>
              <p>Bulk & Retail Orders Welcome</p>
              <p>Daily Delivery Available</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-forest-light/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-ivory/50 text-sm">
            &copy; {new Date().getFullYear()} RD Naturals. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-ivory/40 text-xs">
            <span>Farm Fresh</span>
            <span className="w-1 h-1 rounded-full bg-ivory/30"></span>
            <span>Daily Delivery</span>
            <span className="w-1 h-1 rounded-full bg-ivory/30"></span>
            <span>Quality Assured</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
