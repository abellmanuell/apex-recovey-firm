import React from "react";
import Heading from "./sub_compos/home/Heading";
import HomeBody from "./sub_compos/HomeBody";

export default function Home() {
  return (
    <article id="home" className="h-full">
      <Heading />
      <main id="hero-container">
        <HomeBody />
      </main>
    </article>
  );
}
