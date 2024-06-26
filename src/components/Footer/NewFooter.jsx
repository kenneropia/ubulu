import React from "react"

import { ReactComponent as Instagram } from "../../assets/Instagram-Icon.svg";
import { ReactComponent as UbuluLogo } from "../../assets/Ubulu-Logo.svg";

import { FaXTwitter } from "react-icons/fa6";

import { FaLinkedin } from "react-icons/fa";



export const NewFooter = () => {
    return (<section className="flex justify-between text-white flex-col w-full bg-[#081C3C]  lg:pt-20 pt-8 lg:pb-10 pb-8 md:px-28 px-6">
        <div className="flex flex-col w-full md:flex-row md:justify-between md:pr-6">
            <div className="flex flex-col w-full pb-5 space-y-6 lg:pb-0 md:w-5/12">
                <UbuluLogo className="w-56 h-12 " alt="logo" />
                <p className="text-base font-normal">Contact us today at hello@ubulu.africa</p>
            </div>

            <div className="flex flex-row justify-center w-full md:justify-end gap-x-14 md:gap-x-40 md:space-y-0 md:w-5/12 lg:w-7/12">


                <div className="flex flex-col justify-between text-base gap-x-4 ">
                    <p className="text-lg font-semibold font-montserrat">Ubulu Africa</p>
                    <div className="flex flex-col space-y-5 lg:flex-row lg:space-y-0 lg:gap-x-10">
                        <div className="flex flex-col space-y-5 font-light list-none">
                            <a href={"/"} className="inline-flex items-center text-white no-underline">
                                About us
                            </a>
                            <a href={"/services"} className="inline-flex items-center text-white no-underline">
                                Services
                            </a>
                            <a href={"/programs"} className="inline-flex items-center text-white no-underline">
                                Programs
                            </a>
                        </div>

                        <div className="flex flex-col space-y-5 font-light list-none">
                            <a href={"/career"} className="inline-flex items-center text-white no-underline">
                                Career
                            </a>
                            <a href={"/community"} className="inline-flex items-center text-white no-underline">
                                Community
                            </a>
                            <a href={"/Contact "} className="inline-flex items-center text-white no-underline">
                                Contact
                            </a>
                        </div>

                    </div>

                </div>



                <div className="flex flex-col text-base ">
                    <p className="w-full text-lg font-semibold font-montserrat">Follow Us</p>
                    <div className="flex flex-col space-y-5 font-light no-underline list-none">
                        <a
                            href={"https://www.instagram.com/UbuluAfrica/"}
                            className="inline-flex items-center text-white no-underline"
                        >
                            <Instagram className="mr-2" />
                            Instagram
                        </a>
                        <a
                            href={"https://twitter.com/UbuluAfrica"}
                            className="inline-flex items-center text-white no-underline"
                        >
                            <FaXTwitter className="mr-2" />X
                        </a>

                        <a
                            href={"https://www.linkedin.com/company/ubulu-africa"}
                            className="inline-flex items-center text-white no-underline"
                        >
                            <FaLinkedin className="mr-2" alt="linkedin" />
                            Linkedin
                        </a>
                    </div>
                </div>



            </div>
        </div>
        <div className="flex flex-col justify-between w-full pt-8 mt-12 border-t-2 md:flex-row sm:mt-28 ">
            <span>© 2024 Ubulu Africa. All rights reserved.</span>
            <div className="space-x-6 text-base font-light">
                <span>Cookies</span>
                <a className="text-white no-underline" href="/privacy-policy">Privacy Policy</a>
            </div>
        </div>

    </section>)
}