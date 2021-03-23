import React, { useState } from "react";
import "./Contact.css";
import { db } from "./Firebase";
import Email from "./Email";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    //   there is two type of method .add and .set || .set overwrite on previous present data so use .add
    // it return the promise
    db?.collection("contacts")
      .add({
        name: name,
        email: email,
        subject: subject,
        message: message,
      })
      .then(() => {
        alert("Message has been submitted 👍");
        setLoader(false);
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };
  return (
    <div className="section contact" id="contact">
      {/* <div className="titles">
        <h1 className="tt">Contact me</h1>
      </div> */}

      <div className="contact-center container">
        <Email className="email" />

        <div className="right" data-aos="fade-up-left" data-aos-duration="2000">
          <form className="form" onSubmit={handleSubmit}>
            <h2>Message me</h2>
            <div>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
            <textarea
              cols="10"
              rows="10"
              placeholder="Describe Project"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>

            <button
              className="btn"
              type="submit"
              style={{ background: loader ? "#ccc" : "#657ed4" }}
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
