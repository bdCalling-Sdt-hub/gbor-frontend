import React from "react";
import Banner from "../../Components/Home/Banner/Banner";
import Creators from "../../Components/Home/Creators/Creators";
import WhoWeAre from "../../Components/Home/WhoWeAre/WhoWeAre";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <WhoWeAre />
      <Creators />
      <Footer />
    </div>
  );
};

export default Home;
