import React from "react";

export default function Footer() {
  return (
    <div className="justify-between space-y-4 bg-tw-blue-500 p-10 text-white md:flex md:space-x-4 md:space-y-0">
      <h1 className="font-outfit text-2xl font-bold">APEX</h1>
      <div>
        <h3 className="font-bold">Apex</h3>
        <ul>
          <a href="/">
            <li>Home</li>
          </a>
          <a href="/about">
            <li>About Us</li>
          </a>
          <a href="/">
            <li>Services</li>
          </a>
          <a href="#">
            <li>Scams</li>
          </a>
        </ul>
      </div>

      <div>
        <h3 className="font-bold">Market</h3>
        <ul>
          <a href="#">
            <li>BITCOIN</li>
          </a>
          <a href="#">
            <li>ETHEREUM</li>
          </a>
          <a href="#">
            <li>USDT</li>
          </a>
        </ul>
      </div>

      <div>
        <h3 className="font-bold">Contact</h3>
        <ul>
          <a href="https://wa.me/+19256957556/">
            <li>Whatsapp</li>
          </a>
          <a href="https://www.instagram.com/apexcryptorecovery/">
            <li>Instagram</li>
          </a>
          <a href="https://www.twitter.com/Apex77568696945/">
            <li>Twitter</li>
          </a>
          <a href="https://t.me/Apexcryptorecoveryfirm/">
            <li>Telegram</li>
          </a>
          <p>
            <b>Email:</b> support@apexrecoveryfirm.co
          </p>
          <p>
            <b>Telephone:</b>
            +1(925) 695-7556
          </p>
        </ul>
      </div>

      <div>
        <h2 className="font-bold">Join Out Newsletter</h2>

        <div className="my-2 inline-block space-x-2 rounded-full bg-tw-blue-600 px-2 py-1">
          <input
            type="text"
            name=""
            id=""
            className="bg-transparent px-2 py-2 text-black outline-none"
            placeholder="Enter your Email Adderss"
          />
          <button className="rounded-full bg-tw-blue-400 px-4 py-2">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
