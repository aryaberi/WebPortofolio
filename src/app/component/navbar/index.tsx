"use client";

import "./styles.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import iconHome from "../../../../public/Home.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMobile, setIsOpenMobile] = useState(false);

  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [widthSize, setWidthSize] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

    const handleDownload = () => {
      const url = '/file/CV_Arya_Beri_Argya_Rasidi.pdf';
  
      const link = document.createElement('a');
      link.href = url;
      link.download = 'CV_Arya_Beri_Argya_Rasidi.pdf.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  useEffect(() => {
    const handleResize = () => {
      setWidthSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);



  const isLinkActive = (href: string) => {
    return pathname === href ? "active" : "";
  };

  return (
    <header className="navbar-header z-50 shadow-lg rounded-md">
      {/* <nav className={widthSize < 640 ? "navbar-nav-mobile" : "navbar-nav"}> */}
      <nav className={"navbar-nav"}>
        <Link className={`${isLinkActive("/")} navbar-right-side`} href="/">
          <div className="flex flex-row ">
            <Image
              src={iconHome}
              alt="Home Picture"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
            <h3 className="text-[40px] flex items-center sm:text-[3vw]">HOME</h3>
          </div>
        </Link>
        <div className="navbar-links">
          <Link
            className={`${isLinkActive(
              "/about"
            )} navbar-links-child  min-w-[6.1vw] sm:block hidden`}
            href="#Section-About-Me"
          >
            About Me
          </Link>

          <Link
            className={`${isLinkActive(
              "/gallery"
            )} navbar-links-child  min-w-[10vw] sm:block hidden`}
            href="#Section-Project-Gallery"
          >
            Project Gallery
          </Link>
          <button onClick={handleDownload} className="p-1 hover:bg-gray-500 border shadow-lg bg-white text-black rounded-xl">Download CV</button>

        </div>
      </nav>
      {isOpenMobile ? (
        <div className={`navbar-mobile-component`}>
          <Link className={`${isLinkActive("/")} navbar-links-child`} href="/">
            Home
          </Link>
          <Link
            className={`${isLinkActive("/about")} navbar-links-child`}
            href="/about"
          >
            About Us
          </Link>
          <Link
            className={`${isLinkActive("/gallery")} navbar-links-child`}
            href="/gallery"
          >
            Project Gallery
          </Link>
        </div>
      ) : (
        <div></div>
      )}
    </header>
  );
};

export default Navbar;
