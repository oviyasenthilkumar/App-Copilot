import React, { useState } from "react";
import house from "../../img/house1.png";
import fullLogo1 from "../../img/fulllogo-transparent-nobuffer-1.png";
import fullLogo2 from "../../img/fulllogo-transparent-nobuffer-2.png";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 ">
      <div className="w-full gap-[1.4rem] rounded-lg flex flex-col md:flex-row overflow-hidden 
                 max-w-[70%] sm:max-w-4xl md:max-w-5xl lg:max-w-6xl xl:max-w-6xl 2xl:max-w-[70%]">
        {/* Left Section */}
        <div className="w-full md:w-[43%] p-[3%] bg-[#f6f6fa] rounded-[25px]">
          <div className="sticky absolute w-[220px] h-[61px] top-[41px] left-10 flex items-center justify-center w-full">
            <img className="w-10 h-[61px]" alt="Logo" src={fullLogo1} />
            <img className="w-[172px] h-4 ml-3" alt="Logo" src={fullLogo2} />
          </div>
          <form className="pt-5 pr-[13%] pl-[13%] ">
            <div>
              <label className="block text-[13px] tracking-normal font-semibold text-gray-600 pb-2 [font-family:'Poppins',Helvetica] pt-[15px]">
               FULL NAME
              </label>
              <input
                type="text"
                className="flex justify-end w-full pl-[1.5rem] pr-4 py-3 bg-white border-none rounded-[25px] focus:outline-none focus:shadow-lg shadow-md placeholder-gray-400"
                placeholder="Jiangyu"
              />
            </div>

            <div>
              <label className="block text-[13px] font-semibold pb-2 text-gray-600 [font-family:'Poppins',Helvetica] pt-[15px] tracking-normal">
               EMAIL ADDRESS
              </label>
              <input
                type="email"
                className="flex justify-end w-full pl-[1.5rem] pr-4 py-3 bg-white border-none rounded-[25px] focus:outline-none focus:shadow-lg shadow-md placeholder-gray-400"
                placeholder="example@gmail.com"
              />
            </div>

            {/* Password Section */}
            <div className="relative">
              <label className="block text-[13px] font-semibold pb-2 text-gray-600 [font-family:'Poppins',Helvetica] pt-[15px] tracking-normal">
               PASSWORD
              </label>
              <input
                type={passwordVisible ? "text" : "password"}
                className="flex justify-end w-full pl-[1.5rem] pr-4 py-3 bg-white border-none rounded-[25px] focus:outline-none focus:shadow-lg shadow-md placeholder-gray-400"
                placeholder="********"
              />
              <button
                type="button"
                className="absolute top-[70%] bottom-[24%] right-[5%] flex items-center"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? (
                  <svg
                    className="w-6 h-6 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Hide Password Icon */}
                    <path d="M2 2L22 22" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M6.713 6.723C3.665 8.795 2 12 2 12s3.636 7 10 7c2.05 0 3.817-.727 5.271-1.712M11 5.058c.325-.038.659-.058 1-.058 6.364 0 10 7 10 7s-.692 1.332-2 2.834M14 14.236c-.531.475-1.232.764-2 .764-1.657 0-3-1.343-3-3 0-.824.332-1.57.87-2.112" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Show Password Icon */}
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    <circle cx="12" cy="12" r="3" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></circle>
                  </svg>
                )}
              </button>
            </div>

            <div className="text-[16px] text-[#9ca3af] mt-7 [font-family:'Poppins',Helvetica] tracking-normal flex items-start">
            <input type="checkbox" className="mr-2 mt-1" />
            <span>
              By creating an account, you agree to the 
              <a href="#" className="text-[#FF914D] underline"> terms of use</a> and our 
              <a href="#" className="text-[#FF914D] underline"> privacy policy</a>.
            </span>
          </div>


            <button
              type="submit"
              className="w-full text-[12px] bg-black text-white  p-[14px] rounded-[25px] mt-[2.5rem] [font-family:'Poppins',Helvetica] tracking-normal"
            >
              Create Account
            </button>

            <p className="text-[16px] text-center mt-7 [font-family:'Poppins',Helvetica] font-medium tracking-normal">
              Already have an account?
             
                <Link to="/login" className="text-[#FF914D]"> Log in</Link>
             
            </p>
          </form>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-[57%] rounded-[30px] flex relative justify-center  bg-gradient-to-r from-[#B5E6F6] to-[#FFCDA0]">
          <div className="text-left pr-[19.5%] pt-[10%]">
            <h2 className="text-[19px] [font-family:'Poppins',Helvetica] text-gray-700 mb-2 font-medium tracking-normal">
              WELCOME TO APPCOPILOT
            </h2>
            <h2 className="text-[64px] font-bold [font-family:'Poppins',Helvetica]  leading-[1.1] tracking-normal">
              Compare
              <br /> Your Property
            </h2>
            <p className="mt-2.5 text-[20.5px] font-[500] text-gray-500 [font-family:'Poppins',Helvetica] tracking-normal">
             Discover homes that match your lifestyle. 
            </p>
          </div>
          <img
            src={house}
            alt="Property comparison"
            className="mt-8 mx-auto absolute bottom-[-18px] w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
