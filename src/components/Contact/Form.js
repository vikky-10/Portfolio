import React, { useState } from "react";
import "./Form.css";
import { db } from "../../Firebase";
import Email from "./Email";
import { Fade } from "react-reveal";
import mess from "./Message_perspective_matte_s.png";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

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
    <Fade right duration={1000} distance="20px">
      <div className="section contact" id="contact">
        <div className="contact-center container">
          <Email className="email" />

          <div
            className="right"
            data-aos="fade-up-left"
            data-aos-duration="2000"
          >
            <form className="form" onSubmit={handleSubmit}>
              <div className="ms">
                <img className="mess" src={mess} alt="mes" />

                <h2>Message me</h2>
              </div>
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
              />

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
    </Fade>
  );
}

export default Contact;
