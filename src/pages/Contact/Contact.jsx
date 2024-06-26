import React, { useState } from "react";
import axios from "axios"
import { LandingNav } from "../../components/Nav";

import HelpPerson from "../../assets/help-person.png";


import { NewFooter } from "../../components/Footer/NewFooter";
import { Toaster, toast } from 'sonner'
const Contact = () => {
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
    <>   <Toaster />
      <LandingNav />

      <div className="flex flex-col items-center justify-center w-full px-8 mt-36">
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
    </>
  );
};

export default Contact;
