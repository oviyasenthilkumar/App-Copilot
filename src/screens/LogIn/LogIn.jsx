import React, { useState } from "react";
import house from "../../img/house1.png";
import fullLogo1 from "../../img/fulllogo-transparent-nobuffer-1.png";
import fullLogo2 from "../../img/fulllogo-transparent-nobuffer-2.png";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
   <div className="min-h-screen flex items-center justify-center bg-gray-50 ">
      <div className="w-full gap-[1.4rem] rounded-lg flex flex-col md:flex-row overflow-hidden 
                 max-w-[70%] sm:max-w-4xl md:max-w-5xl lg:max-w-6xl xl:max-w-6xl 2xl:max-w-[70%]">
        {/* Left Section */}
        <div className=" w-full md:w-[43%] p-[3%] pt-[6%] bg-[#f6f6fa] rounded-[25px]">
          <div className="sticky absolute w-[220px] h-[61px] top-[41px] left-10 flex items-center justify-center w-full">
            <img className="w-10 h-[61px]" alt="Logo" src={fullLogo1} />
            <img className="w-[172px] h-4 ml-3" alt="Logo" src={fullLogo2} />
          </div>
          <form className=" pt-4 pr-[13%] pl-[13%] mt-[10%]">
            <div>
              <label className="block text-[13px] font-[600] pb-2 text-gray-600 [font-family:'Poppins',Helvetica] tracking-normal font-semibold">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                className="flex justify-end w-full pl-[1.5rem] pr-4 py-3 bg-white border-none rounded-[25px] focus:outline-none focus:shadow-lg shadow-md placeholder-gray-400"
                placeholder="example@gmail.com"
              />
            </div>

            <div className="relative">
              <label className="block font-semibold text-[13px] font-[600] pb-2 text-gray-600 [font-family:'Poppins',Helvetica] tracking-tight mt-4 ">
               PASSWORD
              </label>
              <input
                type={passwordVisible ? "text" : "password"}
                className="flex justify-end w-full pl-[1.5rem] pr-4 pb-[0.65rem] pt-[0.5rem] bg-white border-none rounded-[25px] focus:outline-none focus:shadow-lg shadow-md placeholder-gray-400"
                placeholder="********"
              />
              <button
                type="button"
                className="absolute top-[70%] bottom-[26%] right-[5%] flex items-center"
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
                    <path
                      d="M2 2L22 22"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.71277 6.7226C3.66479 8.79527 2 12 2 12C2 12 5.63636 19 12 19C14.0503 19 15.8174 18.2734 17.2711 17.2884M11 5.05822C11.3254 5.02013 11.6588 5 12 5C18.3636 5 22 12 22 12C22 12 21.3082 13.3317 20 14.8335"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14 14.2362C13.4692 14.7112 12.7684 15.0001 12 15.0001C10.3431 15.0001 9 13.657 9 12.0001C9 11.1764 9.33193 10.4303 9.86932 9.88818"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1 12C1 12 5 20 12 20C19 20 23 12 23 12"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>

            <div className=" text-[14px] mt-10 w-full flex justify-between">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-indigo-600"
                />
                <span className="ml-2 [font-family:'Poppins',Helvetica] font-[500]">
                  Remember me
                </span>
              </label>
              <a href="#" className="text-[#FF914D] [font-family:'Poppins',Helvetica]">
                <Link to="/reset">Reset Password?</Link>
              </a>
            </div>

            <button
              type="submit"
              className="w-full text-[12px] font-semibold bg-black text-white p-[4%] rounded-[25px] mt-[25%] [font-family:'Poppins',Helvetica]"
            >
              Log In
            </button>

            <p className="text-[16px] text-center mt-7 [font-family:'Poppins',Helvetica] tracking-normal font-[500]">
              Don’t have an account yet? <Link to="/signup" className="text-[#FF914D]"> New Account</Link> </p>
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
            <p className="mt-2.5 text-[20.5px] font-[500] text-gray-500 [font-family:'Poppins',Helvetica] tracking-tight">
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

export default LoginPage;
