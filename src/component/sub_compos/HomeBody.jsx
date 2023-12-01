import React from "react";
import reclaim_crypto_wallet from "../../assets/reclaim_crypto_wallet.png";
import techcrunch from "../../assets/techcrunch.png";
import fastcompany from "../../assets/fastcompany.png";
import mif from "../../assets/mif.png";
import forbes from "../../assets/forbes.png";

export default function HomeBody() {
  return (
    <>
      <div className="lg:w-80vw mx-auto mb-2 flex w-[90vw] flex-col pt-16 text-center md:text-left">
        <section className="flex w-full flex-col md:flex-row">
          <div className="py-5 md:max-w-[50%]">
            <div>
              <h1 className="font-outfit text-[2.8125rem] font-extrabold leading-none text-tw-blue-500 lg:text-[3.4375rem] lg:leading-tight">
                Bitcoin And <br /> Cryptocurrency <br /> Assets Recovery <br />
                Services
              </h1>
              <p className="my-5 font-roboto text-xl text-neutral-400 ">
                Trust the most established brand in the asset recovery ecosystem
                to recover your wallet today.
              </p>
            </div>
            <div className="space-x-3 font-outfit font-bold uppercase lg:space-x-10 ">
              <a
                className="inline-block rounded-full bg-tw-blue-400 px-4 py-3 text-white"
                href="#contact"
              >
                Submit Claim
              </a>

              <a
                className="inline-block rounded-full border-tw-blue-400  bg-orange-400 px-4 py-3 text-white hover:bg-orange-500"
                href="#contact"
              >
                Recovery Now
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center py-5 md:w-[50%]">
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
          font-bold uppercase text-tw-blue-500"
          >
            Trust By
          </h5>
          <div className="grid grid-cols-2 place-items-center gap-4 rounded-md bg-neutral-800 p-2 md:grid-cols-4">
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
