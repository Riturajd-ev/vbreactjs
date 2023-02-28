import React from "react";
import { Link } from "react-router-dom";

const footerItems = [
  { itemName: "Faqs", link: "faq" },
  { itemName: "Term & Conditions", link: "" },
  { itemName: "Privacy Policy", link: "" },
  { itemName: "Help", link: "faq" },
  { itemName: "Services", link: "service" },
  { itemName: "Blog", link: "blog-sidebar" },
  // { itemName: "News", link: "" },
];

const FooterList = () => {
  return (
    <ul>
      {footerItems.map((item, i) => (
        <li key={i}>
          <Link to={item.link}>{item.itemName}</Link>
        </li>
      ))}
    </ul>
  );
};

export default FooterList;
