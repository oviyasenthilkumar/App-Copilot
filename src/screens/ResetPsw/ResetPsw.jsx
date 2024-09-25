import React from "react";
import house from "../../img/house1.png"; // Example image path
import fullLogo1 from "../../img/fulllogo-transparent-nobuffer-1.png";
import fullLogo2 from "../../img/fulllogo-transparent-nobuffer-2.png";
import { Link } from "react-router-dom";

export const ResetPasswordPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 ">
      <div className="w-full gap-[1.4rem] rounded-lg flex flex-col md:flex-row overflow-hidden 
                 max-w-[70%] sm:max-w-4xl md:max-w-5xl lg:max-w-6xl xl:max-w-6xl 2xl:max-w-[70%]">
        {/* Left Section */}
        <div className="w-full md:w-[43%] p-[3%] pt-[6%] bg-[#f6f6fa] rounded-[25px]">
          <div className="sticky w-[220px] h-[61px] top-[41px] left-10 flex items-center justify-center w-full">
            <img className="w-10 h-[61px]" alt="Logo" src={fullLogo1} />
            <img className="w-[172px] h-4 ml-3" alt="Logo" src={fullLogo2} />
          </div>
          <form className=" pt-4 pr-[13%] pl-[13%] mt-[10%]">
            <h2 className="text-[36px] font-semibold [font-family:Poppins,Helvetica] text-gray-800 pb-9 text-center leading-3">
              Reset Password
            </h2>
            <p className="[font-family:Poppins,Helvetica] text-gray-600 text-[14px] mb-6 text-center">
              Enter your registered email ID, and we’ll send a reset password
              link to your email.
            </p>
            <div>
              <label className=" [font-family:Poppins,Helvetica] font-bold block text-[13px] font-[600] text-gray-600 pb-2 mt-[15%] leading-3">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                className="w-full pl-[1.5rem] pr-4 py-3 mt-[0.5%] bg-white border-none rounded-[25px] focus:outline-none focus:shadow-lg shadow-md placeholder-gray-400"
                placeholder="example@gmail.com"
              />
            </div>

            <button
              type="submit"
              className="[font-family:Poppins,Helvetica] w-full text-[12px] text-semibold bg-black text-white  rounded-[25px] mt-[30%] p-[4%] mb-[12%]"
            >
              Send Link
            </button>

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


