import React from "react";
import { Link } from "react-router-dom";

const serviceContent = [
  {
    icon: "lnil lnil-cup",
    titlePart1: "Google Sheet",
    titlePart2: "Automation",
    descriptions: ` We build and activate brands throung cultural insight &amp;
        strategic vision.`,
  },
  {
    icon: "lnil lnil-website-rank",
    
    titlePart1: "UI/UX",
    titlePart2: "SOLUTION",
    descriptions:  `We build and activate brands throung cultural insight &amp;
        strategic vision.`,
  },
  {
    icon: "lnil lnil-3d",
    titlePart1: "Web App",
    titlePart2: "Development",
    descriptions: ` We build and activate brands throung cultural insight &amp;
        strategic vision.`,
  },
  {
    icon: "lnil lnil-video-camera-alt-1",
    titlePart1: "Mobile App",
    titlePart2: "Development",
    descriptions: ` We build and activate brands throung cultural insight &amp;
        strategic vision.`,
  },
  {
    icon: "lnil lnil-video-camera-alt-1",
    titlePart1: "Software Development",
    titlePart2: "Consulting",
    descriptions: ` We build and activate brands throung cultural insight &amp;
        strategic vision.`,
  },
  {
    icon: "lnil lnil-video-camera-alt-1",
    titlePart1: "Cloud App",
    titlePart2: "Development",
    descriptions: ` We build and activate brands throung cultural insight &amp;
        strategic vision.`,
  },
  {
    icon: "lnil lnil-video-camera-alt-1",
    titlePart1: "Digital Marketing",
    titlePart2: "Agency",
    descriptions: ` We build and activate brands throung cultural insight &amp;
        strategic vision.`,
  },
];

const ServiceOne = () =>
{
  return (
    <>
      {serviceContent.map((val, i ) => (
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="0"
          key={i}
        >
          {/* <!--Services Box--> */}
          <div className="ptf-service-box">
            <Link
              to="/service-details"
              className="ptf-service-box__link"
            ></Link>
            <div className="ptf-service-box__icon">
              <i className={val.icon}>
              </i>
            </div>
            <h5 className="ptf-service-box__title">
              {val.titlePart1} <br />
              {val.titlePart2}
            </h5>
            <div className="ptf-service-box__content">
              <p>{val.descriptions}</p>
            </div>
            <div className="ptf-service-box__arrow">
              <i className="lnil lnil-chevron-right" ></i>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ServiceOne;
