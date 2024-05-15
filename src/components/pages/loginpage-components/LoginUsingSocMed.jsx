import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoginUsingSocMed = ({ iconName, desc }) => {
  return (
    <div className="flex flex-row mb-3">
      <button className="w-full p-3 flex flex-row justify-evenly items-center border-[1px] border-black rounded-md">
        <FontAwesomeIcon icon={iconName} size="1x" className="" />

        <h1 className="ml-3 md:ml-0 w-44 text-left text-sm font-semibold">
          {desc}
        </h1>
      </button>
    </div>
  );
};

export default LoginUsingSocMed;
