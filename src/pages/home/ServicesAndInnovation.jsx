import React from "react"

import VentureBuilding from "../../assets/venture-building.png";
import EcosystemBuilding from "../../assets/ecosystem-building.png";

import { FaArrowRight, } from "react-icons/fa";



export const ServicesAndInnovation = () => {
    return (<div className="flex flex-col items-center justify-center w-full 2xl:-mt-[160px] xl:-mt-[360px] mt-20 ">
        <span className="flex justify-center items-center py-3 font-semibold text-lg rounded-3xl px-6 bg-[#DFEEFF] text-[#616569]">How we make innovation work</span>
        <span className=" text-center md:w-[53%] w-7/12 mt-4 text-[#777777] text-sm lg:text-base">We believe that digital innovation outcomes are more impactful when all aspects of the digital innovation value chain are made to work together seamlessly. This is why we focus our work on Venture Building and Ecosystem Building.</span>
        <div className="md:mt-20 mt-4 w-full flex justify-center md:space-x-8 flex-col md:px-0 px-2 md:space-y-0 space-y-4 md:flex-row md:[&>*]:w-4/12 ">
            <div className="flex flex-col mx-5 shadow-lg md:mx-0 rounded-3xl">
                <div className="flex w-full"><img className="w-full " src={VentureBuilding} /></div>

                <div className="flex flex-col items-start w-full px-8 py-8">

                    <p className="xl:text-xl text-2xl font-semibold text-[#1853B5]">Venture Building</p>

                    <span className="group md:w-10/12  mt-2 text-[#777777] text-sm">
                        <span> Ubulu Africa actively fosters the development and provision of innovative solutions through venture building. We build innovative platforms internally a</span>
                        <span className="hidden md:inline md:group-hover:hidden">...</span>
                        <span className="inline md:hidden md:group-hover:inline">nd also partner with corporate organizations and academic institutions to realize their product development objectives. Our venture studio is a melting pot of sorts, catering to a broad spectrum of problem solvers.</span></span>
                    <div className="flex justify-center w-full mt-12">
                        <a className="no-underline" href="/services"> <button className="flex hover:bg-[#120157]  items-center justify-between text-white  px-14 font-medium text-base rounded-md  bg-[#1D0190]">Learn more <FaArrowRight className="ml-2" /></button>
                        </a>  </div>
                </div>
            </div>
            <div className="flex flex-col mx-5 shadow-lg md:mx-0 rounded-3xl">
                <div className="flex w-full"><img className="w-full " src={EcosystemBuilding} /></div>

                <div className="flex flex-col items-start w-full px-8 py-8">

                    <p className="xl:text-xl text-2xl font-semibold text-[#1853B5]">Ecosystem Building</p>

                    <span className="group   md:w-10/12  mt-2 text-[#777777] text-sm">
                        <span>
                            Acknowledging the need to nurture and promote collaborative ecosystems for digital innovation, Ubulu Africa conceptualizes, develops, and implements variou</span>

                        <span className="hidden md:inline md:group-hover:hidden">...</span>
                        <span className="inline md:hidden md:group-hover:inline">us programs for foster digital innovation across Africa. We run digital skills and capacity building programs; basic and applied research; incubator and accelerator programs; pitch competitions; and innovation challenges to stimulate digital innovation capabilities across board.</span>
                    </span>

                    <div className="flex justify-center w-full mt-12">
                        <a className="no-underline" href="/programs"> <button className="flex hover:bg-[#120157]  items-center  font-medium text-base justify-between text-white  px-14 rounded-md bg-[#1D0190]">Learn more <FaArrowRight className="ml-2" /></button>
                        </a>       </div>
                </div>
            </div>
        </div>
    </div>)

}