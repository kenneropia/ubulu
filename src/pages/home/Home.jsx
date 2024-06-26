import React, { useState } from "react";
import bulbImg from "../../assets/bulb-about.png";
import ThreeArrow from "../../assets/triple-arrow.jpg";
import DarkThreeArrow from "../../assets/dark-triple-arrow.jpg";
import HeroHand from "../../assets/hero-hands.png";
import HelpPerson from "../../assets/help-person.png";
import { ServicesAndInnovation } from "./ServicesAndInnovation"
import StartupSupport from "../../assets/startup-support.png";
import CorporateInnovation from "../../assets/corporate-innovation.png";
import UniversityIndustry from "../../assets/university-industry.png";
import { FaArrowRight, } from "react-icons/fa";
import axios from "axios"

import LeftGlobal from "../../assets/left-global.png";
import RightGlobal from "../../assets/right-global.png";
import RightHands from "../../assets/right-hands.png";
import InnovativeTreeImg from "../../assets/innovative-tree-img.png";
import { Toaster, toast } from 'sonner'
import { ReactComponent as InnovativeSnake } from "../../assets/innovative-snake.svg";
import styles from "./styles.module.css";
import { LandingNav } from "../../components/Nav";
import { NewFooter } from "../../components/Footer/NewFooter";

