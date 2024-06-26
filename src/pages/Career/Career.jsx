
import React, { useState, Suspense } from "react";
import { LandingNav } from "../../components/Nav";


import { NewFooter } from "../../components/Footer/NewFooter";

import WorkWithUs from "../../assets/career/work-with-us.png"
import Approval from "../../assets/career/Approval.svg"
import Laptop from "../../assets/career/Laptop.svg"
import Location from "../../assets/career/Location.svg"
import Clock from "../../assets/career/Clock.svg"
import Vision from "../../assets/career/Vision.png"
import TalentPool from "../../assets/career/talent-pool.png"
import { BiPlus } from "react-icons/bi";


const JotFormReact = React.lazy(() => import('jotform-react'));
const Modal = ({ children, onClose }) => {
    return (
        <div className="fixed inset-0 z-[300] flex items-center justify-center">
            <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
            <div className="relative flex flex-col w-1/2 p-6 bg-white rounded-lg shadow-lg">
                <div className="flex justify-end w-full"> <button
                    className="text-gray-600 bg-transparent appearance-none hover:text-gray-900"
                    onClick={onClose}
                >
                    <BiPlus className="rotate-45" size={20} />
                </button>
                </div>
                <div className="flex items-center justify-center">
                    {children}
                </div>
            </div>
        </div>
    );
};



