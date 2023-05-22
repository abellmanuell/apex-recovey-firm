import React from "react";
import reclaim_crypto_wallet from "../../assets/reclaim_crypto_wallet.png";
import techcrunch from "../../assets/techcrunch.png";
import fastcompany from "../../assets/fastcompany.png";
import mif from "../../assets/mif.png";
import forbes from "../../assets/forbes.png";

export default function HomeBody() {
  return (
    <>
      <div className="w-[90vw] mx-auto lg:w-80vw flex flex-col pt-16 mb-2 text-center md:text-left">
        <section className="flex flex-col md:flex-row w-full">
          <div className="py-5 md:max-w-[50%]">
            <div>
              <h1 className="font-outfit font-extrabold text-[2.8125rem] lg:text-[3.4375rem] leading-none lg:leading-tight text-tw-blue-500">
                Bitcoin And <br /> Cryptocurrency <br /> Assets Recovery <br />
                Services
              </h1>
              <p className="text-tw-sky-400 text-xl font-roboto my-5">
                Trust the most established brand in the asset recovery ecosystem
                to recover your wallet today.
              </p>
            </div>
            <div className="space-x-3 lg:space-x-10 uppercase font-outfit font-bold">
              <a
                className="inline-block px-4 py-3 rounded-full bg-tw-blue-400 text-white"
                href="#contact"
              >
                Submit Claim
              </a>

              <a
                className="inline-block px-4 py-3 rounded-full text-white bg-[#C4C048] border-tw-blue-400"
                href="#contact"
              >
                Recovery Now
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center md:w-[50%] py-5">
            <img
              src={reclaim_crypto_wallet}
              className="md:w-[25rem]"
              alt="Crptocurreny Wallet Hero"
              loading="lazy"
            />
          </div>
        </section>
        <section className="pt-2">
          <h5
            className="text-left font-outfit
          uppercase text-tw-blue-500 font-bold"
          >
            Trust By
          </h5>
          <div className="bg-tw-sky-400 rounded-md p-2 grid grid-cols-2 md:grid-cols-4 gap-4 place-items-center">
            <div>
              <img
                src={techcrunch}
                width="200"
                alt="TechCrunch"
                loading="lazy"
              />
            </div>
            <div>
              <img
                src={fastcompany}
                width="200"
                alt="Fast Company"
                loading="lazy"
              />
            </div>
            <div>
              <img src={mif} width="100" alt="Mif" loading="lazy" />
            </div>
            <div>
              <img src={forbes} width="100" alt="Forbes" loading="lazy" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
