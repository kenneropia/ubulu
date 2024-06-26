import React, { useState } from "react";
import { LandingNav } from "../../components/Nav";

import { NewFooter } from "../../components/Footer/NewFooter";
import ServicesRocket from "../../assets/services-rocket.png";
import DigitalDevelopment from "../../assets/digital-development.png";
import IncubatorAccelerator from "../../assets/incubator-accelerator.png";
import AdvisoryConsulting from "../../assets/advisory-consulting.png";
import { FaArrowRight, } from "react-icons/fa";



import "./Program.css";
const Program = () => {
  // const corporate = "https://youtu.be/4pyb_Bg4JdA";
  // const building = "https://youtu.be/VCDAzz7pShQ";
  // const collaboration = "https://youtu.be/jlXUzvHSoEY";
  const proData = [
    {
      title: "Incubator & Accelerator Programs",
      text: "Discover new horizons with Ubulu Africa's Incubator Programs. We are passionate about nurturing innovation and driving ambitious startups towards success. Our incubation ecosystem is designed to provide you with the resources, mentorship, and networking opportunities needed to thrive.",
      img: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1699228456/kaleidico-26MJGnCM0Wc-unsplash_qpz8jq.jpg",
      button: "Learn more",
      path: "/accelerator-programs",
    },
    {
      title: "Digital for Development Programs",
      text: "Ubulu Africa, is dedicated to making a profound impact through its Digital for Development Programs. Our mission is to foster growth, innovation, and positive change by providing cutting-edge solutions that harness the full potential of digital technology.",
      img: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1699228573/ramon-salinero-vEE00Hx5d0Q-unsplash_boz3h8.jpg",
      button: "Learn more",
      path: "",
    },
    {
      title: "Advisory & Consulting Services",
      text: "At Ubulu Africa, we offer tailored Advisory & Consulting Services that drive innovation and bring clarity to complex business challenges. Our team of seasoned experts collaborates closely with your organization to provide strategic insights and actionable solutions. ",
      img: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1699228956/patrick-perkins-ETRPjvb0KM0-unsplash_1_goswwg.jpg",
      button: "Learn more",
      path: "/consulting-services",
    },

    // Add more card data objects as needed
  ];
  const [readMoreStates, setReadMoreStates] = useState(
    proData.map(() => false)
  );

  const toggleReadMore = (index) => {
    // Create a copy of the state array
    const newReadMoreStates = [...readMoreStates];
    // Toggle the state for the clicked card
    newReadMoreStates[index] = !newReadMoreStates[index];
    // Update the state array
    setReadMoreStates(newReadMoreStates);
  };
  return (
    <>
      <LandingNav />
      <div className="flex flex-col items-center justify-center mt-36 lg:justify-between lg:flex-row">
        <div className="flex flex-col items-start pl-12 mb-12 space-y-4 lg:w-5/12 lg:mb-0 xl:mb-32 lg:pl-28">
          <span className="font-bold text-7xl text-[#112D7B]">Programs</span>
          <p className="flex justify-center text-[#777777] font-normal text-lg w-10/12 lg:w-full">
            Igniting growth for businesses and organizations through strategic design and implementation, fostering innovation and navigating dynamic landscapes
          </p>
        </div>
        <div className="w-7/12">
          <img className="w-full aspect-auto" src={ServicesRocket} />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full mb-16 mt-28 xl:mb-32">
        <div className="mt-20 w-full flex items-center justify-center lg:space-x-8 lg:space-y-0 space-y-5 lg:flex-row flex-col lg:[&>*]:w-3/12 [&>*]:w-10/12">

          <div className="flex group lg:hover:w-[35%] flex-col shadow-lg rounded-3xl transition-[width] ease-in-out duration-700 hover:transition-[width]">
            <div className="flex w-full"><img className="w-full " src={DigitalDevelopment} /></div>

            <div className="flex flex-col items-start w-full px-8 ">

              <h1 className="text-lg  lg:group-hover:text-xl pt-6 font-semibold text-[#1853B5]">Digital for Development
                Platforms</h1>
              <div className="h-[270px]   w-full flex text-base text-[#777777] flex-col  font-normal ">
                Ubulu Africa, is dedicated to making a profound impact through its Digital for Development Programs. Our mission is to foster growth, innovation, and positive change by providing cutting-edge solutions that harness the full potential of digital technology.
              </div>
              <div className="flex justify-center w-full mb-8">
                <a className="no-underline" href="/programs">

                  <button className="flex hover:bg-[#120157]  items-center justify-between text-white  px-10 rounded-md bg-[#1D0190]">Learn more <FaArrowRight className="ml-2" /></button>
                </a>
              </div>
            </div>
          </div>


          <div className="flex group lg:hover:w-[35%] flex-col shadow-lg rounded-3xl transition-[width] ease-in-out duration-700 hover:transition-[width]">
            <div className="flex w-full rounded-t-3xl"><img className="w-full rounded-t-3xl" src={IncubatorAccelerator} /></div>

            <div className="flex flex-col items-start w-full px-8 ">

              <h1 className="text-lg   lg:group-hover:text-xl pt-6 font-semibold text-[#1853B5]">Incubator & Accelerator
                Programs</h1>
              <div className="h-[270px]    w-full flex text-base text-[#777777] flex-col  ">
                Discover new horizons with Ubulu Africa&apos;s Incubator Programs. We are passionate about nurturing innovation and driving ambitious startups towards success. Our incubation ecosystem is designed to provide you with the resources, mentorship, and networking opportunities needed to thrive.

              </div>
              <div className="flex justify-center w-full h-full mt-[1.6rem] mb-8">
                <a className="no-underline " href="/accelerator-programs"><button className="flex hover:bg-[#120157]  items-center justify-between text-white   px-10  rounded-md bg-[#1D0190]">Learn more <FaArrowRight className="ml-2" /></button></a>
              </div>
            </div>
          </div>


          <div className="flex group lg:hover:w-[35%] flex-col shadow-lg rounded-3xl transition-[width] ease-in-out duration-700 hover:transition-[width]">
            <div className="flex w-full"><img className="w-full " src={AdvisoryConsulting} /></div>

            <div className="flex flex-col items-start w-full px-8 ">

              <h1 className="text-lg   lg:group-hover:text-xl pt-6 font-semibold text-[#1853B5] w-full">Advisory & Consulting
                Services</h1>
              <div className=" h-[270px] w-full flex text-base text-[#777777] flex-col  ">


                At Ubulu Africa, we offer tailored Advisory & Consulting Services that drive innovation and bring clarity to complex business challenges. Our team of seasoned experts collaborates closely with your organization to provide strategic insights and actionable solutions.


              </div>
              <div className="flex justify-center w-full h-full mb-8">
                <a href="/consulting-services" className="no-underline">
                  <button className="flex hover:bg-[#120157]  items-center justify-between text-white   px-10  rounded-md bg-[#1D0190]">Learn more <FaArrowRight className="ml-2" /></button>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      <NewFooter />
    </>
  );
};

export default Program;
