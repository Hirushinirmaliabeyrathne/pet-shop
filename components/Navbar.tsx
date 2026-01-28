'use client'

import Link from "next/link";
import { useState } from "react";
const NavbarPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "SERVICES", href: "/services" },
    { name: "GALLERY", href: "/gallery" },
  ];
  
  const contactItem = { name: "CONTACT NOW", href: "/contact" };

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50 transition-all duration-300 px-6 md:px-12 lg:px-24">
      <nav className="flex items-center justify-between h-20 md:h-24">
        {/* Logo */}
        <Link href="/" className="text-xl sm:text-2xl font-bold text-[#FF7300] whitespace-nowrap">
          PET SHOP
        </Link>

        {/* Desktop Navigation (Visible from lg breakpoint up) */}
        <ul className="hidden lg:flex items-center space-x-4 xl:space-x-8">
          {navItems.map((item) => (
            <li
              key={item.name}
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
              className="relative"
            >
              <Link
                href={item.href}
                className={`
                  text-base xl:text-lg font-medium text-gray-700 hover:text-orange-500 transition-colors duration-300
                  ${hoveredItem === item.name ? "text-orange-500" : ""}
                  py-2
                `}
              >
                {item.name}
              </Link>
            </li>
          ))}

          {/* CONTACT NOW button (Desktop) */}
          <li className="h-full flex items-center">
            <Link
              href={contactItem.href}
              className="
                bg-[#FF7300] text-white
                py-4 xl:py-8 px-6 
                text-base xl:text-lg font-medium
                hover:bg-orange-600 transition-all duration-300
                whitespace-nowrap inline-block
              "
            >
              {contactItem.name}
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle Button (Visible below lg) */}
        <div className="lg:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 p-2 outline-none"
          >
           
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar/Drawer (Animated) */}
      <div className={`
        fixed top-20 left-0 w-full bg-white shadow-xl transition-all duration-300 ease-in-out lg:hidden overflow-hidden
        ${isOpen ? "max-h-screen opacity-100 border-t" : "max-h-0 opacity-0"}
      `}>
        <ul className="flex flex-col p-6 space-y-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-lg font-medium text-gray-700 hover:text-orange-500 py-2 border-b border-gray-50"
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li className="pt-4">
            <Link
              href={contactItem.href}
              onClick={() => setIsOpen(false)}
              className="block w-full bg-[#FF7300] text-white text-center py-4 rounded-md font-bold"
            >
              {contactItem.name}
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavbarPage;