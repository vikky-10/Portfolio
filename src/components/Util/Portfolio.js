/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: "Vikky Singh",
  title: "Hi There, I'm Vikky",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of designing and building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mrstark-A",
  linkedin: "https://www.linkedin.com/in/vikky-singh-10012001/",

  instagram: "https://www.instagram.com/_vikkysingh/",
  twitter: "https://twitter.com/vikkysingh_",
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do ❓",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡Develop highly interactive Front end / User Interfaces for your web   applications"
    ),

    emoji("⚡ Integration of third party services such as Firebase"),
    emoji(
      "⚡  Gardening may be a fun and relaxing way to get in touch with nature. So apart from technical things i enjoy gardening. 🌳"
    ),
    emoji("⚡ Currently, I'm working on Angular, DS, and Algo 😵 😢"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Page

const degrees = {
  degrees: [
    {
      title: "Lovely Professional University Punjab",
      subtitle: "B.Tech. in Computer Engineering",

      duration: "2019 - Present",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Full Stack Development.",
      ],
      website_link: "http://iiitk.ac.in",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "HtML,CSS AND javascript",
      subtitle: "- Duke university",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/3KRBUX7SXAXP",
      color_code: "#8C151599",
    },
    {
      title: "Energy, Environment, and Everyday Life",
      subtitle: "-University of Illinois  ",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/W5SSNKCA554G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Angular",
      subtitle: "-LCO Cont.",
      logo_path: "google_logo.png",
      // certificate_link:
      //   "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
  ],
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-6266618612",
  email_address: "vikkyhp0007@gmail.com",
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  degrees,
  certifications,
  contactInfo,
};
