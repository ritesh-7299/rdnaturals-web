"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MenuIcon, CloseIcon } from "./icons";

interface HeaderProps {
  onOrderClick?: () => void;
}

export default function Header({ onOrderClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const handleContactClick = () => {
    if (onOrderClick) {
      onOrderClick();
      setMobileMenuOpen(false);
    } else {
      scrollToSection("contact");
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-warm-white/95 backdrop-blur-md shadow-sm py-2"
            : "bg-transparent py-4"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 group"
          >
            <div className="relative w-10 h-10 sm:w-12 sm:h-12">
              <Image
                src="/main_logo_header_large.png"
                alt="RD Naturals Logo"
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-display text-base font-semibold text-forest leading-tight">
                RD Naturals
              </span>
              <span className="text-[8px] text-forest/70 tracking-wide font-medium">
                Fresh Mushrooms
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-10">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-forest/70 hover:text-terracotta transition-colors relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-terracotta/0 group-hover:bg-terracotta/60 transition-colors"></span>
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="text-sm font-medium text-forest/70 hover:text-terracotta transition-colors relative group"
            >
              Products
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-terracotta/0 group-hover:bg-terracotta/60 transition-colors"></span>
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-sm font-medium text-forest/70 hover:text-terracotta transition-colors relative group"
            >
              Pricing
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-terracotta/0 group-hover:bg-terracotta/60 transition-colors"></span>
            </button>
            {/* 
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-sm font-medium text-forest/70 hover:text-terracotta transition-colors relative group"
            >
              Testimonials
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-terracotta/0 group-hover:bg-terracotta/60 transition-colors"></span>
            </button>
            */}
            <button
              onClick={() => scrollToSection("why-us")}
              className="text-sm font-medium text-forest/70 hover:text-terracotta transition-colors relative group"
            >
              Why Us
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-terracotta/0 group-hover:bg-terracotta/60 transition-colors"></span>
            </button>
            <button
              onClick={handleContactClick}
              className="px-5 py-2.5 text-sm font-medium text-warm-white bg-forest hover:bg-forest-light rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-forest/20"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-forest hover:bg-cream-dark rounded-full transition-colors"
          >
            <span className="sr-only">Open menu</span>
            {mobileMenuOpen ? (
              <CloseIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-forest/20 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-warm-white shadow-xl md:hidden">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between px-6 py-4 border-b border-forest/10">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10">
                    <Image
                      src="/main_logo_header_large.png"
                      alt="RD Naturals Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="font-display text-lg font-medium text-forest">
                    RD Naturals
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-forest hover:bg-cream-dark rounded-full transition-colors"
                >
                  <CloseIcon className="h-6 w-6" />
                </button>
              </div>
              <div className="flex-1 px-6 py-8 space-y-2">
                <button
                  onClick={() => scrollToSection("about")}
                  className="block w-full text-left px-4 py-3 text-lg font-medium text-forest/70 hover:text-forest hover:bg-forest/5 rounded-xl transition-all"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("products")}
                  className="block w-full text-left px-4 py-3 text-lg font-medium text-forest/70 hover:text-forest hover:bg-forest/5 rounded-xl transition-all"
                >
                  Products
                </button>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="block w-full text-left px-4 py-3 text-lg font-medium text-forest/70 hover:text-forest hover:bg-forest/5 rounded-xl transition-all"
                >
                  Pricing
                </button>
                {/* 
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="block w-full text-left px-4 py-3 text-lg font-medium text-forest/70 hover:text-forest hover:bg-forest/5 rounded-xl transition-all"
                >
                  Testimonials
                </button>
                */}
                <button
                  onClick={() => scrollToSection("why-us")}
                  className="block w-full text-left px-4 py-3 text-lg font-medium text-forest/70 hover:text-forest hover:bg-forest/5 rounded-xl transition-all"
                >
                  Why Us
                </button>
                <button
                  onClick={handleContactClick}
                  className="w-full mt-4 px-4 py-3 text-lg font-medium text-warm-white bg-forest hover:bg-forest-light rounded-xl transition-all"
                >
                  Contact
                </button>
              </div>
              <div className="px-6 py-4 border-t border-forest/10 text-center">
                <p className="text-sm text-forest/50">Pure • Fresh • Natural</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
