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
      <section className="lg:w-80vw mx-auto w-[90vw] pb-10 pt-20">
        <div>
          <h1 className="p-4 text-center text-5xl font-black text-white">
            Contact Us
          </h1>
          <p className="text-center text-lg text-white">
            Feel free to reach out for any enquires or queries you might have.
          </p>

          <p className=" text-center text-lg font-bold text-green-500 ">
            {modal}
          </p>
          <div className="my-4">
            <form method="post">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  className="rounded-md bg-tw-blue-600 p-4 py-2 "
                  type="text"
                  required
                  name="first_name"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(ev) => setFirstName(ev.target.value)}
                />
                <input
                  className="rounded-md bg-tw-blue-600 p-4 py-2 "
                  type="text"
                  required
                  name="last_name"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(ev) => setLastName(ev.target.value)}
                />

                <input
                  className="rounded-md bg-tw-blue-600 p-4 py-2 "
                  type="email"
                  required
                  name="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(ev) => setEmail(ev.target.value)}
                />
                <input
                  className="rounded-md bg-tw-blue-600 p-4 py-2 "
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
                  className=" rounded-md bg-tw-blue-600  p-4 md:col-span-2"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <input
                  className="my-4 cursor-pointer rounded-md bg-tw-blue-400 p-4 py-2  font-bold text-white"
                  type="submit"
                  value="Send Message"
                  onClick={(ev) => sendMessage(ev)}
                />
              </div>
            </form>
          </div>

          <p className="my-4 text-center text-lg text-white">OR</p>
          <div className="flex flex-wrap justify-center space-x-4 text-lg text-white">
            <a
              href="https://www.instagram.com/apexcryptorecovery/"
              target="_blank"
              className="rounded-full bg-tw-blue-400 p-4 hover:text-tw-blue-300"
            >
              <BsInstagram />
            </a>
            <a
              href="https://www.twitter.com/Apex77568696945/"
              target="_blank"
              className="rounded-full bg-tw-blue-400 p-4 hover:text-tw-blue-300"
            >
              <TfiTwitter />
            </a>
            <a
              href="https://wa.me/+16157849334/"
              target="_blank"
              className="rounded-full bg-tw-blue-400 p-4 hover:text-tw-blue-300"
            >
              <ImWhatsapp />
            </a>

            <a
              href="https://t.me/Apexcryptorecoveryfirm/"
              target="_blank"
              className="rounded-full bg-tw-blue-400 p-4 hover:text-tw-blue-300"
            >
              <FaTelegramPlane />
            </a>
            <a
              href="mailto:support@apexrecoveryfirm.co"
              target="_blank"
              className="rounded-full bg-tw-blue-400 p-4 hover:text-tw-blue-300"
            >
              <HiOutlineMail />
            </a>
            <a
              href="tel:+16157849334"
              target="_blank"
              className="rounded-full bg-tw-blue-400 p-4 hover:text-tw-blue-300"
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
