import React from "react";

export default function Footer() {
  return (
    <div className="md:flex justify-between text-lg text-white space-y-4 md:space-x-4 md:space-y-0 bg-tw-blue-500 p-10">
      <h1 className="font-bold font-outfit text-2xl">APEX</h1>
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
          <a href="https://wa.me/+16157849334/">
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
            <b>Email:</b> support@apexcryptorecovery.com
          </p>
          <p>
            <b>Telephone:</b>
            +16157849334
          </p>
        </ul>
      </div>

      <div>
        <h2 className="font-bold">Join Out Newsletter</h2>

        <div className="my-2 bg-tw-blue-600 inline-block py-1 px-2 space-x-2 rounded-full">
          <input
            type="text"
            name=""
            id=""
            className="outline-none bg-transparent text-white py-2 px-2"
            placeholder="Enter your Email Adderss"
          />
          <button className="bg-tw-blue-400 px-4 py-2 rounded-full">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
