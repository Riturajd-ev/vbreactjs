import React from "react";
import Slider from "react-slick";

const testimonialContent = [
  {
    avatar: "twitter-avatar",
    name: "Aly Mustakim",
    email: "@thiago.lfc",
    hightlightText: "@moonex",
    date: "15 Dec, 2022",
    description: `Working with Raj and Team at VBEasy was as professional as could be. They really
    get out of their way to fulfill clients' needs and requests. They work in a team spirit which made me return back to them for my second job. They are experts in VBA Excel.`,
  },
  {
    avatar: "twitter-avatar-2",
    name: "Sherry Eshrati",
    email: "@laura.cubichotel",
    hightlightText: "@awesome",
    date: "24 Dec, 2022",
    description: `Great team to work with, very flexible and knowledgeable!.`,
  },
  {
    avatar: "comment-avatar-1",
    name: "Andrew Gillespie",
    email: "@laura.cubichotel",
    hightlightText: "@design",
    date: "24 Dec, 2022",
    description: ` Excellence work would recommend. `,
  },
];

const TestimonialTwo = () => {
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings} className="arrow-none">
        {testimonialContent.map((val, i) => (
          <div className="swiper-slide" key={i}>
            <div
              className="ptf-twitter-review ptf-twitter-review--style-1"
              key={i}
            >
              <div className="ptf-twitter-review__header">
                <div className="ptf-twitter-review__avatar">
                  <img
                    src={`assets/img/root/${val.avatar}.png`}
                    alt="avatar"
                    loading="lazy"
                  />
                </div>
                <div className="ptf-twitter-review__meta">
                  <h6 className="ptf-twitter-review__author">{val.name}</h6>
                  <div className="ptf-twitter-review__info">
                    <a href="mailto:ibthemes21@gmail.com">{val.email}</a> -{" "}
                    {val.date}
                  </div>
                </div>
                <div className="ptf-twitter-review__icon">
                  <i className="socicon-twitter"></i>
                </div>
              </div>
              <div className="ptf-twitter-review__content">
                <p>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {val.hightlightText}
                  </a>{" "}
                  - {val.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default TestimonialTwo;
