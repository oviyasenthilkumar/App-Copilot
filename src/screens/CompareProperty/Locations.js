import rectangle from "../../img/rectangle-7-11.png";
import rectanglePanel from "../../img/rectangle-9.svg";
import polygon3 from "../../img/polygon-3.svg";
import likeButton from "../../img/icon-3.svg";

import checkButton from "../../img/vector-81.svg";
import { FaEye, FaBicycle, FaCar, FaCog, FaDumbbell, FaCaretDown, FaArrowUp } from 'react-icons/fa';
import { IoCaretDownSharp, IoCaretUpSharp, IoStatsChartSharp } from "react-icons/io5";
import { FaArrowDownLong } from "react-icons/fa6";

export default function Locations({ navigate }) {
  return <PropertyListing navigate={navigate} />;
}

function PropertyListing({
  propertyName = "Property name",
  address = "(3806 W 20th Ave, Kennewick, WA 99338)",
  suggestedRentValue = 1234,
  rent = 1234,
  floorNumber = 10,
  stories = 6,
  avgUnitSize = "741 sqft",
  views = 20,
  showings = 20,
  date = "12.12.2024",
  parking = "-",
  type = "Apartment",
  distance = "-",
  navigate,
}) {
  return (
    <div className=" border rounded-tl-[67px] rounded-tr-[1rem] rounded-br-[1rem] rounded-bl-[1rem] flex flex-row justify-between rounded-2xl border-grey ">
      <div className="relative">
        <img
          alt="Rectangle"
          src={rectangle}
          className="object-cover h-full w-full rounded-tl-[67px] rounded-tr-[1rem] rounded-br-[1rem] rounded-bl-[1rem]"
        />
        <div className="absolute top-[93px] right-0 bg-[#FF914D] text-white text-xs font-bold px-2 py-1 z-10 transform rotate-90 origin-top-right rounded-[25px]">
          Add to listing
        </div>
      </div>
    
      <CardValues
        propertyName={propertyName}
        address={address}
        amenities={[
          { label: "View", icon: FaEye },
          { label: "Balcony", icon: FaBicycle },
          { label: "Garage", icon: FaCar },
          { label: "Dishwasher", icon: FaCog },
          { label: "Fitness Center", icon: FaDumbbell },
        ]}
        rent={rent}
        floorNumber={floorNumber}
        stories={stories}
        avgUnitSize={avgUnitSize}
        views={views}
        showings={showings}
        date={date}
        parking={parking}
        type={type}
        distance={distance}
        suggestedRentValue={suggestedRentValue}
        navigate={navigate}
      />
    </div>
  );
}

function CardInfo({ suggestedRentValue, rectangle, checkButton, polygon3 }) {
  return (
    <>
      <div className="absolute w-[184px] h-[111px] top-[58px] left-[806px]">
        <div className="absolute w-[186px] h-[41px] top-[70px] left-0">
          <ButtonRounded
            text="View Rental Comparisons"
            className="text-black text-xs"
          />
        </div>
        <div className="absolute w-[131px] h-[47px] top-0 left-[57px]">
          <div className="absolute h-6 top-0 left-0 [font-family:'Poppins',Helvetica] font-bold text-orange text-xl tracking-[0] leading-[23.7px] whitespace-nowrap">
            {suggestedRentValue}/ mo
          </div>
          <div className="absolute h-5 top-[27px] left-0 [font-family:'Poppins',Helvetica] font-normal text-[#918f8f] text-base tracking-[0] leading-[19.2px] whitespace-nowrap">
            Suggested Rent
          </div>
        </div>
      </div>
      <img
        className="absolute w-[343px] left-0 object-cover h-[186px] top-0"
        alt="Rectangle"
        src={rectangle}
      />
      <CheckButton src={checkButton} />
      <img
        className="absolute w-[15px] h-[13px] top-16 left-[843px]"
        alt="Polygon"
        src={polygon3}
      />
    </>
  );
}

function ActiveListingTag() {
  return (
    <div className="absolute w-[21px] h-[59px] top-0 left-[324px]">
      <div className="relative w-[19px] h-[59px] bg-[#ff914d] rounded-[1.13px_8.48px_9.61px_9.61px]">
        <div className="absolute h-2.5 top-[25px] -left-3 rotate-[90.00deg] [font-family:Poppins,Helvetica] font-bold text-white text-[7px] tracking-[0] leading-[9.0px] whitespace-nowrap">
          Active Listing
        </div>
      </div>
    </div>
  );
}

