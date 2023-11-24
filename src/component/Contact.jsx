import React, { useState } from "react";
import axios from "axios";
import Footer from "./Footer";

import { ImWhatsapp } from "react-icons/im";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { TfiTwitter } from "react-icons/tfi";
import { FaTelegramPlane } from "react-icons/fa";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [modal, setModal] = useState("");

  async function sendMessage(ev) {
    ev.preventDefault();

    await axios.get(`/api/sanctum/csrf-cookie`);
    const response = await axios.post(`/api/contact`, {
      first_name: firstName,
      last_name: lastName,
      email: email,
      message: message,
    });

    if (response.status === 200) {
      setModal("Form Submitted Successfully!!!");
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
    }
  }

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

          <p className=" text-green-500 text-center font-bold text-lg ">
            {modal}
          </p>
          <div className="my-4">
            <form method="post">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  className="py-2 p-4 rounded-md bg-tw-blue-600 "
                  type="text"
                  required
                  name="first_name"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(ev) => setFirstName(ev.target.value)}
                />
                <input
                  className="py-2 p-4 rounded-md bg-tw-blue-600 "
                  type="text"
                  required
                  name="last_name"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(ev) => setLastName(ev.target.value)}
                />

                <input
                  className="py-2 p-4 rounded-md bg-tw-blue-600 "
                  type="email"
                  required
                  name="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(ev) => setEmail(ev.target.value)}
                />
                <input
                  className="py-2 p-4 rounded-md bg-tw-blue-600 "
                  type="email"
                  required
                  name="repeat_email"
                  placeholder="Confirm Email Address"
                />
                <textarea
                  value={message}
                  onChange={(ev) => setMessage(ev.target.value)}
                  cols="30"
                  rows="3"
                  placeholder="Your Message"
                  className=" p-4 rounded-md  bg-tw-blue-600 md:col-span-2"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <input
                  className="py-2 p-4 rounded-md my-4 bg-tw-blue-400 text-white  font-bold cursor-pointer"
                  type="submit"
                  value="Send Message"
                  onClick={(ev) => sendMessage(ev)}
                />
              </div>
            </form>
          </div>

          <p className="text-white text-lg text-center my-4">OR</p>
          <div className="text-white text-lg flex flex-wrap justify-center space-x-4">
            <a
              href="https://www.instagram.com/apexcryptorecovery/"
              target="_blank"
              className="p-4 bg-tw-blue-400 rounded-full hover:text-tw-blue-300"
            >
              <BsInstagram />
            </a>
            <a
              href="https://www.twitter.com/Apex77568696945/"
              target="_blank"
              className="p-4 bg-tw-blue-400 rounded-full hover:text-tw-blue-300"
            >
              <TfiTwitter />
            </a>
            <a
              href="https://wa.me/+16157849334/"
              target="_blank"
              className="p-4 bg-tw-blue-400 rounded-full hover:text-tw-blue-300"
            >
              <ImWhatsapp />
            </a>

            <a
              href="https://t.me/Apexcryptorecoveryfirm/"
              target="_blank"
              className="p-4 bg-tw-blue-400 rounded-full hover:text-tw-blue-300"
            >
              <FaTelegramPlane />
            </a>
            <a
              href="mailto:support@apexcryptorecovery.com"
              target="_blank"
              className="p-4 bg-tw-blue-400 rounded-full hover:text-tw-blue-300"
            >
              <HiOutlineMail />
            </a>
            <a
              href="tel:+16157849334"
              target="_blank"
              className="p-4 bg-tw-blue-400 rounded-full hover:text-tw-blue-300"
            >
              <FiPhoneCall />
            </a>
          </div>

          <Footer />
        </div>
      </section>
    </article>
  );
}
