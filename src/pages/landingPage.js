import * as React from "react";
import MainLanding from "../components/landingPage/mainLanding";
import LandingTransition from "../components/landingPage/transition";
import LandingContent from "../components/landingPage/content";
import Footer from "../components/landingPage/footer";

const LandingPage = () => {
  return (
    <div>
      <MainLanding />
      <LandingTransition color="rgba(99, 102, 241, 1)" background="bg-trueGray-900"/>
      <LandingContent />
      <LandingTransition color="rgba(23, 23, 23, 1)" background="bg-indigo-700" />
      <Footer />
    </div>
  );
};

export default LandingPage;