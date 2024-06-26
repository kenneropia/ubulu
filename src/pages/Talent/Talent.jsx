
import React from "react";
import { LandingNav } from "../../components/Nav";
import JotFormReact from 'jotform-react';
import { NewFooter } from "../../components/Footer/NewFooter";
import CommunityHands from "../../assets/community-hands.png";
import { FaArrowRight, } from "react-icons/fa";

const Talent = () => {

  return (
    <>
      <LandingNav />
      {/* <JotFormReact
        formURL="https://form.jotform.com/241764886386575"
      /> */}
      <div className="flex flex-col items-center justify-center mb-44 mt-36 md:mt-64 lg:justify-between lg:flex-row">
        <div className="flex flex-col items-start pl-12 mb-12 space-y-4 lg:w-5/12 lg:mb-0 xl:mb-32 lg:pl-28">
          <span className="font-bold text-7xl text-[#112D7B]">Ubulu Africa
            Communnity</span>
          <p className="flex text-justify justify-center text-[#777777] font-normal text-lg  w-full">

            Welcome to the Ubulu Africa Community, where we bring together corporations in pursuit of innovation, aspiring innovators and startups on a quest for acceleration, and venture capitalists eager to connect with exceptional startups. Our vibrant community is meticulously crafted to provide you with a tailored space for learning and flourishing on your unique journey.
          </p>
          <div className="flex justify-start w-full h-full pt-14 ">
            <a className="no-underline " href="/corporate-innovation"><button className="flex hover:bg-[#120157]  items-center justify-between text-white   px-10  rounded-md bg-[#1D0190]">Join us <FaArrowRight className="ml-2" /></button></a>
          </div>
        </div>
        <div className="w-full lg:w-6/12">
          <img className="w-full aspect-auto" src={CommunityHands} />
        </div>


      </div>


      <NewFooter /> </>
  );
};

export default Talent;

