import React from "react";

const socialList = [
  {
    iconName: "socicon-twitter",
    link: "https://twitter.com/vbeasyit?lang=en",
  },
  {
    iconName: "socicon-facebook",
    link: "https://www.facebook.com/vbeasy/",
  },
  {
    iconName: "socicon-instagram",
    link: "https://www.instagram.com/vbeasy/?hl=en",
  },
  {
    iconName: "socicon-pinterest",
    link: "https://in.pinterest.com/vbeasy/",
  },
  {
    iconName: "socicon-dribbble",
    link: "https://www.youtube.com/c/VBEasy/shorts",
  },
];

const SocialTwo = () => {
  return (
    <>
      {socialList.map((val, i) => (
        <a
          className="ptf-social-icon ptf-social-icon--style-1"
          target="_blank"
          rel="noopener noreferrer"
          href={val.link}
          key={i}
        >
          <i className={val.iconName}></i>
        </a>
      ))}
    </>
  );
};

export default SocialTwo;
