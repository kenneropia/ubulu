
import React, { useState, Suspense } from "react";
import { LandingNav } from "../../components/Nav";


import { NewFooter } from "../../components/Footer/NewFooter";


import { SwitchAccessShortcutAdd, CardGiftcard, Stream, GppGood, Diversity1, Psychology } from '@mui/icons-material/';


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

                        <Psychology fontSize="inherit" className="size-32 aspect-square" />
                    </div>
                    <div className="w-10/12">
                        <span className="text-lg font-semibold text-black font-montserrat">Innovative Environment</span>
                        <p className="text-sm font-medium text-justify sm:text-base">Join a dynamic and innovative workplace where your ideas are valued, and your contributions make a real impact.</p>
                    </div>
                </div>



                <div className="flex items-center flex-row sm:p-5 p-2 gap-x-2 sm:gap-x-8  bg-[#F4F6FF] rounded-3xl shadow-md">
                    <div className="flex items-center justify-center text-[5.375rem]">

                        <SwitchAccessShortcutAdd fontSize="inherit" className="size-32 aspect-square" />
                    </div>
                    <div className="w-auto">
                        <span className="text-lg font-semibold text-black font-montserrat">Professional Growth</span>
                        <p className="text-sm font-medium text-justify sm:text-base">We are committed to supporting our team’s growth through training, mentorship, and career growth opportunities.</p>
                    </div>
                </div>




                <div className="flex items-center flex-row sm:p-9 p-2 gap-x-2 sm:gap-x-8  bg-[#F4F6FF] rounded-3xl shadow-md">
                    <div className="flex items-center justify-center text-[5.375rem] ">

                        <Diversity1 fontSize="inherit" className="size-32 aspect-square" />
                    </div>
                    <div className="">
                        <span className="text-lg font-semibold text-black font-montserrat">Positive Culture</span>
                        <p className="text-sm font-medium text-justify sm:text-base">Experience a supportive and inclusive work culture that fosters collaboration, creativity, and teamwork.</p>
                    </div>
                </div>

                <div className="flex items-center flex-row sm:p-9 p-2 gap-x-2 sm:gap-x-8  bg-[#F4F6FF] rounded-3xl shadow-md">
                    <div className="flex items-center justify-center text-[5.375rem] ">

                        <Stream fontSize="inherit" className="size-32 aspect-square" />
                    </div>
                    <div className="w-auto">
                        <span className="text-lg font-semibold text-black font-montserrat">Flexible Opportunities</span>
                        <p className="text-sm font-medium text-justify sm:text-base">We offer both remote and hybrid roles to accommodate diverse work preferences and lifestyles.</p>
                    </div>
                </div>





                <div className="flex items-center flex-row sm:p-9 p-2 gap-x-2 sm:gap-x-8  bg-[#F4F6FF] rounded-3xl shadow-md">
                    <div className="flex items-center justify-center text-[5.375rem] ">

                        <GppGood fontSize="inherit" className="size-32 aspect-square" />
                    </div>
                    <div className="w-auto">
                        <span className="text-lg font-semibold text-black font-montserrat">Impactful Values</span>
                        <p className="text-sm font-medium text-justify sm:text-base">At Ubulu Africa, we value integrity, learning,  professionalism, excellence, innovation, and collaboration.</p>
                    </div>
                </div>



                <div className="flex items-center flex-row sm:p-9 p-2 gap-x-2 sm:gap-x-8  bg-[#F4F6FF] rounded-3xl shadow-md">
                    <div className="flex items-center justify-center text-[5.375rem] ">

                        <CardGiftcard fontSize="inherit" className="size-32 aspect-square" />
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

