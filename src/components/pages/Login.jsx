import React from "react";
import loginpic from "../../assets/LoginPage-Pic/loginpage.jpg";
import loginpic2 from "../../assets/LoginPage-Pic/login.png";
import LoginComponents from "./loginpage-components/LoginComponents";

// icons
import {
  faFacebook,
  faGoogle,
  faApple,
} from "@fortawesome/free-brands-svg-icons";
import LoginUsingSocMed from "./loginpage-components/LoginUsingSocMed";

const Login = () => {
  return (
    <div
      name="Login Page"
      className="bg-[#EEEBDD] relative flex justify-center items-center h-auto"
    >
      <div
        className="grid justify-center mx-5 my-10 grid-cols-1 
        md:m-10
       
        lg:grid-cols-2 lg:mx-64 
        h-full shadow-xl  rounded-[40px] p-5 bg-[#F4F6F6] gap-2"
      >
        <div className="flex items-center rounded-lg">
          <img
            src={loginpic2}
            alt=""
            className="object-cover h-full w-full rounded-[40px] "
          />
        </div>

        {/* Login */}

        <div className=" flex justify-center items-center py-5 bg-[#F4F6F6]">
          {/* login content */}
          <div className="w-full mx-32 flex flex-col justify-start items-center">
            <div className="w-full text-center p-5">
              <h1 className="font-bold tracking-wide text-[#222831] text-2xl ">
                Create an Account
              </h1>
            </div>

            {/* end of heading */}

            <div className="w-full flex flex-col gap-3">
              <LoginComponents
                id={"username"}
                title={"Username"}
                desc={"Enter a username"}
              />
              <LoginComponents
                id={"email"}
                title={"Email"}
                desc={"Enter an email"}
              />
              <LoginComponents
                id={"password"}
                title={"Password"}
                desc={"Enter your password"}
              />
            </div>
            <div className="mt-2 w-full">
              <div className="flex">
                <input type="checkbox" />
                <label className="ml-1 text-sm"> Remember Me?</label>
              </div>
            </div>
            <div className="w-full text-center mt-5 p-3 bg-[#6D2932] rounded-lg">
              <button className="text-[#F4F6F6]">Create Account</button>
            </div>

            {/* or login using "" */}
            <div className="w-full">
              <div className="my-3 text-center">
                <h1>or login using</h1>
              </div>
              <div className="w-full flex flex-col">
                <LoginUsingSocMed
                  iconName={faFacebook}
                  desc={"Continue with Facebook"}
                />
                <LoginUsingSocMed
                  iconName={faGoogle}
                  desc={"Continue with Google"}
                />
                <LoginUsingSocMed
                  iconName={faApple}
                  desc={"Continue with Apple"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
