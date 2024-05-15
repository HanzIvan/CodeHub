import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-[#6D2932] p-6 md:p-12">
      <div className="relative p-1 md:mx-10 md:p-5tg">
        <div className="md:grid md:grid-cols-2">
          <div className=" grid md:grid-cols-2 gap-5 lg:w-96">
            <div>
              <ul className="cursor-pointer text-[#F4F6F6] text-base">
                <li>Careers</li>
                <li>Blog</li>
                <li>Help and Support</li>
                <li>About Us</li>
                <li>CodeHub Premium</li>
              </ul>
            </div>
            <div>
              <ul className="cursor-pointer text-[#F4F6F6] text-base">
                <li>Terms</li>
                <li>Privacy Policy</li>
                <li>Cookie Settings</li>
                <li>Accessibility</li>
                <li>Help</li>
              </ul>
            </div>
          </div>

          <div className="flex md:flex md:justify-end md:items-start py-10 md:p-5 ">
            <h1 className="font-bold text-[#F4F6F6] text-3xl">CodeHub</h1>
          </div>
        </div>
        <div className="md:mt-12 flex flex-col-reverse md:flex md:justify-between md:flex-row-reverse">
          <div className="mt-5 grid grid-cols-4 gap-5 items-center">
            <a href="https://facebook.com" className="text-[#F4F6F6]">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://twitter.com" className="text-[#F4F6F6]">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://linkedin.com" className="text-[#F4F6F6]">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://instagram.com" className="text-[#F4F6F6]">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
          <div className="mt-5 text-[#F4F6F6] ">
            <h1>&#169; 2024 CodeHub. All rights reserved.</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
