import CodeHubPremiumBenefits from "./components/CodeHubPremiumBenefits";
import Courses from "./components/Courses";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Review from "./components/Review";
import Footer from "./components/Footer";
import React, { useEffect } from "react";

//AOS Animation
import aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      <Navbar />
      <Home />
      <CodeHubPremiumBenefits />
      <Courses />
      <Review />
      <Footer />
    </div>
  );
}

export default App;
