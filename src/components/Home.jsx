import React from "react";
import img3 from "../assets/img3.jpg";
import { Link as RouterLink } from "react-router-dom";

const Home = () => {
  return (
    <div name="Hero Page" className="h-auto bg-[#F4F6F6] ">
      <div
        name="Hero Content"
        className="w-auto flex flex-col mx-5 lg:flex lg:flex-row items-center gap-2 lg:mx-64"
      >
        <div className="py-10 h-full flex flex-col gap-10 flex-1 ">
          <div className="">
            <h1 className="font-bold text-[#222831] text-3xl">
              CodeHub
              <span className="ml-2 px-2 py-1 text-[#F4F6F6] bg-[#561C24]">
                Premium
              </span>
            </h1>
          </div>
          <div>
            <p className="font-semibold text-2xl text-left text-[#222831]">
              Unlock the full potential of your coding journey with CodeHub
              Premium. Gain exclusive access to advanced courses, personalized
              mentorship, and priority support, ensuring your path to mastery is
              both guided and supported every step of the way.
            </p>
          </div>

          <div>
            <p className="text-base font-semibold text-[#222831]">
              Subscription: $30/month, Cancel Anytime
            </p>
            <div className="flex flex-row gap-2 mt-2">
              <RouterLink to="/login">
                <button className="p-3 text-[#F4F6F6] bg-[#6D2932] rounded-lg hover:bg-[#60252D]">
                  Subscribe Now
                </button>
              </RouterLink>
              <RouterLink to="/login">
                <button className="p-3 text-[#F4F6F6] bg-[#6D2932] rounded-lg hover:bg-[#60252D]">
                  Start 7-day Free Trial
                </button>
              </RouterLink>
            </div>
          </div>
        </div>
        <div className=" flex-1">
          <img src={img3} alt="" className=" w-auto h-auto max-h-[500px]" />
        </div>
      </div>
    </div>
  );
};

export default Home;
