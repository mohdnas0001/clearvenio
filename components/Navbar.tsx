"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About Us" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/contact", label: "Contact" },
    { href: "/how-we-work", label: "How We Work" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
  <div className=" mx-auto px-4 md:px-8 lg:px-16">
    <div className="flex justify-between items-center h-16 md:h-20">
{/* Logo */}
                  <div className="flex items-center justify-center gap-2">
                      <Image width={36} height={32} src="/images/icon.svg" alt="Clearvenio Logo" />
                       <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-black">Clearvenio</span>
        </Link>
                  </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 font-poppins">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-black font-medium transition text-sm font-poppins"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition font-medium text-sm font-poppins"
          >
            Work with us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`w-6 h-0.5 bg-black transition-transform ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-black transition-opacity ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-black transition-transform ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 border-t border-gray-200 font-poppins">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2 text-gray-700 hover:text-black font-medium font-poppins"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block mt-4 w-full text-center bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition font-medium font-poppins"
            onClick={() => setIsOpen(false)}
          >
            Work with us
          </Link>
        </div>
      )}
    </nav>
  );
}
