import React from "react";
import { Link } from "react-router-dom";
// import FooterList from "../list/FooterList";

const linkList = [

  {
    itemName: "Blog",
    link: "/blog-sidebar",
  },
  {
    itemName: "Faqs",
    link: "/faq",
  },
  {
    itemName: "Term & Conditions",
    link: "/",
  },
  {
    itemName: "Privacy Policy",
    link: "/",
  },
  // {
  //   itemName: "Affiliate",
  //   link: "/",
  // },
];

const Product = [
  // {
  //   itemName: "Works",
  //   link: "/service",
  // },
  {
    itemName: "About",
    link: "/about-me",
  },
  {
    itemName: "Services",
    link: "/service",
  },
  {
    itemName: "Contact",
    link: "/contact",
  },
  {
    itemName: "Help",
    link: "/faq",
  },
];

const Footer = () => {
  return (
    <div className="row">
      <div className="col-12 col-xl-6">
        {/* <!--Animated Block--> */}
        <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
          <div
            className="ptf-footer-heading has-black-color"
            style={{ maxWidth: "37.5rem" }}
          >
            Boost Your Business Up To High Level With VBeasy
          </div>

          <div className="ptf-footer-heading has-black-color">
            Start by
            <Link
              className="has-accent-1 text-decoration-underline"
              to="/contact"
            >
              Saying Hi!
            </Link>
          </div>

          <p className="fz-24">13 EC Road, Dehradun, India</p>
          <a className="fz-40 has-black-color" href="mailto:support@vbeasy.com">
            support@vbeasy.com
          </a>
        </div>
      </div>
      <div className="col-12 col-md-6 col-xl-3">
        {/* <!--Animated Block--> */}
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="100"
        >
          <div className="ptf-widget ptf-widget-links has-black-color">
            <h4 className="ptf-widget-title">Links</h4>
            <ul>
              {linkList.map((val, i) => (
                <li key={i}>
                  <a href={val.link}>{val.itemName}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-xl-3">
        {/* <!--Animated Block--> */}
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="200"
        >
          <div className="ptf-widget ptf-widget-text">
            <h4 className="ptf-widget-title">Product</h4>
            <div className="ptf-widget ptf-widget-links has-black-color">
              <ul>
                {Product.map((val, i) => (
                  <li key={i}>
                    <a href={val.link}>{val.itemName}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
