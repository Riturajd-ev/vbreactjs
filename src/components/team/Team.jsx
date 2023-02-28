import React from "react";

const teamContent = [
  {
    delayAnimation: "0",
    img: "team-1",
    title: "Rajveer Singh",
    designation: "Creative Director and CEO",
  },
  {
    delayAnimation: "100",
    img: "team-2",
    title: "Srishti Chadha",
    designation: "HR & Management",
  },
  {
    delayAnimation: "200",
    img: "team-3",
    title: "Vince",
    designation: "Full Stack Developer",
  },
  // {
  //   delayAnimation: "300",
  //   img: "team-4",
  //   title: "Sumit",
  //   designation: "Italian Transcriber, Interpreter, Voice actor",
  // },
  {
    delayAnimation: "0",
    img: "team-5",
    title: "Migs",
    designation: "Marketing Expert",
  },
  {
    delayAnimation: "100",
    img: "team-6",
    title: "Mark",
    designation: "SEO Expert",
  },
  {
    delayAnimation: "200",
    img: "new-member",
    title: "",
    designation: "",
  },
];

const Team = () => {
  return (
    <>
      {teamContent.map((val, i) => (
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay={val.delayAnimation}
          key={i}
        >
          {/* <!--Team Member--> */}
          <div className="ptf-team-member ptf-team-member--has-effect">
            <div className="ptf-team-member__avatar">
              <div className="shadow-effect"></div>
              <a href="#">
                {" "}
                <img
                  src={`assets/img/root/team/${val.img}.png`}
                  alt={val.title}
                  loading="lazy"
                />
              </a>
            </div>
            <div className="ptf-team-member__content">
              <h6 className="ptf-team-member__name">
                <a href="#">{val.title}</a>
              </h6>
              <p className="ptf-team-member__function">{val.designation}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Team;
