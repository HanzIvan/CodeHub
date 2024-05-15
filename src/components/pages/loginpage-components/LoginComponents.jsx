import React from "react";

const LoginComponents = ({ name, title, desc }) => {
  return (
    <div>
      <label for={name} className="block mb-2">
        {title}
      </label>
      <input
        type="text"
        id={name}
        className="w-full p-2 focus:outline-none focus:ring-0 focus:border-gray-600 border-black border-[1.5px] rounded-lg "
        placeholder={desc}
      />
    </div>
  );
};

export default LoginComponents;
