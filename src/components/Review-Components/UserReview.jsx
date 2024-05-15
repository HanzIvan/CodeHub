import React from "react";
import arrow from "../../assets/UserReview/arrow.png";

const UserReview = ({ studname, desc, image, delay }) => {
  return (
    <div
      data-aos="fade-down"
      data-aos-delay={delay}
      className="relative text-left rounded-[20px] flex flex-col  bg-[#703B3B] p-3 shadow-xl"
    >
      <div className="text-center p-5">
        <div className="mx-auto w-32 h-32 rounded-full overflow-hidden  border-4 border-[#F4F6F6]">
          <img src={image} alt="" className=" object-cover w-full" />
        </div>
      </div>
      <div className="text-[#F4F6F6] mb-10 ">
        <h1 className="mt-3 font-semibold">{studname}</h1>
        <p className="mt-3">&quot;{desc}&quot;</p>
      </div>

      <div className="absolute right-0 bottom-0 mx-5 mb-2">
        <button className="underline text-[#F4F6F6] font-semibold flex items-center">
          <img src={arrow} alt="" className="w-5 mr-1" />
          <span>Read full story</span>
        </button>
      </div>
    </div>
  );
};

export default UserReview;
