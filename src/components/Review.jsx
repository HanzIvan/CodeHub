import React from "react";
import UserReview from "./Review-Components/UserReview";
import walter from "../assets/UserReview/walter.jpg";
import jesse from "../assets/UserReview/jesse.jpg";
import jane from "../assets/UserReview/jane.jpg";

const Review = () => {
  return (
    <div name="review" className="py-20 bg-[#EEEBDD]">
      <div className="mb-20">
        <h1 className="text-center text-3xl font-bold">Community Reviews</h1>
      </div>
      <div
        name="review-card"
        className="grid grid-cols-1 mx-10 md:grid-cols-2 lg:grid-cols-3 lg:mx-64 gap-5"
      >
        <UserReview
          image={walter}
          studname={"Walter White"}
          desc={
            "Taking the CodeHub Online course was a game-changer for me! The comprehensive curriculum and hands-on projects helped me grasp complex concepts with ease. I'm now confident in my coding abilities and ready to tackle real-world projects. Highly recommend!"
          }
          delay={0}
        />

        <UserReview
          image={jesse}
          studname={"Jesse Pinkman"}
          desc={
            "As a beginner in coding, I was intimidated to start, but CodeHub Online made learning enjoyable and accessible. The interactive lessons and supportive community helped me overcome challenges and grow my skills. Thanks to this course, I'm excited to pursue a career in tech!"
          }
          delay={200}
        />

        <UserReview
          image={jane}
          studname={"Jane Margolis"}
          desc={
            "I've tried other online coding courses before, but none compare to CodeHub. The instructors' expertise and clear explanations made even the most challenging topics understandable. Plus, the flexibility of online learning allowed me to study at my own pace. Thank you, CodeHub, for helping me level up my coding skills!"
          }
          delay={400}
        />
      </div>
    </div>
  );
};

export default Review;
