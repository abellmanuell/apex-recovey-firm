import React from "react";

export default function Service() {
  return (
    <article id="services" className="w-[90vw] mx-auto lg:w-80vw">
      <section className="pt-16">
        <h2 className="uppercase font-bold font-outfit py-4 text-xl text-tw-blue-500 text-center">
          Our Cryptocurrency Recovery Services
        </h2>

        <div className="grid md:grid-cols-4 gap-5 md:gap-10">
          <div className="border-2 border-tw-blue-500 text-tw-blue-500 rounded-md flex flex-col justify-center items-center p-10 text-center">
            <h1 className="text-xl font-bold font-outfit">
              Cryptocurrency Wallet Recovery Services
            </h1>
            <p className="text-xl">
              Recovering inaccessible cryptocurrency wallets and lost passwords
            </p>
          </div>

          <div className="border-2 border-tw-blue-500 text-tw-blue-500 rounded-md flex flex-col justify-center items-center p-10 text-center">
            <h1 className="text-xl font-bold font-outfit">
              Seed Words and Passphrase Recovery
            </h1>
            <p className="text-xl">
              Restoration of lost seed words and reconstruction of passphrases
            </p>
          </div>

          <div className="border-2 border-tw-blue-500 text-tw-blue-500 rounded-md flex flex-col justify-center items-center p-10 text-center">
            <h1 className="text-xl font-bold font-outfit">
              Recover Funds Sent to the Wrong Address
            </h1>
            <p className="text-xl">
              eg. Tether sent to a TRC rather than ERC address or BCH sent to a
              BTC address etc
            </p>
          </div>

          <div className="border-2 border-tw-blue-500 text-tw-blue-500 rounded-md flex flex-col justify-center items-center p-10 text-center">
            <h1 className="text-xl font-bold font-outfit">
              Old Hard Drives, Phones & Flash Memory
            </h1>
            <p className="text-xl">
              Inaccessible hard drives, old Android and iOS phones, memory cards
              and sticks
            </p>
          </div>
          <div></div>
          <div className="border-2 border-tw-blue-500 text-tw-blue-500 rounded-md flex flex-col justify-center items-center p-10 text-center">
            <h1 className="text-xl font-bold font-outfit">
              Help, Advice and Cryptocurrency Consultancy
            </h1>
            <p className="text-xl">
              Help and advice with wallets, transactions, exchanges, buying &
              selling etc
            </p>
          </div>

          <div className="border-2 border-tw-blue-500 text-tw-blue-500 rounded-md flex flex-col justify-center items-center p-10 text-center">
            <h1 className="text-xl font-bold font-outfit">
              Inaccessible Hardware Wallets (Trezor, Nano)
            </h1>
            <p className="text-xl">
              Dead and bricked devices, broken buttons, smashed screens
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
