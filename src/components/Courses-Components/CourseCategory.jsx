import React from "react";
import { Link as RouterLink } from "react-router-dom";

const CourseCategory = ({ title, desc, image, delay }) => {
  return (
    <div
      data-aos="fade-left"
      data-aos-delay={delay}
      data-aos-offset="500"
      data-aos-duration="500"
      name="cards"
      className={
        "relative rounded-[20px] shadow-md shadow-black shadow-opacity-10 bg-[white] group flex flex-col"
      }
    >
      <div
        className="
       relative overflow-hidden"
      >
        <img
          src={image}
          alt=""
          className="rounded-t-[20px] w-[100%] mx-auto "
        />
        <RouterLink to="/login">
          <button className="absolute bottom-0 px-8 py-2 rounded flex items-center justify-center text-white text-lg md:text-xl font-bold bg-[#6D2932] -translate-x-full transition-transform duration-500 group-hover:-translate-x-0 opacity-0 group-hover:opacity-100">
            Enroll Now
          </button>
        </RouterLink>
      </div>
      <div className="">
        <h1 className="text-center text-lg px-2 mt-3 font-semibold">{title}</h1>
        <p className="mt-3">{desc}</p>
      </div>
    </div>
  );
};

export default CourseCategory;
