import React from "react";
import { ImWhatsapp } from "react-icons/im";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";

export default function Contact() {
  return (
    <article className="bg-tw-blue-500" id="contact">
      <section className="w-[90vw] mx-auto lg:w-80vw pt-20 pb-10">
        <div>
          <h1 className="font-black text-5xl text-center text-white p-4">
            Contact Us
          </h1>
          <p className="text-white text-center text-lg">
            Feel free to reach out for any enquires or queries you might have.
          </p>

          <div className="my-4">
            <form method="post">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  className="py-2 p-4 rounded-md bg-tw-blue-600 text-white"
                  type="text"
                  required
                  name="first_name"
                  placeholder="First Name"
                />
                <input
                  className="py-2 p-4 rounded-md bg-tw-blue-600 text-white"
                  type="text"
                  required
                  name="last_name"
                  placeholder="Last Name"
                />

                <input
                  className="py-2 p-4 rounded-md bg-tw-blue-600 text-white"
                  type="email"
                  required
                  name="email"
                  placeholder="Email Address"
                />
                <input
                  className="py-2 p-4 rounded-md bg-tw-blue-600 text-white"
                  type="email"
                  required
                  name="repeat_email"
                  placeholder="Confirm Email Address"
                />
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="3"
                  placeholder="Your Message"
                  className=" p-4 rounded-md text-white bg-tw-blue-600 md:col-span-2"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <input
                  className="py-2 p-4 rounded-md my-4 bg-tw-blue-400 text-white font-bold cursor-pointer"
                  type="submit"
                  value="Send Message"
                />
              </div>
            </form>
          </div>

          <p className="text-white text-lg text-center my-4 ">OR</p>
          <div className="text-white text-3xl flex justify-center space-x-4">
            <a
              href="#"
              target="_blank"
              className="p-4 bg-tw-blue-400 rounded-full hover:text-tw-blue-300"
            >
              <ImWhatsapp />
            </a>
            <a
              href="mailto:support@apexcryptorecovery.com"
              target="_blank"
              className="p-4 bg-tw-blue-400 rounded-full hover:text-tw-blue-300"
            >
              <HiOutlineMail />
            </a>
            <a
              href=""
              target="_blank"
              className="p-4 bg-tw-blue-400 rounded-full hover:text-tw-blue-300"
            >
              <FiPhoneCall />
            </a>
          </div>

          <div className="md:flex justify-between text-lg text-white mt-10 space-y-4 md:space-x-4 md:space-y-0">
            <h1 className="font-bold font-outfit text-2xl">APEX</h1>
            <div>
              <h3 className="font-bold">Apex</h3>
              <ul>
                <a href="#">
                  <li>Home</li>
                </a>
                <a href="#">
                  <li>About Us</li>
                </a>
                <a href="#">
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
                <a href="#">
                  <li>Email</li>
                </a>
                <a href="#">
                  <li>Whatsapp</li>
                </a>
                <a href="#">
                  <li>Instagrram</li>
                </a>
                <a href="#">
                  <li>Twitter</li>
                </a>
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
        </div>
      </section>
    </article>
  );
}
