import React from "react";
import CourseCategory from "./Courses-Components/CourseCategory";
import progPic from "../assets/Courses/Programming.jpg";
import webdev from "../assets/Courses/webdev.jpg";
import mobiledev from "../assets/Courses/mobiledev.jpg";
import machinelearning from "../assets/Courses/machine-learning.jpg";
import cloud from "../assets/Courses/cloud.jpg";
import cybersec from "../assets/Courses/cybersec.jpg";

const Courses = () => {
  return (
    <div name="course" className="py-20 bg-[#F4F6F6]">
      <div className="md:mx-24 mx-5">
        <div className="text-center mb-20">
          <h1 className="font-bold text-3xl">Explore Our Courses</h1>
        </div>
        <div name="courses">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-5 ">
            <CourseCategory
              image={progPic}
              title={"Introduction to Programming"}
              desc={""}
              delay={0}
            />
            <CourseCategory
              image={webdev}
              title={"Web Development"}
              desc={""}
              delay={100}
            />
            <CourseCategory
              image={mobiledev}
              title={"Mobile App Development"}
              desc={""}
              delay={200}
            />
            <CourseCategory
              image={machinelearning}
              title={"Data Science and Machine Learning"}
              desc={""}
              delay={300}
            />
            <CourseCategory
              image={cloud}
              title={"DevOps and Cloud Computing"}
              desc={""}
              delay={400}
            />
            <CourseCategory
              image={cybersec}
              title={"Cybersecurity"}
              desc={""}
              delay={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
