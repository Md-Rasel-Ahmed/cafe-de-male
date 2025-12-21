import React from "react";
import HomeBanner from "./HomeBanner";
import About from "./About";
import RestaurentMenu from "./RestaurentMenu";
import ChooseUs from "./ChooseUs";

export default function Home() {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <About></About>
      <RestaurentMenu></RestaurentMenu>
      <ChooseUs></ChooseUs>
    </div>
  );
}
