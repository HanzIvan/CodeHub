import React from "react";

const Benefits = ({ title, desc, image }) => {
  return (
    <div>
      <img src={image} alt="" className="w-[80px] mx-auto block" />
      <h1 className="mt-3 font-semibold">{title}</h1>
      <p className="mt-3">{desc}</p>
    </div>
  );
};

export default Benefits;
