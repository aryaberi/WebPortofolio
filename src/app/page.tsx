"use client";
import React from "react";
import Image from "next/image";
import "./globals.css";
import CardProject from "./component/cardProject";
import profilPicture from "../../public/profilPicture.png";
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
    const timeouts: NodeJS.Timeout[] = [];

    function showHideDivs() {
      const round1 = document.getElementById('rounded-1');
      const round2 = document.getElementById('rounded-2');
      const round3 = document.getElementById('rounded-3');
      const round4 = document.getElementById('rounded-4');
      const round5 = document.getElementById('rounded-5');
      const round6 = document.getElementById('rounded-6');
      const round7 = document.getElementById('rounded-7');
      const round8 = document.getElementById('rounded-8');

      timeouts.push(setTimeout(() => {
        if (round1) round1.style.opacity = "1";
        if (round8) round8.style.opacity = "1";
      }, 0));

      timeouts.push(setTimeout(() => {
        if (round2) round2.style.opacity = "1";
        if (round7) round7.style.opacity = "1";
      }, 1000));

      timeouts.push(setTimeout(() => {
        if (round3) round3.style.opacity = "1";
        if (round6) round6.style.opacity = "1";
      }, 2000));
      
      timeouts.push(setTimeout(() => {
        if (round4) round4.style.opacity = "1";
        if (round5) round5.style.opacity = "1";
      }, 3000));

      timeouts.push(setTimeout(() => {
        if (round1) round1.style.opacity = "0";
        if (round2) round2.style.opacity = "0";
        if (round3) round3.style.opacity = "0";
        if (round4) round4.style.opacity = "0";
        if (round5) round5.style.opacity = "0";
        if (round6) round6.style.opacity = "0";
        if (round7) round7.style.opacity = "0";
        if (round8) round8.style.opacity = "0";
      }, 4000));

      timeouts.push(setTimeout(showHideDivs, 5000)); // Mengulangi siklus setelah 4 detik
    }

    showHideDivs();

    return () => {
      // Bersihkan semua timeout ketika komponen unmount
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-[2vw] px-[5vw]">
      <div className="section-aboutme max-w-full" id="Section-About-Me">
        <div className="title-section font-serif" >About Me</div>
        <div className="flex flex-col justify-between items-center sm:flex-row">
          <div className="half-line relative min-w-[800px] !justify-end pr-[150px]">
            <div id="aksesoris" className=" hidden sm:flex flex-col items-end absolute top-[-30px] left-[120px]">
              <div id="rounded-1" className="bg-red-200 rounded-[50%] h-4 w-4 mb-4 opacity-0" ></div>
              <div id="rounded-2" className="bg-red-400 rounded-[50%] h-6 w-6 my-4 mr-4 opacity-0" ></div>
              <div id="rounded-3" className="bg-red-600 rounded-[50%] h-8 w-8 my-4 mr-8 opacity-0" ></div>
              <div id="rounded-4" className="bg-red-800 rounded-[50%] h-12 w-12 my-4 mr-12 opacity-0" ></div>
              <div id="rounded-5" className="bg-red-800 rounded-[50%] h-12 w-12 my-4 mr-12 opacity-0" ></div>   
              <div id="rounded-6" className="bg-red-600 rounded-[50%] h-8 w-8 my-4 mr-8 opacity-0" ></div>
              <div id="rounded-7" className="bg-red-400 rounded-[50%] h-6 w-6 my-4 mr-4 opacity-0" ></div>
              <div id="rounded-8" className="bg-red-200 rounded-[50%] h-4 w-4 mt-4 opacity-0" ></div>
            </div>
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
          <div className="half-line flex-col font-cursive min-w-[850px]">
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
                  src="/next.png"
                  alt="Next js Logo"
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
                  src="/TailwindIcon.png"
                  alt="Tailwind Logo"
                  className="dark:invert h-auto"
                  width={100}
                  height={24}
                  priority
                />
              </div>
              <div className="icon-program-lengauge">
                <Image
                  src="/JQuery.png"
                  alt="JQuery Logo"
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
        <div className="title-section font-serif" id="Section-Project-Gallery">Project Gallery</div>
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
            onClick={slidesToShow > 1 ? ()=>hadleOpenDialog("Mobbi") : null}
            image={MobbiProject}
            titlePorject="Full Stack Developer on Mobbi"
            yearProject="Jan 2023 - Des 2023"
            detailProject="In this project, I served as a Full Stack Developer utilizing the SAP Hybris framework, with Java as the backend programming language and jQuery for the frontend. The project was executed using the Scrum methodology, with each sprint spanning two weeks. We also used GitHub and Jira to facilitate collaboration. I was responsible for improving the calculator UI, checkout page, and vehicle release, as well as addressing issues related to push notifications and emails."
          />
          <CardProject
            onClick={slidesToShow > 1 ? ()=>hadleOpenDialog("Olx"): null}
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
