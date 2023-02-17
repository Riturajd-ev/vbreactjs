import React from "react";

const PersonalInfo = () => {
  return (
    <>
      {/* <!--Animated Block--> */}
      <div className="ptf-animated-block" data-aos="fade" data-aos-delay="100">
        <h5 className="fz-14 text-uppercase has-3-color fw-normal">
          Biography
        </h5>
        {/* <!--Spacer--> */}
        <div className="ptf-spacer" style={{ "--ptf-xxl": "2.8125rem" }}></div>
        <p
          className="fz-24 has-black-color has-secondary-font"
          style={{ maxWidth: "15.3125rem" }}
        >
          VB Easy is a certified, award-winning software development company that predominantly  focuses on client requirements and endeavour to deliver result oriented solutions.
        </p>
      </div>
      {/* End .ptf-animated-block */}

      {/* <!--Spacer--> */}
      <div
        className="ptf-spacer"
        style={{
          "--ptf-xxl": "5.625rem",
          "--ptf-md": "2.8125rem",
        }}
      ></div>

      {/* <!--Animated Block--> */}
      <div className="ptf-animated-block" data-aos="fade" data-aos-delay="200">
        <h5 className="fz-14 text-uppercase has-3-color fw-normal">Contact</h5>
        {/* <!--Spacer--> */}
        <div className="ptf-spacer" style={{ "--ptf-xxl": "2.8125rem" }}></div>
        <p className="fz-24 has-black-color has-secondary-font">
          Warsaw, Poland <br />
          <a href="mailto:support@vbeasy.com">support@vbeasy.com</a>
          <br />
          <a href="tel:+919718352518">+91-9718352518</a>
        </p>
      </div>
      {/* End .ptf-animated-block */}

      {/* <!--Spacer--> */}
      <div
        className="ptf-spacer"
        style={{
          "--ptf-xxl": "5.625rem",
          "--ptf-md": "2.8125rem",
        }}
      ></div>

      {/* <!--Animated Block--> */}
      <div className="ptf-animated-block" data-aos="fade" data-aos-delay="300">
        <h5 className="fz-14 text-uppercase has-3-color fw-normal">Services</h5>
        {/* <!--Spacer--> */}
        <div className="ptf-spacer" style={{ "--ptf-xxl": "2.8125rem" }}></div>
        <p className="fz-24 has-black-color has-secondary-font">
          Website Design <br />
          Mobile Application Design
          <br />
          Animation
        </p>
      </div>
      {/* End .ptf-animated-block */}
    </>
  );
};

export default PersonalInfo;
