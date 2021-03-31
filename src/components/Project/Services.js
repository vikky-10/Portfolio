import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import "./Services.css";
import { Fade } from "react-reveal";
import { NavLink } from "react-router-dom";

const Services = () => {
  const [header] = React.useState({
    mainHeader: "PROJECTS",
    subHeading: "My Project",
    text: "My projects makes use of vast variety of latest technology tools.",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaGithub style={{ fontSize: 30 }} className="commonIcons" />,
      gitlink: "https://github.com/mrstark-A/Portfolio",
      weblink: "",
      icon1: <FaLink style={{ fontSize: 30 }} className="commonIcons com" />,
      heading: "Portfolio",
      text:
        "It is my portfolio website. It includes all information regarding me. Who I am, what I am doing, and what my specialization, and a lot more.",
    },
    {
      id: 2,
      icon: <FaGithub style={{ fontSize: 30 }} className="commonIcons" />,
      icon1: <FaLink style={{ fontSize: 30 }} className="commonIcons com" />,
      gitlink: "https://github.com/mrstark-A/web_blog",
      weblink: "https://compassionate-spence-7580d6.netlify.app/",
      heading: "Blog",
      text:
        "It is a blog application in this application you can add your post, likes other's posts, no other can delete your post, also this application has a full authentication system. ",
    },
    {
      id: 3,
      icon: <FaGithub style={{ fontSize: 30 }} className="commonIcons" />,
      icon1: <FaLink style={{ fontSize: 30 }} className="commonIcons com" />,
      gitlink: "https://github.com/mrstark-A/chat-app",
      weblink:
        "https://60084bc0fdb28f23947f9faf--xenodochial-bhabha-8817e5.netlify.app/",
      heading: "Chat-app",
      text:
        "Full Realtime Chat Application. I use React on the front end, with NodeJS + Socket.io web socket library on the back end.",
    },
    {
      id: 4,
      icon: <FaGithub style={{ fontSize: 30 }} className="commonIcons" />,
      icon1: <FaLink style={{ fontSize: 30 }} className="commonIcons com" />,
      gitlink: "https://github.com/mrstark-A/Suggestion-app",
      weblink: "https://amazing-dubinsky-603771.netlify.app/",
      heading: "Suggestion-app",
      text:
        "Interesting project - A React Suggestion App. In this project, I use React on the front end and I make get requests to Advice Slip JSON API.",
    },
    {
      id: 5,
      icon: <FaGithub style={{ fontSize: 30 }} className="commonIcons" />,
      icon1: <FaLink style={{ fontSize: 30 }} className="commonIcons com" />,
      gitlink: "https://github.com/mrstark-A/Google-drive",
      weblink: "https://drive-9dc37.web.app/login",
      heading: "Google-drive",
      text:
        "It is not a full real google drive in this you simply create a folder or file upload images, pdfs, docs, etc with full authentication.",
    },
    {
      id: 6,
      icon: <FaGithub style={{ fontSize: 30 }} className="commonIcons" />,
      icon1: <FaLink style={{ fontSize: 30 }} className="commonIcons com" />,
      gitlink: "https://github.com/mrstark-A/chattery-app",
      weblink: "",
      heading: "Chattery-app",
      text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. simply dummy",
    },
  ]);
  return (
    <Fade Bottom duration={3000}>
      <div className="services">
        <div className="container">
          <div className="services__header">
            <div className="common">
              {/* <h3 className="heading">{header.mainHeader}</h3> */}
              <h1 className="mainHeader">{header.subHeading}</h1>
              <p className="mainContent">{header.text}</p>
              <div className="commonBorder"></div>
            </div>

            <div className="row bgMain">
              {state.map((info) => (
                <div className="col-4 bgMain">
                  <div className="services__box">
                    <div className="gl">
                      <a href={info.gitlink} target="_blank">
                        <span>{info.icon}</span>
                      </a>
                      <a href={info.weblink} target="_blank">
                        <span style={{ marginLeft: "30px" }}>{info.icon1}</span>
                      </a>
                    </div>
                    <div className="services__box-header">{info.heading}</div>
                    <div className="services__box-p">{info.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Services;
