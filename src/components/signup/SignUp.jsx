import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
  // const [username, setUserName] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [email, setEmail] = useState("");
  const [user, setUser] = useState({
    username: "",
    email: "",
    phoneNumber: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8100/api/auth//register", user);
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="register-form-container">
      <div className="all-inputs-container">
        <input
          type="text"
          name="username"
          // value={username}
          id="username"
          placeholder="Your Name..."
        />
        <input
          type="email"
          name="email"
          // value={email}
          id="email"
          placeholder="Your EMail..."
        />
        <input
          type="tel"
          name="telephone"
          // value={phoneNumber}
          id="telephone"
          placeholder="Your Telephone"
        />
      </div>

      <button type="submit" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
};

export default SignUp;
