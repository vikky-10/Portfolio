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
    // <div className="container">
    //   <form className="form" onSubmit={handleSubmit}>
    //     <h2>Contact</h2>
    //     <label>Name</label>
    //     <input
    //       placeholder="name"
    //       value={name}
    //       onChange={(e) => setName(e.target.value)}
    //       required
    //     />
    //     <label>Email</label>
    //     <input
    //       placeholder="email"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //       required
    //     />
    //     <label className="text">Message</label>
    //     <textarea
    //       placeholder="Message"
    //       value={message}
    //       onChange={(e) => setMessage(e.target.value)}
    //       required
    //     ></textarea>
    //     <button
    //       type="submit"
    //       style={{ background: loader ? "#ccc" : "#657ed4" }}
    //     >
    //       submit
    //     </button>
    //   </form>
    //   <img
    //     className="firebase__img"
    //     src="http://www.gstatic.com/mobilesdk/190403_mobilesdk/project_create_illo_end@2x.png"
    //     alt=""
    //   />
    // </div>
    // ------------new-------------
    <div className="section contact" id="contact">
      {/* <div className="titles">
        <h1 className="tt">Contact me</h1>
      </div> */}

      <div className="contact-center container">
        {/* <div
          className="left"
          data-aos="fade-down-right"
          data-aos-duration="2000"
        > */}
        <Email className="email" />
        {/* <h2>Get in Touch</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            praesentium quibusdam ratione, cum ducimus minus iure saepe ipsum
            repudiandae. Cum adipisci cumque dicta suscipit fuga aliquid
            blanditiis quo quia vitae.
          </p>
          <div>
            <span className="icon">
              <i className="fas fa-user"></i>
            </span>
            <span className="content">
              <h3>Name</h3>
              <span>Alexandar Smith</span>
            </span>
          </div>

          <div>
            <span className="icon">
              <i className="fas fa-map-marker-alt"></i>
            </span>
            <span className="content">
              <h3>Address</h3>
              <span>United States</span>
            </span>
          </div>

          <div>
            <span className="icon">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="content">
              <h3>Email</h3>
              <span>youtube@gmail.com</span>
            </span>
          </div> */}
        {/* </div> */}
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
