import React from "react";
import Heading from "./sub_compos/home/Heading";
import HomeBody from "./sub_compos/HomeBody";

export default function Home() {
  return (
    <article id="home" className="h-full">
      <header className="z-10 fixed w-full border-b-4 border-tw-blue-300 bg-tw-blue-500 text-white">
        <Heading />
      </header>
      <main id="hero-container">
        <HomeBody />
      </main>
    </article>
  );
}
