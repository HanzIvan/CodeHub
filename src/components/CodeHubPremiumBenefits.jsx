import React from "react";
import content from "../assets/Benefits-Icons/content.png";
import mentor from "../assets/Benefits-Icons/mentor.png";
import support from "../assets/Benefits-Icons/support.png";
import features from "../assets/Benefits-Icons/features.png";
import certificate from "../assets/Benefits-Icons/certificate.png";
import network from "../assets/Benefits-Icons/network.png";
import career from "../assets/Benefits-Icons/career.png";
import pricing from "../assets/Benefits-Icons/pricing.png";
import Benefits from "./Benefits-Components/Benefits";

const CodeHubPremiumBenefits = () => {
  return (
    <div name="Premium Page" className="bg-[#EEEBDD] py-20">
      <div name="Premium Content" className="mx-5 md:mx-20 ">
        <div className="text-center mb-20">
          <h1 className="font-bold text-3xl">
            Discover the Exclusive Benefits of CodeHub Premium
          </h1>
        </div>
        <div className="">
          <div
            name="Benefits"
            className="grid grid-cols-2 gap-5 md:grid md:grid-cols-4 :gap-16 text-center"
          >
            <Benefits
              image={content}
              title={"Access to Exclusive Content"}
              desc={
                "Premium subscribers gain access to exclusive courses and learning materials not available to free users."
              }
            />
            <Benefits
              image={mentor}
              title={"Personalized Mentorship"}
              desc={
                "Access exclusive personalized mentorship sessions with industry experts as a Premium member."
              }
            />
            <Benefits
              image={support}
              title={"Priority Support"}
              desc={
                "Enjoy priority support as a Premium subscriber, ensuring timely assistance for all inquiries."
              }
            />
            <Benefits
              image={features}
              title={"Advanced Features"}
              desc={
                "Premium unlocks coding challenges, live webinars, and more for an enriched learning experience."
              }
            />
            <Benefits
              image={certificate}
              title={"Certificate of Completion"}
              desc={
                "Earn certificates of completion for each course with Premium subscription."
              }
            />
            <Benefits
              image={network}
              title={"Networking Opportunities"}
              desc={
                "Access exclusive networking events, forums, and communities with Premium membership."
              }
            />
            <Benefits
              image={career}
              title={"Career Development"}
              desc={
                "Get career development resources like resume reviews and job search help as a Premium member."
              }
            />
            <Benefits
              image={pricing}
              title={"Flexible Pricing"}
              desc={
                "CodeHub Premium offers flexible pricing and easy cancellation for all learners."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeHubPremiumBenefits;
