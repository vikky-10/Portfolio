import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import "./Services.css";
import { Fade } from "react-reveal";
import { NavLink } from "react-router-dom";

const Services = () => {
  const [header] = React.useState({
    mainHeader: "SERVICES",
    subHeading: "My Services",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum standard dummy text.",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaGithub style={{ fontSize: 30 }} className="commonIcons" />,
      icon1: <FaLink style={{ fontSize: 30 }} className="commonIcons" />,
      heading: "Web Development",
      text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
      industry. simply dummy",
    },
    {
      id: 2,
      icon: <FaGithub style={{ fontSize: 30 }} className="commonIcons" />,
      icon1: <FaLink style={{ fontSize: 30 }} className="commonIcons" />,
      heading: "Photography",
      text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. simply dummy",
    },
    {
      id: 3,
      icon: <FaGithub style={{ fontSize: 30 }} className="commonIcons" />,
      icon1: <FaLink style={{ fontSize: 30 }} className="commonIcons" />,
      heading: "Web Desing",
      text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. simply dummy",
    },
    {
      id: 4,
      icon: <FaGithub style={{ fontSize: 30 }} className="commonIcons" />,
      icon1: <FaLink style={{ fontSize: 30 }} className="commonIcons" />,
      heading: "App Devlopment",
      text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. simply dummy",
    },
    {
      id: 5,
      icon: <FaGithub style={{ fontSize: 30 }} className="commonIcons" />,
      icon1: <FaLink style={{ fontSize: 30 }} className="commonIcons" />,
      heading: "Video Editing",
      text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. simply dummy",
    },
    {
      id: 6,
      icon: <FaGithub style={{ fontSize: 30 }} className="commonIcons" />,
      icon1: <FaLink style={{ fontSize: 30 }} className="commonIcons" />,
      heading: "SEO Expert",
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
              <h3 className="heading">{header.mainHeader}</h3>
              <h1 className="mainHeader">{header.subHeading}</h1>
              <p className="mainContent">{header.text}</p>
              <div className="commonBorder"></div>
            </div>

            <div className="row bgMain">
              {state.map((info) => (
                <div className="col-4 bgMain">
                  <div className="services__box">
                    <div className="gl">
                      <NavLink exact className="lk" to="/">
                        <span>{info.icon}</span>
                      </NavLink>
                      <NavLink exact className="lk" to="/">
                        <span style={{ marginLeft: "30px" }}>{info.icon1}</span>
                      </NavLink>
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
