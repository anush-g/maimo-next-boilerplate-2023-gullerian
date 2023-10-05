// components/Navbar.js
import React, { useState } from "react";
import NextLink from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLinkClick = () => {
    closeMenu(); // Cierra el menú al hacer clic en un enlace
  };

  return (
    <nav className="top-0 left-0 right-0 z-50 flex justify-between items-center p-4 bg-gray-800 text-white">
      {/* Logo */}
      <NextLink href="/" passHref onClick={closeMenu}>
        <Image
          src="/assets/logo-anushix.png"
          width={120}
          height={48}
          alt="Logo"
        />
      </NextLink>

      {/* Menú hamburguesa para dispositivos móviles */}
      <div className="lg:hidden">
        <button onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Menú de navegación */}
      <div
        className={`lg:flex lg:flex-row lg:items-center lg:justify-center ${
          menuOpen ? "flex-col" : "hidden"
        }`}
      >
        <NextLink
          href="/"
          passHref
          className="lg:inline-block p-2 hover:bg-gray-600"
          onClick={handleLinkClick}
        >
          Home
        </NextLink>
        <NextLink
          href="/about"
          passHref
          className="lg:inline-block p-2 hover:bg-gray-600"
          onClick={handleLinkClick}
        >
          About
        </NextLink>
      </div>
    </nav>
  );
};

export default Navbar;
