"use client";
import React from "react";
import Image from "next/image";
import "./globals.css";
import CardProject from "./component/cardProject";
import profilPicture from "../../public/profilPicture.jpg";
import BlinkTrianggle from "./component/blinkTriangle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftArrow from "../../public/left-arrow-icon.png";
import RightArrow from "../../public/right-arrow-icon.png";
import MobbiProject from "../../public/MobbiProject.png";
import OLXProject from "../../public/OLXProject.png";
import { Dialog } from "@mui/material";

export default function Home() {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [typeProject, setTypeProject] = React.useState("");
  const [slidesToShow, setSlidesToShow] = React.useState(1);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 640px)');
    const handleMediaQueryChange = (e:any) => {
      setSlidesToShow(e.matches ? 5 : 1);
    };

    handleMediaQueryChange(mediaQuery); // Set initial value
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  const hadleOpenDialog = (type: string) => {
    console.log(type)
    if (type === "Olx") {
      setTypeProject("Olx")
    } else if (type === "Mobbi") {
      setTypeProject("Mobbi");
    }
    setIsDialogOpen(true)
  }
  const ArrayOLXPhoto = [
    "/Project_OLX/OLXProject1.png",
    "/Project_OLX/OLXProject2.png",
    "/Project_OLX/OLXProject3.png",
    "/Project_OLX/OLXProject4.png",
    "/Project_OLX/OLXProject5.png",
    "/Project_OLX/OLXProject6.png",
    "/Project_OLX/OLXProject7.png",
    "/Project_OLX/OLXProject8.png",
    "/Project_OLX/OLXProject9.png",
  ];

  const ArrayMobbiPhoto = [
    "/Project_Mobbi/MobbiProject1.png"
  ]

  const SampleNextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button className={`arrow next`} onClick={onClick}>
        <Image src={RightArrow} alt="right arrow icon" width={40} height={40} />
      </button>
    );
  };

  const SamplePrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button className={`arrow prev`} onClick={onClick}>
        <Image src={LeftArrow} alt="left arrow icon" width={40} height={40} />
      </button>
    );
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const text =
    "I graduated from the Institute of Technology Bandung (ITB) in 2022 and have over one year of experience as a website developer. Currently, I am working at OLX Indonesia as a Frontend Web Developer, responsible for developing and maintaining the existing website. My future plan is to become a Senior Web Developer, specifically focusing on the frontend. I have skills in HTML, CSS, JavaScript, React, Next.js, and I am continuously striving to enhance my technical and professional abilities.";
  const [displayText, setDisplayText] = React.useState("");
  const [index, setIndex] = React.useState(0);
  const speed = 10; // Kecepatan mengetik dalam milidetik

  React.useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeoutId);
    }
  }, [index, text, speed]);

  React.useEffect(() => {
    setDisplayText("");
    setIndex(0);
  }, [text]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-[2vw] px-[5vw]">
      <div className="section-aboutme max-w-full">
        <div className="title-section font-serif">About Me</div>
        <div className="flex flex-col justify-between items-center sm:flex-row">
          <div className="half-line">
            <Image
              src={profilPicture}
              alt="Profil Picture"
              className="dark:invert"
              width={100}
              height={24}
              style={{ width: "300px", height: "400px" }}
              priority
            />
          </div>
          <div className="half-line flex-col font-cursive">
            <h1 className=" text-[40px] sm:text-[60px] font-bold mb-5 text-orange-600">
              Hello. My name is Arya Beri Argya Rasidi.
            </h1>
            <div className="text-[22px] relative">
              {displayText} {index === text.length ? <BlinkTrianggle /> : null}
            </div>
          </div>
        </div>
        <div className="flex items-center text-[50px] font-medium  text-amber-950 mt-[40px]">
          <p>My Skill</p>
        </div>
        <div className="icon-program-lengauge-section">
          <div className="slider-container">
            <Slider {...settings}>
              <div className="icon-program-lengauge">
                <Image
                  src="/HTML5.png"
                  alt="HTML 5 Logo"
                  className="dark:invert h-auto"
                  width={100}
                  height={24}
                  priority
                />
              </div>
              <div className="icon-program-lengauge">
                <Image
                  src="/CSS.png"
                  alt="CSS Logo"
                  className="dark:invert h-auto"
                  width={100}
                  height={24}
                  priority
                />
              </div>
              <div className="icon-program-lengauge">
                <Image
                  src="/sap.png"
                  alt="Sap Logo"
                  className="dark:invert h-auto"
                  width={100}
                  height={24}
                  priority
                />
              </div>
              <div className="icon-program-lengauge">
                <Image
                  src="/javascript.png"
                  alt="js Logo"
                  className="dark:invert h-auto"
                  width={100}
                  height={24}
                  priority
                />
              </div>
              <div className="icon-program-lengauge">
                <Image
                  src="/React.png"
                  alt="React Logo"
                  className="dark:invert h-auto"
                  width={100}
                  height={24}
                  priority
                />
              </div>
              <div className="icon-program-lengauge">
                <Image
                  src="/java.png"
                  alt="java Logo"
                  className="dark:invert h-auto"
                  width={100}
                  height={24}
                  priority
                />
              </div>
              <div className="icon-program-lengauge">
                <Image
                  src="/vsCode.png"
                  alt="Vs Code Logo"
                  className="dark:invert h-auto"
                  width={100}
                  height={24}
                  priority
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <div className="section-gallery flex flex-col items-center">
        <div className="title-section font-serif">Project Gallery</div>
        <div className="flex  flex-col sm:flex-row">
          <Dialog
            open={isDialogOpen}
            maxWidth={"xl"}
            onClose={() => setIsDialogOpen(false)}
          >
            <div className="flex flex-col pt-4 pb-8 px-8 items-center relative bg-gray-400 text-white">
              <div id="Title Dialog" className="text-[48px] font-bold mb-5">
                Documentation Project
              </div>
              <div className="grid grid-cols-3 gap-4">
                {(typeProject === "Olx" ? ArrayOLXPhoto : ArrayMobbiPhoto).map((photo) => (
                  <Image
                    src={photo}
                    alt="imageProject"
                    width={400}
                    height={400}
                    key={photo}
                  />
                ))}
              </div>
              <button
                className="absolute top-0 right-3 text-[35px] font-medium"
                onClick={() => setIsDialogOpen(false)}
              >
                X
              </button>
            </div>
          </Dialog>
          <CardProject
            onClick={()=>hadleOpenDialog("Mobbi")}
            image={MobbiProject}
            titlePorject="Full Stack Developer on Mobbi"
            yearProject="Jan 2023 - Des 2023"
            detailProject="In this project, I served as a Full Stack Developer utilizing the SAP Hybris framework, with Java as the backend programming language and jQuery for the frontend. The project was executed using the Scrum methodology, with each sprint spanning two weeks. We also used GitHub and Jira to facilitate collaboration. I was responsible for improving the calculator UI, checkout page, and vehicle release, as well as addressing issues related to push notifications and emails."
          />
          <CardProject
            onClick={()=>hadleOpenDialog("Olx")}
            image={OLXProject}
            titlePorject="Frontend Developer on OLX Indonesia"
            yearProject="Jan 2024 - Now"
            detailProject="In this project, I served as a Frontend Developer using a microservices architecture. I handled services like the content manager, where I expanded content acceptance from one to ten and enabled display on web, Android, and iOS. For Panamera Web, I rebranded the logo and text from OLX Autos to OLX Mobbi. Currently, I manage inventory management tasks, including creating the TAB DO page and a microsite for Approval Payment and DO. The project used React and Next.js, and we followed Scrum methodology with two-week sprints, using GitLab and Jira for collaboration."
          />
        </div>
      </div>
    </main>
  );
}
