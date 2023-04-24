import React, { useRef } from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import emailjs from "@emailjs/browser";

type Props = {};

function Contact({}: Props) {
  const form: any = useRef<HTMLFormElement>(null);
  let isEmpty = true;

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mor4w9j",
        "template_9p51fbj",
        form.current,
        "_daBqLY3QZXLJK3B_"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-[5.5rem] md:top-[4.75rem] tracking-[15px] text-white/60 text-2xl">
        CONTACT
      </h3>

      <div className="flex flex-col space-y-5 md:space-y-10 mt-16">
        <h4 className="underline decoration-[#A8E1F4] tracking-[3px] text-xl md:text-3xl font-semibold text-center">
          Lets Talk.
        </h4>

        <div className="space-y-2 md:space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#A8E1F4] h-7 w-7 animate-pulse" />
            <p className="text-md md:text-xl">+44 7305560325</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#A8E1F4] h-7 w-7 animate-pulse" />
            <p className="text-md md:text-xl">musaabuppal15@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#A8E1F4] h-7 w-7 animate-pulse" />
            <p className="text-md md:text-xl">Manchester, UK</p>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col space-y-3 w-fit mx-auto"
        >
          <div className="max-sm:flex-col max-sm:space-y-3 flex md:space-x-2">
            <input
              placeholder="Name"
              className="contactInput"
              type="text"
              name="name"
              required
            />
            <input
              placeholder="Email"
              className="contactInput"
              type="email"
              name="email"
              required
            />
          </div>

          <input
            placeholder="Subject"
            className="contactInput"
            type="text"
            name="subject"
            required
          />
          <textarea
            placeholder="Message"
            className="contactInput resize-none h-32 md:h-40"
            name="message"
            required
          />
          <button
            type="submit"
            className="bg-[#A8E1F4] py-5 px-20 rounded-md text-black font-bold text-lg"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