function CardValues({
  propertyName,
  address,
  amenities,
  rent,
  floorNumber,
  stories,
  avgUnitSize,
  views,
  showings,
  date,
  parking,
  type,
  distance,
  suggestedRentValue,
  navigate,
}) {
  const handleGoToDrill = () => {
    navigate("/drilldown");
  };
  return (
    <div className="[font-family:Poppins,Helvetica] flex flex-row flex-1/2 justify-between p-6">
      <div className="flex flex-col gap-30">
        <div>
          <TextLarge propertyName={propertyName} address={address} />
          <TextSmall text={amenities} />
        </div>
        <div className="pt-6">
          <CardValueGrid>
            {/* <CardValueItem value="$1.075" label="Rent/Sqft" /> */}
            {/* <CardValueItem value={`$${rent}`} label="Rent" /> */}
            {/* <CardValueItem value={floorNumber} label="Floor Number" /> */}
            {/* <CardValueItem value={stories} label="Stories" /> */}
            <CardValueItem value={avgUnitSize} label="Area Size" />
            <CardValueItem value={stories} label="Bedrooms" />
            <CardValueItem value={stories} label="Bathrooms" />           
            <CardValueItem value={type} label="Type" />
            {/* <CardValueItem value={views} label="No. Viewed" /> */}
            {/* <CardValueItem value={showings} label="No. Showings" /> */}
            {/* <CardValueItem value={date} label="Lease Expiry" /> */}
            {/* <CardValueItem value={parking} label="Parking" /> */}           
            {/* <CardValueItem value={distance} label="Distance to Transit" /> */}
          </CardValueGrid>
  
      {/* <h2 className="text-2xl font-semibold text-gray-800">Statistics</h2> */}
      <div className="mt-4 flex gap-3 flex-wrap items-center ">
        {/* <div style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'}} className="flex flex-col justify-center px-5 py-2 gap-0 items-start  rounded-md ">
          <span className="text-sm text-gray-600">Views/day</span>
          <span className="text-md font-bold flex gap-1 items-center text-blue-500"> {views} {false ? <IoCaretUpSharp className="text-[#0ae50a] text-[20px]" /> : <IoCaretDownSharp  className="text-[#c60808] text-[20px]" />} </span>
        </div> */}
        <div style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'}} className="flex flex-col justify-center px-5 py-2 gap-0 items-start  rounded-md ">
          <span className="text-sm text-gray-600">Views last week</span>
          <span className="text-md font-bold flex gap-1 items-center text-blue-500"> {views} {false ? <IoCaretUpSharp className="text-[#0ae50a] text-[20px]" /> : <IoCaretDownSharp  className="text-[#c60808] text-[20px]" />} </span>
        </div>
        {/* <div style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'}} className="flex flex-col justify-center px-5 py-2 gap-0 items-start  rounded-md ">
          <span className="text-sm text-gray-600">Showings/per</span>
          <span className="text-md font-bold flex gap-1 items-center text-blue-500"> {showings} {false ? <IoCaretUpSharp className="text-[#0ae50a] text-[20px]" /> : <IoCaretDownSharp  className="text-[#c60808] text-[20px]" />} </span>
        </div> */}
        <div style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'}} className="flex flex-col justify-center px-5 py-2 gap-0 items-start  rounded-md ">
          <span className="text-sm text-gray-600">Showings last week</span>
          <span className="text-md font-bold flex gap-1 items-center text-blue-500"> {showings} {false ? <IoCaretUpSharp className="text-[#0ae50a] text-[20px]" /> : <IoCaretDownSharp  className="text-[#c60808] text-[20px]" />} </span>
        </div>
      </div>
 
          {/* <CardValueItem value={views} label="No. Viewed" />
          <CardValueItem value={showings} label="No. Showings" /> */}
        </div>
      </div>
      <div className="flex flex-col justify-end gap-6">
      <div className="self-end flex gap-1 items-start relative">
        <FaCaretDown className={`${true?"rotate-180 text-green -mt-1":"text-orange -mt-2"} text-[35px]`} />
          <div className="flex-col flex gap-1">
          <div className={` h-6[font-family:Poppins,Helvetica] font-bold ${true ? "text-green":"text-orange"}  text-xl tracking-[0] leading-[23.7px] whitespace-nowrap`}>
            $1.075/ Sqft
          </div>
          <div className="h-5 left-0 [font-family:'Poppins',Helvetica] font-normal text-[#918f8f] text-base tracking-[0] leading-[19.2px] whitespace-nowrap">
            Suggested Rent
          </div>
          </div>

        </div>
        <div className="self-end flex gap-1 items-start relative">
        <FaCaretDown className={`${true?"rotate-180 text-green -mt-1":"text-orange -mt-2"} text-[35px]`} />
          <div className="flex-col flex gap-1">
          <div className={` h-6[font-family:Poppins,Helvetica] font-bold ${true ? "text-green":"text-orange"}  text-xl tracking-[0] leading-[23.7px] whitespace-nowrap`}>
            $ {suggestedRentValue}/ mo
          </div>
          <div className="h-5 left-0 [font-family:'Poppins',Helvetica] font-normal text-[#918f8f] text-base tracking-[0] leading-[19.2px] whitespace-nowrap">
            Suggested Rent
          </div>
          </div>

        </div>
        <div onClick={handleGoToDrill}>
          <ButtonRounded
            text="View Rental Comparisons"
            className="text-black text-xs"
          />
        </div>

      </div>
    </div>
  );
}

