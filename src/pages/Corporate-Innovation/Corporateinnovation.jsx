import React, { useState } from "react";
import { LandingNav } from "../../components/Nav";

import "./corporate.css";
import { NewFooter } from "../../components/Footer/NewFooter";
import ServicesSettings from "../../assets/services-setting.png";

import DigitalDevelopment from "../../assets/digital-development.png";
import StartupBoost from "../../assets/startup-boost.png";

import universityIndustryCollaboration from "../../assets/university-Industry-collaboration.png";
import { FaArrowRight, } from "react-icons/fa";


const Corporateinnovation = () => {


  const growData = [
    {
      title: "Startup Boost",
      text: "Ubulu Africa specialize in co-founding and nurturing innovative technology-driven startups. We shall invest in you, we shall work for you, and we shall be by your side at every step of the way until you make a scale-up.",
      img: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1699229169/microsoft-365-TLiWhlDEJwA-unsplash_qdznje.jpg",
      button: "Learn more",
      path: "/startup-boost",
    },
    {
      title: "Corporate Innovation ",
      text: "Our mission is to empower organizations to achieve growth, maximize their relevance, and surpass their potential. We collaborate with industry leaders, combining entrepreneurial expertise with corporate influence to create successful ventures and generate new revenue streams.",
      img: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1699223453/paolo-margari-KVYPpbpji4E-unsplash_sjkeqi.jpg",
      button: "Learn more",
      path: "/corporate-innovation",
    },
    {
      title: "University-Industry Collaboration ",
      text: "At Ubulu Africa, we don't just discuss growth, innovation, and go-to-market strategies; we turn them into reality. Our well-established framework serves as the foundation for creating new ventures and propelling businesses to unparalleled success.",
      img: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1699228173/cytonn-photography-n95VMLxqM2I-unsplash_fke0zy.jpg",
      button: "Learn more",
      path: "/university",
    },

    // Add more card data objects as needed
  ];
  const [readMoreStates, setReadMoreStates] = useState(
    growData.map(() => false)
  );

  const toggleReadMore = (index) => {
    // Create a copy of the state array
    const newReadMoreStates = [...readMoreStates];
    // Toggle the state for the clicked card
    newReadMoreStates[index] = !newReadMoreStates[index];
    // Update the state array
    setReadMoreStates(newReadMoreStates);
  };
  // Create an array of state values for each card

  const ctaText =
    "Join the Ubulu Africa community and be part of our mission to help organizations realize growth, become and remain the most relevant organization they can be, and even surpass that. Our team of hands-on entrepreneurs collaborates with industry leaders to harness their corporate influence to create successful ventures and generate new revenue streams.";
  return (
    <>
      <LandingNav />
      <div className="flex flex-col items-center justify-center mt-36 md:mt-64 lg:justify-between lg:flex-row">
        <div className="flex flex-col items-start pl-12 mb-12 space-y-4 lg:w-5/12 lg:mb-0 xl:mb-32 lg:pl-28">
          <span className="font-bold text-7xl text-[#112D7B]">Services</span>
          <p className="flex justify-center text-[#777777] font-normal text-lg  w-full">
            Ubulu Africa aims to drive organizational growth and enhance their relevance. We partner with industry leaders to create successful ventures.          </p>
        </div>
        <div className="w-full lg:w-7/12">
          <img className="w-full aspect-auto" src={ServicesSettings} />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full mb-16 mt-28 xl:mb-32">
        <div className="mt-20 w-full flex items-center justify-center lg:space-x-8 lg:space-y-0 space-y-5 lg:flex-row flex-col lg:[&>*]:w-3/12 [&>*]:w-10/12">

          <div className="flex group lg:hover:w-[35%] flex-col shadow-lg rounded-3xl transition-[width] ease-in-out duration-700 hover:transition-[width]">
            <div className="flex w-full"><img className="w-full " src={StartupBoost} /></div>

            <div className="flex flex-col items-start w-full px-8 ">

              <h1 className="text-lg  lg:group-hover:text-xl pt-6 font-semibold text-[#1853B5]"> Startup Boost</h1>
              <div className="h-[270px] lg:mt-14   w-full flex text-base text-[#777777] flex-col  font-normal ">
                Ubulu Africa, is dedicated to making a profound impact through its Digital for Development Programs. Our mission is to foster growth, innovation, and positive change by providing cutting-edge solutions that harness the full potential of digital technology.              </div>
              <div className="flex justify-center w-full mb-8">
                <a className="no-underline" href="/startup-boost">

                  <button className="flex hover:bg-[#120157]  items-center justify-between text-white  px-10 rounded-md bg-[#1D0190]">Learn more <FaArrowRight className="ml-2" /></button>
                </a>
              </div>
            </div>
          </div>


          <div className="flex group lg:hover:w-[35%] flex-col shadow-lg rounded-3xl transition-[width] ease-in-out duration-700 hover:transition-[width]">
            <div className="flex w-full rounded-t-3xl"><img className="w-full rounded-t-3xl" src={DigitalDevelopment} /></div>

            <div className="flex flex-col items-start w-full px-8 ">

              <h1 className="text-lg   lg:group-hover:text-xl pt-6 font-semibold text-[#1853B5]">Corporate Innovation</h1>
              <div className="h-[270px]  lg:mt-14   w-full flex text-base text-[#777777] flex-col  ">
                Our mission is to empower organizations to achieve growth, maximize their relevance, and surpass their potential. We collaborate with industry leaders, combining entrepreneurial expertise with corporate influence to create successful ventures and generate new revenue streams.
              </div>
              <div className="flex justify-center w-full h-full mt-[1.6rem] mb-8">
                <a className="no-underline " href="/corporate-innovation"><button className="flex hover:bg-[#120157]  items-center justify-between text-white   px-10  rounded-md bg-[#1D0190]">Learn more <FaArrowRight className="ml-2" /></button></a>
              </div>
            </div>
          </div>


          <div className="flex group lg:hover:w-[35%] flex-col shadow-lg rounded-3xl transition-[width] ease-in-out duration-700 hover:transition-[width]">
            <div className="flex w-full"><img className="w-full " src={universityIndustryCollaboration} /></div>

            <div className="flex flex-col items-start w-full px-8 ">

              <h1 className="text-lg   lg:group-hover:text-xl pt-6 font-semibold text-[#1853B5] w-full">University-Industry
                Collaboration</h1>
              <div className=" h-[270px] lg:mt-[1.8rem] w-full flex text-base text-[#777777] flex-col  ">

                At Ubulu Africa, we don&apos;t just discuss growth, innovation, and go-to-market strategies; we turn them into reality. Our well-established framework serves as the foundation for creating new ventures and propelling businesses to unparalleled success. </div>
              <div className="flex justify-center w-full h-full mb-8">
                <a href="/university" className="no-underline">
                  <button className="flex hover:bg-[#120157]  items-center justify-between text-white   px-10  rounded-md bg-[#1D0190]">Learn more <FaArrowRight className="ml-2" /></button>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      <NewFooter /> </>
  );
};

export default Corporateinnovation;
