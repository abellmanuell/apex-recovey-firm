import React from "react";
import bitcoin from "../assets/Bitcoin.png";
import ethereum from "../assets/ethereum.png";
import tether from "../assets/tether.png";

export default function Testimony() {
  return (
    <article className="bg-tw-blue-500">
      <section className="lg:w-80vw m-10 mx-auto w-[90vw] py-20">
        <div>
          <h1 className="text-center font-outfit text-lg font-bold uppercase tracking-widest text-tw-blue-300">
            Testimonials
          </h1>
          <p className="p-4 text-center font-outfit text-5xl font-black text-white">
            Read What Others <br />
            Have To Say
          </p>
        </div>

        <div className="mt-10 grid-cols-3 gap-4 md:grid">
          <div className="relative m-5 rounded-md bg-[#0E0E48] px-10 py-20 text-center text-white">
            <img
              src={bitcoin}
              className="absolute -top-2 right-2/4 block translate-x-2/4 lg:-top-10"
              alt="Bitcoin"
              loading="lazy"
            />
            <p className="py-8 text-lg">
              “Thank you for your hard work, I really appreciate that you have
              been able to get my BTC recovered”.
            </p>
            <span className="block text-center">
              Private Client - BTC from Unsupported Wallet
            </span>
          </div>

          <div className="relative m-5 rounded-md bg-[#0E0E48] px-10 py-20 text-center text-white">
            <img
              src={ethereum}
              className="absolute -top-2 right-2/4 block translate-x-2/4 lg:-top-10"
              alt="Ethereum"
              loading="lazy"
            />
            <p className="py-8 text-lg">
              “Please thank the team for me – you calmed me down and recovered
              my ETH after I thought it was lost forever.”
            </p>
            <span className="block text-center">
              CR - Ledger Nano SCR - Ledger Nano S
            </span>
          </div>

          <div className="relative m-5 rounded-md bg-[#0E0E48] px-10 py-20 text-center text-white">
            <img
              src={tether}
              className="absolute -top-2 right-2/4 block translate-x-2/4 lg:-top-10"
              alt="Tether"
              loading="lazy"
            />
            <p className="py-8 text-lg">
              “When I realised, I thought over £6000 of USDT was gone for good.
              We are so grateful to you for rescuing it”
            </p>
            <span className="block text-center">
              T & PM - USDT sent to a Wrong Address
            </span>
          </div>

          <div className="relative m-5 rounded-md bg-[#0E0E48] px-10 py-20 text-center text-white">
            <p className="py-8 text-lg">
              “All thanks to apex crypto recovery firm for their legit and
              efficient recovery experts which assisted me get my funds back..”
            </p>
            <span className="block text-center">Heitor - Pinto BRAZIL</span>
          </div>

          <div className="relative m-5 rounded-md bg-[#0E0E48] px-10 py-20 text-center text-white">
            <p className="py-8 text-lg">
              “I was very confused when I was scammed, but right now I am now a
              happy man again, kudos to apex recovery firm.”
            </p>
            <span className="block text-center">Aayarn Pillai - INDIA</span>
          </div>

          <div className="relative m-5 rounded-md bg-[#0E0E48] px-10 py-20 text-center text-white">
            <p className="py-8 text-lg">
              “Absolutely this is the best recovery firm to have recovered
              stolen cryptos.”
            </p>
            <span className="block text-center">
              Craig Payne - UNITED STATES
            </span>
          </div>

          <div className="relative m-5 rounded-md bg-[#0E0E48] px-10 py-20 text-center text-white">
            <p className="py-8 text-lg">
              “Happy once again, got my coins back from the fake investment
              platform that scammed me.”
            </p>
            <span className="block text-center">Ann Ellis - UNITED STATES</span>
          </div>

          <div className="relative m-5 rounded-md bg-[#0E0E48] px-10 py-20 text-center text-white">
            <p className="py-8 text-lg">
              “Wow , Its glad I got my money recovered from scammers, I would
              suggest victims of crypto scam to visit apex recovery firm.
              Thanks. Happy recovery.”
            </p>
            <span className="block text-center">Lily Harris - AUSTRALIA</span>
          </div>

          <div className="relative m-5 rounded-md bg-[#0E0E48] px-10 py-20 text-center text-white">
            <p className="py-8 text-lg">
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
