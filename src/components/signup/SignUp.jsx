import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [username, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const config = {
    method: "post",
    url: "https://clean-pink-hare.cyclic.app/api/auth/register",
    data: {
      username,
      email,
      phoneNumber,
    },
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios(config).then((result) => {
        console.log(result);
      });
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="register-form-container">
      <div className="text-field">
        <input
          type="text"
          value={username}
          onChange={(event) => setUserName(event.target.value)}
          id="username"
          placeholder="Your Name..."
        />
      </div>
      <div className="emal-field">
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          id="email"
          placeholder="Your EMail..."
        />
      </div>
      <div className="phone-field">
        <input
          type="tel"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
          id="telephone"
          placeholder="Your Telephone..."
        />
      </div>

      <button type="submit" onClick={onSubmit} className="submit-btn">
        Submit
      </button>
    </div>
  );
};

export default SignUp;
