"use client";

import "./styles.css";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import iconWhatsApp from "../../../../public/iconWhatsApp.png";
import iconEmail from "../../../../public/iconEmail.png";
import iconGithub from "../../../../public/iconGithub.png";
import iconLinkedln from "../../../../public/iconLinkedln.png";
import Link from "next/link";

const Footer = () => {
  const router = useRouter();
  const [widthSize, setWidthSize] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setWidthSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="footer">
      <div
        className={
          // widthSize < 640
          //   ? "footer-content-parent-mobile"
          //   :
          "footer-content-parent"
        }
      >
        <div className="footer-content-child">
          <a
            href="mailto:office@mppfurniture.com"
            target="blank"
            className="flex items-center text-[24px] text-white hover:scale-110"
          >
            <Image src={iconEmail} width={40} height={40} alt={"iconEmail"} /> :
            aryarasidi66@gmail.com
          </a>
        </div>
        <div className="footer-content-child">
          <a
            href="https://api.whatsapp.com/send?phone=6289670976800"
            target="blank"
            className="flex items-center text-[24px] text-white hover:scale-110"
          >
            <Image
              src={iconWhatsApp}
              width={40}
              height={40}
              alt={"iconWhatsApp"}
            />{" "}
            : +628-967-097-6800
          </a>
        </div>
        <div className="footer-content-child">
          <a
            href="https://www.linkedin.com/in/arya-beri-7b8b3a207/"
            target="blank"
            className="flex items-center text-[24px] text-white  hover:scale-110"
          >
            <Image
              src={iconLinkedln}
              width={40}
              height={40}
              alt={"iconLinkedln"}
              className="bg-white"
            />{" "}
            : Arya Beri Argya Rasidi
          </a>
        </div>
        <div className="footer-content-child">
          <a
            href="https://github.com/aryaberi"
            target="blank"
            className="flex items-center text-[24px] text-white hover:scale-110"
          >
            <Image src={iconGithub} width={40} height={40} alt={"iconGithub"} />{" "}
            : aryaberi
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
