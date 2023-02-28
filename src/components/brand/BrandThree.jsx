import React from "react";

const brandContent = [
  {
    delayAnimation: "0",
    icon: "logo-1-black",
  },
  {
    delayAnimation: "100",
    icon: "logo-2-black",
  },
  {
    delayAnimation: "200",
    icon: "logo-3-black",
  },
  {
    delayAnimation: "300",
    icon: "logo-4-black",
  },
  {
    delayAnimation: "400",
    icon: "logo-5-black",
  },
  {
    delayAnimation: "0",
    icon: "logo-6",
  },
  {
    delayAnimation: "100",
    icon: "logo-7",
  },
  {
    delayAnimation: "200",
    icon: "logo-8",
  },
  {
    delayAnimation: "300",
    icon: "logo-9",
  },
  {
    delayAnimation: "400",
    icon: "logo-10",
  },
  {
    delayAnimation: "400",
    icon: "logo-11",
  },
  {
    delayAnimation: "400",
    icon: "logo-12",
  },
];

const BrandThree = () => {
  return (
    <ul
      className="
          ptf-clients-list
          ptf-clients-list--center
          ptf-clients-list--style-2
        "
      data-columns="12"
    >
      {brandContent.map((val, i) => (
        <li
          className="ptf-clients-list__item"
          data-aos="fade"
          data-aos-delay={val.delayAnimation}
          key={i}
        >
          <img
            src={`assets/img/root/clients/${val.icon}.png`}
            alt="brand icon"
            loading="lazy"
          />
        </li>
      ))}
    </ul>
  );
};

export default BrandThree;