const Career = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            {isModalOpen && (
                <Modal onClose={closeModal}>
                    <Suspense fallback={<div className="text-black">Loading form...</div>}>
                        <JotFormReact formURL="https://form.jotform.com/241764886386575" />
                    </Suspense>
                </Modal>
            )}
            <LandingNav />
            <div className=" xxxs:px-4 lg:px-24 lg:mt-72 mt-28 sm:mt-44">
                <span className="text-[#112D7B] font-bold text-5xl font-montserrat">Careers</span>
                <p className="text-3xl font-semibold text-black font-montserrat ">Let us make innovation work</p>

                <p className="w-full mt-4 text-lg font-semibold text-black font-lato">We are building a Centre of Excellence for end-to-end innovation activities required to solve social and economic problems across Africa. Be part of a dynamic digital innovation team helping to make innovation work through collaborative creativity.</p>
            </div>
            <div className="flex flex-col items-center mt-10 xxxs:px-4 lg:px-24 gap-x-5 gap-y-2 lg:flex-row ">
                <div className="w-full lg:w-7/12"><img className="size-full" src={WorkWithUs} /></div>
                <div className="w-full mt-5 lg:w-5/12 lg:mt-0 ">
                    <span className="bg-[#0C2A5B] font-montserrat text-white font-medium text-lg rounded-full py-3 px-4">Why Join Ubulu</span>
                    <p className="mt-10 mb-8 text-xl font-semibold text-black font-montserrat">We love Mavericks</p>
                    <p className="w-full text-base font-semibold text-justify text-black leadin lg:w-full font-lato">Are you an independent-minded person with somewhat unorthodox views about life and the world around you? Come join our organisation that recognises, values and respects your uniqueness as you provide value to the world of innovation.</p>
                </div>
            </div>
            <div className="grid grid-cols-1 mt-10 mb-16 xl:grid-cols-2 xxxs:px-4 lg:px-24 gap-x-16 gap-y-10 lg:flex-row">
                <div className="flex items-center flex-row sm:p-9 p-2 gap-x-2 sm:gap-x-8  bg-[#F4F6FF] rounded-3xl shadow-md">
                    <div className="flex items-center justify-center text-[5.375rem]">
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit size-32 aspect-square css-1vooibu-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PsychologyIcon"><path d="M13 8.57c-.79 0-1.43.64-1.43 1.43s.64 1.43 1.43 1.43 1.43-.64 1.43-1.43-.64-1.43-1.43-1.43z"></path><path d="M13 3C9.25 3 6.2 5.94 6.02 9.64L4.1 12.2c-.25.33-.01.8.4.8H6v3c0 1.1.9 2 2 2h1v3h7v-4.68c2.36-1.12 4-3.53 4-6.32 0-3.87-3.13-7-7-7zm3 7c0 .13-.01.26-.02.39l.83.66c.08.06.1.16.05.25l-.8 1.39c-.05.09-.16.12-.24.09l-.99-.4c-.21.16-.43.29-.67.39L14 13.83c-.01.1-.1.17-.2.17h-1.6c-.1 0-.18-.07-.2-.17l-.15-1.06c-.25-.1-.47-.23-.68-.39l-.99.4c-.09.03-.2 0-.25-.09l-.8-1.39c-.05-.08-.03-.19.05-.25l.84-.66c-.01-.13-.02-.26-.02-.39s.02-.27.04-.39l-.85-.66c-.08-.06-.1-.16-.05-.26l.8-1.38c.05-.09.15-.12.24-.09l1 .4c.2-.15.43-.29.67-.39L12 6.17c.02-.1.1-.17.2-.17h1.6c.1 0 .18.07.2.17l.15 1.06c.24.1.46.23.67.39l1-.4c.09-.03.2 0 .24.09l.8 1.38c.05.09.03.2-.05.26l-.85.66c.03.12.04.25.04.39z"></path></svg>
                    </div>
                    <div className="w-10/12">
                        <span className="text-lg font-semibold text-black font-montserrat">Innovative Environment</span>
                        <p className="text-sm font-medium text-justify sm:text-base">Join a dynamic and innovative workplace where your ideas are valued, and your contributions make a real impact.</p>
                    </div>
                </div>



                <div className="flex items-center flex-row sm:p-5 p-2 gap-x-2 sm:gap-x-8  bg-[#F4F6FF] rounded-3xl shadow-md">
                    <div className="flex items-center justify-center text-[5.375rem]">

                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit size-32 aspect-square css-1vooibu-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SwitchAccessShortcutAddIcon"><path d="M24 14h-2v-2h-2v2h-2v2h2v2h2v-2h2v-2zM7.06 8.94 5 8l2.06-.94L8 5l.94 2.06L11 8l-2.06.94L8 11l-.94-2.06zM8 21l.94-2.06L11 18l-2.06-.94L8 15l-.94 2.06L5 18l2.06.94L8 21zm-3.63-8.63L3 13l1.37.63L5 15l.63-1.37L7 13l-1.37-.63L5 11l-.63 1.37zM12 12c0-2.73 1.08-5.27 2.75-7.25L12 2h7v7l-2.82-2.82C14.84 7.82 14 9.88 14 12c0 3.32 2.1 6.36 5 7.82V22c-4.09-1.59-7-5.65-7-10z"></path></svg>
                    </div>
                    <div className="w-auto">
                        <span className="text-lg font-semibold text-black font-montserrat">Professional Growth</span>
                        <p className="text-sm font-medium text-justify sm:text-base">We are committed to supporting our team’s growth through training, mentorship, and career growth opportunities.</p>
                    </div>
                </div>




                <div className="flex items-center flex-row sm:p-9 p-2 gap-x-2 sm:gap-x-8  bg-[#F4F6FF] rounded-3xl shadow-md">
                    <div className="flex items-center justify-center text-[5.375rem] ">
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit size-32 aspect-square css-1vooibu-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="Diversity1Icon"><circle cx="4" cy="14" r="2"></circle><path d="M1.22 17.58C.48 17.9 0 18.62 0 19.43V21h4.5v-1.61c0-.83.23-1.61.63-2.29-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58z"></path><circle cx="20" cy="14" r="2"></circle><path d="M22.78 17.58c-.85-.37-1.79-.58-2.78-.58-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V21H24v-1.57c0-.81-.48-1.53-1.22-1.85zm-6.54-.93c-1.17-.52-2.61-.9-4.24-.9-1.63 0-3.07.39-4.24.9C6.68 17.13 6 18.21 6 19.39V21h12v-1.61c0-1.18-.68-2.26-1.76-2.74zM9 12c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"></path><path d="M2.48 10.86C2.17 10.1 2 9.36 2 8.6 2 6.02 4.02 4 6.6 4c2.68 0 3.82 1.74 5.4 3.59C13.57 5.76 14.7 4 17.4 4 19.98 4 22 6.02 22 8.6c0 .76-.17 1.5-.48 2.26.65.31 1.18.82 1.53 1.44.6-1.2.95-2.42.95-3.7C24 4.9 21.1 2 17.4 2c-2.09 0-4.09.97-5.4 2.51C10.69 2.97 8.69 2 6.6 2 2.9 2 0 4.9 0 8.6c0 1.28.35 2.5.96 3.7.35-.62.88-1.13 1.52-1.44z"></path></svg>
                    </div>
                    <div className="">
                        <span className="text-lg font-semibold text-black font-montserrat">Positive Culture</span>
                        <p className="text-sm font-medium text-justify sm:text-base">Experience a supportive and inclusive work culture that fosters collaboration, creativity, and teamwork.</p>
                    </div>
                </div>

                <div className="flex items-center flex-row sm:p-9 p-2 gap-x-2 sm:gap-x-8  bg-[#F4F6FF] rounded-3xl shadow-md">
                    <div className="flex items-center justify-center text-[5.375rem] ">
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit size-32 aspect-square css-1vooibu-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StreamIcon"><circle cx="20" cy="12" r="2"></circle><circle cx="4" cy="12" r="2"></circle><circle cx="12" cy="20" r="2"></circle><path d="M10.05 8.59 6.03 4.55h-.01l-.31-.32-1.42 1.41 4.02 4.05.01-.01.31.32zm3.893.027 4.405-4.392L19.76 5.64l-4.405 4.393zM10.01 15.36l-1.42-1.41-4.03 4.01-.32.33 1.41 1.41 4.03-4.02zm9.75 2.94-3.99-4.01-.36-.35L14 15.35l3.99 4.01.35.35z"></path><circle cx="12" cy="4" r="2"></circle></svg>
                    </div>
                    <div className="w-auto">
                        <span className="text-lg font-semibold text-black font-montserrat">Flexible Opportunities</span>
                        <p className="text-sm font-medium text-justify sm:text-base">We offer both remote and hybrid roles to accommodate diverse work preferences and lifestyles.</p>
                    </div>
                </div>





                <div className="flex items-center flex-row sm:p-9 p-2 gap-x-2 sm:gap-x-8  bg-[#F4F6FF] rounded-3xl shadow-md">
                    <div className="flex items-center justify-center text-[5.375rem] ">

                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit size-32 aspect-square css-1vooibu-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="GppGoodIcon"><path d="M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1.06 13.54L7.4 12l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66z"></path></svg>
                    </div>
                    <div className="w-auto">
                        <span className="text-lg font-semibold text-black font-montserrat">Impactful Values</span>
                        <p className="text-sm font-medium text-justify sm:text-base">At Ubulu Africa, we value integrity, learning,  professionalism, excellence, innovation, and collaboration.</p>
                    </div>
                </div>



                <div className="flex items-center flex-row sm:p-9 p-2 gap-x-2 sm:gap-x-8  bg-[#F4F6FF] rounded-3xl shadow-md">
                    <div className="flex items-center justify-center text-[5.375rem] ">
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit size-32 aspect-square css-1vooibu-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CardGiftcardIcon"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"></path></svg>
                    </div>
                    <div className="w-auto">
                        <span className="text-lg font-semibold text-black font-montserrat">Inclusive Benefits</span>
                        <p className="text-sm font-medium text-justify sm:text-base">We offer HMO coverage and robust pension plans for our team’s health and financial security.</p>
                    </div>
                </div>

            </div>
            <div className="flex flex-col w-full items-center  pt-16 xxxs:px-4 lg:px-24   bg-[#F4F6FF]">
                <span className="inline-flex justify-center items-center bg-[#0C2A5B]  font-montserrat capitalize text-white font-semibold text-lg rounded-full py-3 px-10 ">WE’RE HIRING</span>
                <p className="my-8 text-xl font-semibold text-black font-montserrat">Current Openings</p>
                <p className="text-base font-semibold text-black font-lato">Check out our latest job opportunities below and apply to join our team today!</p>
            </div>

            <div className="flex flex-col bg-[#F4F6FF] items-center  pt-5 pb-16 gap-y-10">
                <div className="flex flex-row p-9  w-10/12  items-center rounded-3xl bg-white  border border-[#8F8F8FE0]">
                    <div className="flex flex-col w-full gap-y-3 ">
                        <span className="text-xl font-bold text-blackfont-montserrat">Full Stack Developer</span>
                        <span className="text-base font-semibold text-black text-wrap font-lato">We are looking for a mid-level full-stack developer to join us in building out our innovative platforms.</span>
                        <div className="flex flex-wrap justify-start w-full mt-3 gap-x-6 gap-y-3">
                            <span className="lg:w-[20%] sm:w-4/12 w-full inline-flex sm:justify-center justify-start items-center bg-[#0C2A5B]  font-lato text-white font-normal text-base lg:text-lg rounded-full py-1 gap-x-3  sm:px-0 px-8   "><img src={Location} /> Lagos</span>
                            <span className="lg:w-[20%] sm:w-4/12 w-full inline-flex sm:justify-center items-center  justify-start font-lato  font-normal text-base lg:text-lg rounded-full   gap-x-3    bg-[#F4F6FF]  py-1 sm:px-0 px-8  text-black  "><img src={Clock} /> Full Time</span>
                            <span className="lg:w-[20%] sm:w-4/12 w-full inline-flex items-center sm:justify-center  justify-start   text-base font-normal text-white bg-black rounded-full font-lato lg:text-lg gap-x-3 py-1 sm:px-0 px-8 "><img src={Laptop} /> Hybrid</span>

                        </div>
                    </div>
                    <div className="items-center justify-center h-full"><img src={Approval} /></div>
                </div>

                <div className="flex flex-row p-9 bg-white   w-10/12 justify-between items-center rounded-3xl  border border-[#8F8F8FE0]">
                    <div className="flex flex-col w-full gap-y-3 ">
                        <span className="text-xl font-bold text-blackfont-montserrat">Lead Product Manager</span>
                        <span className="text-base font-semibold text-black text-wrap font-lato">We are looking for a dynamic Product Manager with strong technology skills and experience to lead projects.</span>
                        <div className="flex flex-wrap justify-start w-full mt-3 gap-x-6 gap-y-3">
                            <span className="lg:w-[20%] sm:w-4/12 w-full inline-flex sm:justify-center justify-start items-center bg-[#0C2A5B]  font-lato text-white font-normal text-base lg:text-lg rounded-full py-1 gap-x-3  sm:px-0 px-8   "><img src={Location} /> Lagos</span>
                            <span className="lg:w-[20%] sm:w-4/12 w-full inline-flex sm:justify-center items-center  justify-start font-lato  font-normal text-base lg:text-lg rounded-full   gap-x-3    bg-[#F4F6FF]  py-1 sm:px-0 px-8  text-black  "><img src={Clock} /> Full Time</span>
                            <span className="lg:w-[20%] sm:w-4/12 w-full inline-flex items-center sm:justify-center  justify-start   text-base font-normal text-white bg-black rounded-full font-lato lg:text-lg gap-x-3 py-1 sm:px-0 px-8 "><img src={Laptop} /> Hybrid</span>

                        </div>
                    </div>
                    <div className="items-center justify-center h-full"><img src={Approval} /></div>
                </div>


            </div>


            <div className="flex flex-col items-center justify-between px-8 mt-10 mb-10 gap-y-6 lg:px-14 lg:flex-row">
                <div className="w-full h-full lg:w-5/12">
                    <img src={Vision} />
                </div>

                <div className="flex-col justify-center w-full h-full lg:justify-start lg:w-6/12">
                    <span className="inline-flex  justify-center  items-center bg-[#0C2A5B] font-semibold font-montserrat  text-white  text-lg rounded-full py-2 gap-x-3 lg:px-12 px-3"> Be A Part Of The Vision</span>
                    <p className="my-4 text-xl font-semibold text-black font-montserrat">Interested in joining the Ubulu team?</p>
                    <p className="text-base font-semibold leading-8 text-justify text-black lg:w-11/12 font-lato">Within the next decade, Ubulu Africa will facilitate the creation of numerous breakthrough innovative solutions within various industries and sectors across the African continent. If you are a brilliant, creative mind looking to join us in building impactful ventures, solving interesting problems and growing the digital innovation body of work, then you’re at the right place! Join the community to be considered for future opportunities.</p>
                    <button onClick={() => {
                        setIsModalOpen(true)
                    }} className="inline-flex items-center justify-between px-12 py-3 mt-2 text-lg font-normal text-white bg-black appearance-none rounded-2xl font-lato gap-x-3">Join Our Talent Pool <img src={TalentPool} /> </button>
                </div>
            </div>
            <NewFooter /> </>
    );
};

export default Career;