function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://open-innovation-be.onrender.com/api/v1/ubulu-africa/contact-us', formData);
      toast.success('Form submitted successfully',);
      // Optionally, you can add a success message or reset the form here
    } catch (error) {
      toast.error('Error submitting the form');
      // Optionally, you can add an error message here
    }
  };
  return (
    <div className={styles.App}>
      <Toaster />
      <LandingNav />
      {/* Hero Section */}
      <div className="flex flex-col justify-between w-full mt-40 lg:flex-row" >
        <div className="flex flex-col w-full  px-5 lg:px-0 lg:w-[55%] lg:ml-28">
          <img className="relative z-0 h-[165px] w-[51.96px]" src={ThreeArrow} alt="" />
          <div className="flex flex-col">
            <h1 className="font-bold mt-16 text-4xl leading-[3.4rem] md:leading-[75px] text-[#112D7B]">Making Innovation
              Work</h1>
            <p className=" md:w-11/12 mb-10  mt-2 text-[#777777] text-lg">We are building a Centre of Excellence for end-to-end
              innovation activities required to tackle social and economic
              issues in Africa.</p>
            <div className="flex flex-row flex-wrap justify-start w-full mb-10 lg:mb-60 gap-y-11 gap-x-11">
              <a className="flex hover:bg-[#120157] h-16 md:h-auto items-center justify-between text-[#112D7B]  w-10/12  lg:w-[45%] py-[0.6rem] font-semibold px-[0.8rem] rounded-md border bg-white outline outline-[#112D7B] no-underline" href="/startup-boost ">

                Startup & Small Business Support <FaArrowRight className="ml-4" />


              </a>
              <a href="/corporate-innovation" className="flex h-16 md:h-auto hover:bg-[#120157] items-center justify-between text-[#112D7B]  w-10/12  lg:w-[45%] py-[0.6rem] font-semibold px-[0.8rem] rounded-md border bg-white outline outline-[#112D7B] no-underline">

                Corporate Innovation <FaArrowRight className="ml-4" />

              </a>
              <a href="/university" className="flex h-16 md:h-auto hover:bg-[#120157] items-center justify-between text-[#112D7B]  w-10/12  lg:w-[45%] py-[0.6rem] font-semibold px-[0.8rem] rounded-md border bg-white outline outline-[#112D7B] no-underline">
                University-Industry Collaboration<FaArrowRight className="ml-4" />


              </a>

            </div>
          </div>
          <img className="h-[165px] w-[60.96px]" src={DarkThreeArrow} alt="" />
        </div>
        <div className="w-full aspect-square lg:w-[45%]">

          <img className="object-contain w-full" src={HeroHand} alt="" />
        </div>
      </div>


      <div className="flex flex-col items-center justify-center w-full mt-28">
        <span className="flex items-center justify-center py-3 font-semibold text-lg rounded-3xl px-6 bg-[#DFEEFF] text-[#616569]">About Ubulu Africa</span>
        <p className="mt-12 text-center text-2xl   md:text-4xl font-bold text-[#112D7B]">We are a Digital Innovation Hub</p>
        <span className=" text-center md:w-7/12  mt-2 text-[#777777] text-lg">Ubulu Africa is a digital innovation hub committed to driving impactful innovation across Africa.</span>

        <div className="flex justify-center w-10/12 mb-16 mt-9">
          <img className="aspect-video" src={bulbImg} />
        </div>

      </div>


      <div className="flex flex-col items-center justify-center w-full px-8 md:px-20">
        <div className="flex flex-col justify-center items-center w-full xl:bg-contain bg-no-repeat  xl:bg-[url('../bg-excellence.png')] ">
          <span className="mt-12 text-xl font-normal text-center text-[#777777]  xl:text-white md:w-10/12">We are building a Centre of Excellence for end-to-end innovation activities required to tackle social and economic issues in Africa.</span>

          <div className="flex w-full xl:mt-36">

            <div className="flex-col items-center hidden w-full mt-5 space-y-5 xl:flex xl:space-y-0 xl:mt-28 ">
              <div className="relative flex flex-row items-center text-xl text-white xl:w-9/12 xl:space-x-4 xl:pl-44 xl:-top-[5.5%]">
                <img className="hidden w-6/12 h-full xl:flex" src={LeftGlobal} />
                <div className="flex flex-col w-full xl:w-5/12 ">

                  <span className="font-bold text-2xl text-[#225AF5]">Our Vision</span>
                  <div className="text-base xl:text-white text-[#777777] ">
                    To be the leading digital innovation hub in Africa, fostering transformative solutions that address the continent&apos;s
                    most pressing social and economic challenges.
                  </div>

                </div>

              </div>
              <InnovativeSnake className="hidden relative w-9/12 p-0 m-0 xl:flex -top-[30%]" />
              <div className="relative flex flex-row items-center xl:w-9/12 w-full text-xl text-white xl:space-x-1 pr-14 xl:-top-[57%]">

                <div className="flex flex-col w-full xl:w-5/12 ">

                  <span className="font-bold text-2xl text-[#225AF5]">Our Mission</span>
                  <div className="text-base  xl:text-white text-[#777777] ">
                    Empowering innovators, startups, corporate organizations, and other stakeholders in the African innovation ecosystem to succeed and thrive in a rapidly evolving environment.
                  </div>

                </div>
                <img className="hidden w-6/12 h-full xl:flex pr-7" src={RightHands} />
              </div>

            </div>
            <div className="flex flex-row items-center justify-between w-full space-x-10 xl:hidden mt-14">
              <div className="w-2/12 h-full"> <img src={InnovativeTreeImg} alt="" className="w-full h-full" /></div>


              <div className="flex flex-col h-full space-y-3 md:space-y-12">
                <div className="flex flex-col space-y-8">
                  <img className="flex w-7/12 h-full " src={RightGlobal} />

                  <div className="flex flex-col w-full xl:w-5/12 ">

                    <span className="font-bold text-2xl text-[#225AF5]  ">Our Vision</span>
                    <div className="text-base xl:text-white text-[#777777] ">
                      To be the leading digital innovation hub in Africa, fostering transformative solutions that address the continent&apos;s
                      most pressing social and economic challenges.
                    </div>

                  </div>

                </div>
                <div className="flex flex-col space-y-8 space-y-">
                  <img className="flex w-7/12" src={RightHands} />
                  <div className="flex flex-col w-full xl:w-5/12 ">

                    <span className="font-bold text-2xl text-[#225AF5] pb-2">Our Mission</span>
                    <div className="text-base  xl:text-white text-[#777777] ">
                      Empowering innovators, startups, corporate organizations, and other stakeholders in the African innovation ecosystem to succeed and thrive in a rapidly evolving environment.
                    </div>

                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>

      </div>



      <ServicesAndInnovation />
      <div className="flex flex-col items-center justify-center w-full mt-28">
        <span className="flex justify-center text-center items-center py-3 font-semibold text-lg rounded-3xl px-6 bg-[#DFEEFF] text-[#616569]">How we engage to make innovation work</span>
        <div className="mt-20 w-full flex items-center justify-center lg:space-x-8 lg:space-y-0 space-y-5 lg:flex-row flex-col lg:[&>*]:w-3/12 [&>*]:w-10/12">

          <div className="flex lg:hover:w-[35%] flex-col shadow-lg rounded-3xl transition-[width] ease-in-out duration-700 hover:transition-[width]">
            <div className="flex w-full"><img className="w-full " src={StartupSupport} /></div>

            <div className="flex flex-col items-start w-full px-8 ">

              <h1 className="text-lg  lg:hover:text-xl pt-6 font-semibold text-[#1853B5]">Startup & Small Business
                Support</h1>
              <div className="h-[270px]   w-full flex text-base text-[#777777] flex-col   ">
                <p className="flex items-baseline justify-start w-full p-0 m-0 space-x-8 ">
                  <span className="m-0 text-lg">-</span>     <span> Strategy and Planning</span>
                </p>


                <p className="flex items-baseline justify-start w-full p-0 m-0 space-x-8 " >
                  <span className="text-lg">-</span>     <span>Product Development</span>
                </p>




                <p className="flex items-baseline justify-start w-full p-0 m-0 space-x-8 ">
                  <span className="text-lg">-</span>     <span> Strategic Marketing & Communication</span>
                </p>




                <p className="flex items-center justify-start w-full p-0 m-0 space-x-8 ">
                  <span className="text-lg">-</span>     <span>People and Organisational Culture</span>
                </p>



                <p className="flex items-center justify-start w-full p-0 m-0 space-x-8 ">
                  <span className="text-lg">-</span>     <span>Finance and Business Management</span>
                </p>
              </div>
              <div className="flex justify-center w-full mb-8">
                <a className="no-underline" href="/startup-boost">

                  <button className="flex hover:bg-[#120157]  items-center justify-between text-white  px-10 rounded-md bg-[#1D0190]">Learn more <FaArrowRight className="ml-2" /></button>
                </a>
              </div>
            </div>
          </div>


          <div className="flex lg:hover:w-[35%] flex-col shadow-lg rounded-3xl transition-[width] ease-in-out duration-700 hover:transition-[width]">
            <div className="flex w-full"><img className="w-full " src={CorporateInnovation} /></div>

            <div className="flex flex-col items-start w-full px-8 ">

              <h1 className="text-lg  lg:hover:text-xl pt-6 font-semibold text-[#1853B5]">Corporate Innovation</h1>
              <div className="h-[270px]    w-full flex text-base text-[#777777] flex-col  ">
                <p className="flex items-baseline justify-start w-full p-0 m-0 space-x-8 ">
                  <span className="m-0 text-lg">-</span>     <span>  Executive Insights</span>
                </p>


                <p className="flex items-baseline justify-start w-full p-0 m-0 space-x-8 " >
                  <span className="text-lg">-</span>     <span> External Incubation and Acceleration</span>
                </p>




                <p className="flex items-baseline justify-start w-full p-0 m-0 space-x-8 ">
                  <span className="text-lg">-</span>     <span> Product Development and Management</span>
                </p>




                <p className="flex items-baseline justify-start w-full p-0 m-0 space-x-8 ">
                  <span className="text-lg">-</span>     <span> Corporate Venturing</span>
                </p>



              </div>
              <div className="flex justify-center w-full h-full mt-[1.6rem] mb-8">
                <a className="no-underline " href="/corporate-innovation"><button className="flex hover:bg-[#120157]  items-center justify-between text-white   px-10  rounded-md bg-[#1D0190]">Learn more <FaArrowRight className="ml-2" /></button></a>
              </div>
            </div>
          </div>


          <div className="flex lg:hover:w-[35%] flex-col shadow-lg rounded-3xl transition-[width] ease-in-out duration-700 hover:transition-[width]">
            <div className="flex w-full"><img className="w-full " src={UniversityIndustry} /></div>

            <div className="flex flex-col items-start w-full px-8 ">

              <h1 className="text-lg  lg:hover:text-xl pt-6 font-semibold text-[#1853B5] w-full">University-Industry Collaboration</h1>
              <div className=" h-[270px] w-full flex text-base text-[#777777] flex-col  ">
                <p className="flex items-baseline justify-start w-full p-0 m-0 space-x-8 ">
                  <span className="m-0 text-lg">-</span>     <span>  Strategic Partnership Development</span>
                </p>


                <p className="flex items-baseline justify-start w-full p-0 m-0 space-x-8 " >
                  <span className="text-lg">-</span>     <span> Research Project Management</span>
                </p>




                <p className="flex items-baseline justify-start w-full p-0 m-0 space-x-8 ">
                  <span className="text-lg">-</span>     <span>Innovation Workshops, Seminars and
                    Community building</span>
                </p>





              </div>
              <div className="flex justify-center w-full h-full mb-8">
                <a href="/university" className="no-underline">
                  <button className="flex hover:bg-[#120157]  items-center justify-between text-white   px-10  rounded-md bg-[#1D0190]">Learn more <FaArrowRight className="ml-2" /></button>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full px-8 mt-16 md:px-16">
        {/* <span className="flex justify-center items-center py-3 font-semibold text-lg rounded-3xl px-6 my-16 bg-[#DFEEFF] text-[#616569]">Get in touch with us</span> */}
        <div className="flex flex-col items-center justify-center w-full pt-8 md:pt-8 bg-[#F0F4FE] rounded-[48px] md:px-16 mb-28">

          <span className=" mb-6  md:pl-0 pl-5 w-full mt-2 text-[#1853B5] text-lg md:text-2xl font-bold ">Get in touch with us</span>
          <div className="flex flex-col-reverse justify-between w-full md:flex-row">
            <div className="flex flex-col w-full md:w-5/12">


              <form onSubmit={handleSubmit} className="flex flex-col px-4 py-12 bg-white md:px-7">
                <div className="flex flex-col pb-12 space-y-6">
                  <div className="w-full">
                    <input
                      name="name"
                      placeholder="Your Name"
                      className="appearance-none w-full placeholder:text-base py-3 px-6 text-base bg-[#F5F9FE]"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                    />                     </div>
                  <div className="w-full">
                    <input
                      name="email"
                      placeholder="Your Email"
                      className="appearance-none w-full placeholder:text-base py-3 px-6 text-base bg-[#F5F9FE]"
                      type="text"
                      value={formData.email}
                      onChange={handleChange}
                    />                   </div>
                  <div className="w-full">
                    <textarea
                      rows="5"
                      name="message"
                      placeholder="Your Message"
                      className="appearance-none w-full outline-none placeholder:text-base py-3 px-6 text-base bg-[#F5F9FE]"
                      value={formData.message}
                      onChange={handleChange}
                    />                    </div>
                </div>
                <button
                  type="submit"
                  className="flex hover:bg-[#120157] text-white rounded-md font-medium text-base bg-[#1D0190] py-3 items-center justify-center w-full"
                >
                  Send message
                </button>
              </form>

            </div>

            <div className="flex w-full md:w-5/12">
              <img className="w-full aspect-auto" src={HelpPerson} />
            </div>
          </div>

          <div className="flex space-x-6 text-black pt- md:mb-52">


          </div>
        </div>

      </div>
      <NewFooter />

      {/* Services Section */}

      {/* carousel */}
      {/* <div>
        <div className={styles.services_section} id="our-services">
          <div className={styles.wrapper}>
            <Title title="Programs" subtitle="" />
            <CarouselWithVideos />
          </div>
        </div>
      </div> */}
      {/* Partners Section */}


      {/* Footer Section */}


    </div>
  );
}

export default Home;
