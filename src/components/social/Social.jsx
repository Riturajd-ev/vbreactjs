import React from "react";

const SocialShare = [
  {
    iconName: "socicon-twitter",
    link: "https://twitter.com/vbeasyit?lang=en",
    iconClass: "twitter",
  },
  {
    iconName: "socicon-facebook",
    link: "https://www.facebook.com/vbeasy/",
    iconClass: "facebook",
  },
  {
    iconName: "socicon-instagram",
    link: "https://www.instagram.com/vbeasy/?hl=en",
    iconClass: "instagram",
  },
  {
    iconName: "socicon-pinterest",
    link: "https://in.pinterest.com/vbeasy/",
    iconClass: "pinterest",
  },
];
const Social = () => {
  return (
    <div className="ptf-offcanvas-menu__socials">
      {/* <!--Social Icon--> */}
      {SocialShare.map((icon, i) => (
        <a
          className={`ptf-social-icon ptf-social-icon--style-3  ${icon.iconClass}`}
          href={icon.link}
          target="_blank"
          rel="noopener noreferrer"
          key={i}
        >
          <i className={icon.iconName}></i>
        </a>
      ))}
    </div>
  );
};

export default Social;
