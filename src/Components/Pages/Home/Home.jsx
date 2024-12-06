import React from "react";
import Slide from "./Slide";
import Service from "./Service";
import LastProduct from "./LastProduct";
import Banner from "./Banner";
import BestSelling from "./BestSelling";
import DealOfTheDay from "./DealOfTheDay";
import ByCate from "./ByCate";

const Home = () => {
  return (
    <>
      <Slide />
      <Service />
      <LastProduct />
      <Banner />
      <BestSelling />
      <DealOfTheDay />
      <ByCate />
    </>
  );
};

export default Home;
