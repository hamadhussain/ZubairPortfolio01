"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMail, FiMenu, FiX } from "react-icons/fi";
import { SiZulip } from "react-icons/si";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // 👈 get current route

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/pages/Portfolio" },
    { name: "Resume", href: "/pages/resume" },
  ];

  return (
    <nav className=" top-0 left-0 w-full h-20 flex items-center justify-between px-14 md:px-24 py-24  backdrop-blur-md text-white z-50">
      {/* Left: Logo + Name */}
      <div className="flex items-center space-x-3">
        <SiZulip size={22} className=" bg-black  round-full textcyan-400" />
        <span className="font-semibold text-lg tracking-wide uppercase">
          Muhammad Zubair
        </span>
      </div>

      {/* Center: Desktop Menu */}
      <div className="hidden md:flex space-x-10 border border-white/20 p-2 px-3 rounded-full ">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`px-3 py-1 rounded-full transition ${
              pathname === link.href
                ? "bg-cyan-900 text-white"
                : "hover:text-cyan-400"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Right: Contact (Desktop) */}
      <div className="hidden md:flex">
        <Link
          href="/pages/contact"
          className="hover:text-cyan-400 transition flex underline items-center gap-1 uppercase"
        >
          Contact
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-white focus:outline-none"
      >
        {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-0 left-0 w-full bg-black h-screen  backdrop-blur-lg flex flex-col p-5 space-y-6 py-8 text-lg md:hidden border-t border-white/10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`px-6 py-2 rounded-full transition ${
                pathname === link.href
                ? "bg-cyan-900 text-white"
                  : "hover:text-cyan-400"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/pages/contact"
            className={`hover:text-cyan-400 transition px-5 py-2 flex items-center gap-2 ${pathname === "/pages/contact" ? "bg-cyan-900 text-white rounded-full" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
