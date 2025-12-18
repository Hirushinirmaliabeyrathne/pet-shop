'use client'

import Link from "next/link";
import { useState } from "react";

const NavbarPage = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "SERVICES", href: "/services" },
    { name: "GALLERY", href: "/gallery" },
  ];
  // "CONTACT NOW" will be handled separately for button styling
  const contactItem = { name: "CONTACT NOW", href: "/contact" };

  return (
    <header className="w-full bg-white shadow-md pl-[180px] pr-[180px] py-5">
      <nav className="flex items-center justify-between">
        {/* Pet Shop Logo/Title on the left */}
        <Link href="/" className="text-2xl font-bold text-[#FF7300]">
          PET SHOP
        </Link>

        {/* Navigation items and button on the right */}
        <ul className="flex items-center space-x-8">
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
                  text-lg font-medium text-gray-700 hover:text-orange-500 transition-colors duration-300
                  ${hoveredItem === item.name ? "text-orange-500" : ""}
                  py-3 px-6 
                `}
              >
                {item.name}
              </Link>
            </li>
          ))}

          {/* CONTACT NOW button */}
          <li>
            <Link
              href={contactItem.href}
              className="
                bg-[#FF7300] text-white
                py-8 px-6 -mt-2
                text-lg font-medium
                hover:bg-[#FF7300] transition-colors duration-300
                whitespace-nowrap
              "
            >
              {contactItem.name}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavbarPage;