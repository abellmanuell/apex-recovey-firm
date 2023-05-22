import React from "react";
import writerPen from "../assets/writerpen.png";
import book from "../assets/book.png";
import crypto from "../assets/crypto.png";

export default function Education() {
  return (
    <article id="" className="w-[90vw] mx-auto lg:w-80vw">
      <section className="pt-16">
        <h2 className="uppercase font-bold font-outfit py-4 text-xl text-tw-blue-500 text-center">
          How Does it Works?
        </h2>

        <div className="grid md:grid-cols-3 gap-10 ">
          <div className="bg-tw-blue-500 text-white rounded-md flex flex-col justify-center items-center p-20 text-center">
            <div className="p-4">
              <img src={writerPen} alt="Pen Icon" />
            </div>
            <p className="text-xl">
              Victims of crypto crimes submit details of their case
            </p>
          </div>

          <div className="bg-tw-blue-500 text-white rounded-md flex flex-col justify-center items-center p-20 text-center">
            <div className="p-4">
              <img src={book} alt="Book Icon" />
            </div>
            <p className="text-xl">
              We flag the reported cases to alert a network of blockchain
              services in order to prevent them receiving the defrauded crypto
            </p>
          </div>

          <div className="bg-tw-blue-500 text-white rounded-md flex flex-col justify-center items-center p-20 text-center">
            <div className="p-4">
              <img src={crypto} alt="Crypto Icon" />
            </div>
            <p className="text-xl">
              Claims will be visible to our investigation partners that may
              contact the victim to assist in the recovery of the stolen assets
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
