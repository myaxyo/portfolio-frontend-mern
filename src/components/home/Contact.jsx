import React, { useState } from "react";
import axios from "axios";

import Title from "./Title";

const Contact = () => {
  const [inputs, setInputs] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const handleOnChange = (event) => {
    event.persist();
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  // Server State Handling

  const handleOnSubmit = (event) => {
    event.preventDefault();

    axios({
      method: "POST",
      url: `https://formbold.com/s/${import.meta.env.VITE_FORM_END}`,
      data: inputs,
    })
      .then((r) => {
        alert("Thank you for reaching me out, I will contact with you soon!");
        setInputs({
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((r) => {
        console.log(r);
      });
  };

  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <form
          className="flex flex-col w-full md:w-7/12"
          onSubmit={handleOnSubmit}
        >
          <Title>Contact</Title>
          <input
            onChange={handleOnChange}
            value={inputs.subject}
            required
            id="subject"
            type="text"
            name="subject"
            placeholder="Name"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <input
            onChange={handleOnChange}
            value={inputs.email}
            required
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <textarea
            onChange={handleOnChange}
            value={inputs.message}
            required
            id="message"
            name="message"
            placeholder="Type your message"
            rows="10"
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