function CardValueGrid({ children }) {
  return (
    <div className="flex flex-wrap w-full items-start ml-4 gap-[21px_13px] ">
      {children}
    </div>
  );
}

function CardValueItem({ value, label }) {
  return (
    <div className="flex flex-col w-fit items-start gap-[1px] relative border-r border-[#A0A0A06B] pr-[14px]">
      <ValuesBold val={value} />
      <Values val={label} />
    </div>
  );
}

function ButtonRounded({ text, className }) {
  return (
    <div
      className={`py-[16px] px-[13px] rounded-[23.5px] border border-solid border-black ${className} flex justify-center align-middle`}
    >
      <div className="font-family:'Poppins',Helvetica] font-semibold text-xs tracking-[0] leading-[normal] whitespace-nowrap">
        {text}
      </div>
    </div>
  );
}

function CheckButton({ src }) {
  return (
    <div className="absolute w-[26px] h-[26px] top-[7px] left-[3px] bg-white rounded-[3px] border border-solid border-[#00000042] shadow-[0px_2.62px_13.1px_#0000001f]">
      <img
        className="h-[9px] top-2 left-[7px] absolute w-[11px]"
        alt="Check"
        src={src}
      />
    </div>
  );
}

function LoadMoreButton() {
  return (
    <div className="relative w-[124px] h-[47px]">
      <div className="relative w-[122px] h-[47px] bg-black rounded-[23.5px]">
        <div className="absolute top-4 left-[30px] [font-family:'Poppins',Helvetica] font-semibold text-white text-xs text-center tracking-[0] leading-[normal]">
          Load More
        </div>
      </div>
    </div>
  );
}

// Utility Components

function TextSmall({ text, className }) {
  return (
    <div className={`amenities-container mt-3 flex flex-row gap-2  flex-wrap rounded-lg ${className}`}>
      {text.map((amenity, index) => {
        const Icon = amenity.icon;
        return (
          <div 
            key={index} 
            style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'}}
            className="amenity-item flex items-center space-x-2 bg-[#ffffff] px-3 py-1 rounded-md "
          >
            <Icon className="text-[#6B7280] text-[14px]" />
            <p className="text-sm text-[#2A2A33] text-[12px] font-normal tracking-wide leading-[15.9px]">
              {amenity.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}


function TextLarge({ propertyName, address, className }) {
  return (
    <div
      className={`[font-family:Poppins,Helvetica] font-bold text-black text-xl tracking-[0] leading-[19.1px] whitespace-nowrap ${className}`}
    >
      {propertyName}
      <span className="[font-family:Poppins,Helvetica] text-[14px] font-semibold tracking-wide leading-[19.2px]">
        {" "}
        {address}
      </span>
    </div>
  );
}

function ValuesBold({ val }) {
  return (
    <div className="[font-family:Poppins,Helvetica] font-semibold text-black text-sm tracking-[0] leading-[13.2px]">
      {val}
    </div>
  );
}

function Values({ val }) {
  return (
    <div className="[font-family:'Poppins',Helvetica] font-normal text-[#7a7a7a] text-[12px] tracking-[0] leading-[normal]">
      {val}
    </div>
  );
}
