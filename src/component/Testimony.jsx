import React from "react";
import bitcoin from "../assets/Bitcoin.png";
import ethereum from "../assets/ethereum.png";
import tether from "../assets/tether.png";

export default function Testimony() {
  return (
    <article className="bg-tw-blue-500">
      <section className="w-[90vw] mx-auto lg:w-80vw py-20 m-10">
        <div>
          <h1 className="uppercase text-tw-blue-300 font-outfit font-bold text-center text-lg tracking-widest">
            Testimonials
          </h1>
          <p className="font-outfit font-black text-5xl text-center text-white p-4">
            Read What Others <br />
            Have To Say
          </p>
        </div>

        <div className="md:grid grid-cols-3 mt-10 gap-4">
          <div className="bg-[#0E0E48] px-10 py-20 rounded-md relative text-white text-center m-5">
            <img
              src={bitcoin}
              className="block absolute -top-2 lg:-top-10 right-2/4 translate-x-2/4"
              alt="Bitcoin"
              loading="lazy"
            />
            <p className="text-lg py-8">
              “Thank you for your hard work, I really appreciate that you have
              been able to get my BTC recovered”.
            </p>
            <span className="block text-center">
              Private Client - BTC from Unsupported Wallet
            </span>
          </div>

          <div className="bg-[#0E0E48] px-10 py-20 rounded-md relative text-white text-center m-5">
            <img
              src={ethereum}
              className="block absolute -top-2 lg:-top-10 right-2/4 translate-x-2/4"
              alt="Ethereum"
              loading="lazy"
            />
            <p className="text-lg py-8">
              “Please thank the team for me – you calmed me down and recovered
              my ETH after I thought it was lost forever.”
            </p>
            <span className="block text-center">
              CR - Ledger Nano SCR - Ledger Nano S
            </span>
          </div>

          <div className="bg-[#0E0E48] px-10 py-20 rounded-md relative text-white text-center m-5">
            <img
              src={tether}
              className="block absolute -top-2 lg:-top-10 right-2/4 translate-x-2/4"
              alt="Tether"
              loading="lazy"
            />
            <p className="text-lg py-8">
              “When I realised, I thought over £6000 of USDT was gone for good.
              We are so grateful to you for rescuing it”
            </p>
            <span className="block text-center">
              T & PM - USDT sent to a Wrong Address
            </span>
          </div>

          <div className="bg-[#0E0E48] px-10 py-20 rounded-md relative text-white text-center m-5">
            <p className="text-lg py-8">
              “All thanks to apex crypto recovery firm for their legit and
              efficient recovery experts which assisted me get my funds back..”
            </p>
            <span className="block text-center">Heitor - Pinto BRAZIL</span>
          </div>

          <div className="bg-[#0E0E48] px-10 py-20 rounded-md relative text-white text-center m-5">
            <p className="text-lg py-8">
              “I was very confused when I was scammed, but right now I am now a
              happy man again, kudos to apex crypto recovery firm.”
            </p>
            <span className="block text-center">Aayarn Pillai - INDIA</span>
          </div>

          <div className="bg-[#0E0E48] px-10 py-20 rounded-md relative text-white text-center m-5">
            <p className="text-lg py-8">
              “Absolutely this is the best recovery firm to have recovered
              stolen cryptos.”
            </p>
            <span className="block text-center">
              Craig Payne - UNITED STATES
            </span>
          </div>

          <div className="bg-[#0E0E48] px-10 py-20 rounded-md relative text-white text-center m-5">
            <p className="text-lg py-8">
              “Happy once again, got my coins back from the fake investment
              platform that scammed me.”
            </p>
            <span className="block text-center">Ann Ellis - UNITED STATES</span>
          </div>

          <div className="bg-[#0E0E48] px-10 py-20 rounded-md relative text-white text-center m-5">
            <p className="text-lg py-8">
              “Wow , Its glad I got my money recovered from scammers, I would
              suggest victims of crypto scam to visit apex crypto recovery firm.
              Thanks. Happy recovery.”
            </p>
            <span className="block text-center">Lily Harris - AUSTRALIA</span>
          </div>

          <div className="bg-[#0E0E48] px-10 py-20 rounded-md relative text-white text-center m-5">
            <p className="text-lg py-8">
              “I never thought of getting my Ethereum back, this is the best and
              most reliable recovery firm.”
            </p>
            <span className="block text-center">John Hague - NEW ZEALAND</span>
          </div>
        </div>
      </section>
    </article>
  );
}
