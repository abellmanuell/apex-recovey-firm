import React from "react";
import Heading from "./component/sub_compos/home/Heading";
import Footer from "./component/Footer";

export default function AboutUs() {
  return (
    <article>
      <Heading />
      <main id="hero-container">
        <div className="lg:w-80vw mx-auto w-[90vw] pt-20 text-2xl ">
          <h1 className="font-outfit text-lg font-bold uppercase">About us</h1>

          <section>
            <h2 className="py-3 font-outfit text-3xl font-bold">
              Making Sure Your Crypto Is Always Yours
            </h2>
            <p>
              At Crypto Asset Recovery, we understand the importance of keeping
              your cryptocurrency safe and secure. That’s why we’re dedicated to
              recovering the passwords to your forgotten wallets, ensuring that
              your digital assets remain in your possession.
            </p>
            <br />
            <p>
              Picture this: you’ve got a digital fortune locked away in a crypto
              wallet, but the password is nowhere to be found. It’s like a
              treasure chest with a missing key – frustrating, right? But don’t
              lose hope just yet. Our team of experts use cutting-edge,
              air-gapped servers to crack the code and give you back control of
              your assets.
            </p>
            <br />
            <p>
              Don’t let a forgotten password keep you from your digital riches.
              Trust us to be your crypto sheriffs, on a mission to recover your
              lost assets.
            </p>
            <br />
          </section>
          <section>
            <div>
              <h2 className="py-3 font-outfit text-3xl font-bold">
                More About Our Services
              </h2>
              <p>
                Passphrases and Seed Word Recovery / Lost passwords <br /> We
                can recover lost passphrases, missing seed words and forgotten
                passwords. The chances of us successfully getting access to your
                wallet increase greatly if you can remember any of the details
                about the forgotten or lost passphrase / seed words.
              </p>
              <br />
              <p>
                Deleted Wallet Recovery <br />
                Recovery of deleted wallets from Apps, phones and hard drives.
                Restoration of access to missing wallets and the recovery of
                wallet contents.
              </p>

              <br />
              <p>
                Browser Extensions – Lost Wallets <br />
                Seed words extraction from the vault data of lost and
                inaccessible wallets accessed via Chrome / Brave / Firefox
                Browser Extensions, including Metamask, Binance Chain Wallet and
                Ronin Wallets.
              </p>

              <br />
              <p>
                Old and Unsupported Wallets – Crypto Recovery <br />
                Some software wallets were popular in the early days of Bitcoin
                but have since drifted into obscurity and are no longer
                supported. One of the first was MultiBit Classic wallet that
                relied on a password only, this was replaced by MultiBit HD
                which also introduced a seed phrase. Many early adopters of
                Bitcoin used wallets such as these on their computer hard
                drives.
              </p>

              <br />
              <p>
                Help, Advice and Cryptocurrency Consultancy <br />
                It’s easy to quickly get out of your depth with cryptocurrency,
                especially if you wallet is worth £thousands… Maybe you’ve
                decided it’s time to cash out some of your wallet but you’re
                just not confident enough to be sure you know what you’re doing.
                Ask us.
              </p>

              <br />
              <p>
                Lost and Missing Transactions – Recovery of Missing Crypto
                <br />
                Lost and missing wallet transactions often involve DeFi Apps and
                are sometimes related to glitches or cross chain / App
                incompatibility. It’s important that you record as much as you
                can about the missing transaction and then contact us.
              </p>

              <br />
              <p>
                Transactions Sent to the Wrong Address – Recovery of Funds
                <br />
                Particularly common in DeFi transactions using wallets like
                Metamask and Trust Wallet, this is easily done and can sometimes
                be reversed depending on the type of address used and
                blockchains involved. Make a record of exactly what you’ve done
                and then contact us.
              </p>

              <br />
              <p>
                Pending / Unconfirmed / Stuck Transactions
                <br />
                This can happen during extended periods of high blockchain
                activity or insufficient gas / mining fees to pay for the
                transaction. Another reason for pending, delayed or stuck
                transactions is that you’ve specified an incorrect address or
                have tried to send / receive from a different blockchain.
              </p>
              <br />
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </article>
  );
}
