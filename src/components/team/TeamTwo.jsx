import React from "react";

const teamContent = [
  {
    delayAnimation: "0",
    img: "team-1-m",
    title: "Rajveer Singh",
    designation: "Creative Director and CEO",
  },
  {
    delayAnimation: "100",
    img: "team-2-m",
    title: "Srishti Chadha",
    designation: "HR & Management",
  },
  {
    delayAnimation: "100",
    img: "team-3-m",
    title: "Janus",
    designation: "Custom applications development",
  },
  // {
  //   delayAnimation: "100",
  //   img: "team-4-m",
  //   title: "Sumit",
  //   designation: "Italian Transcriber, Interpreter, Voice actor",
  // },
  {
    delayAnimation: "0",
    img: "team-5-m",
    title: "Migs",
    designation: "Marketing Expert",
  },
  {
    delayAnimation: "100",
    img: "team-6-m",
    title: "Mark",
    designation: "SEO Expert",
  },
  {
    delayAnimation: "100",
    img: "team-7-m",
    title: "Vince",
    designation: "Full Stack Developer",
  },
  {
    delayAnimation: "100",
    img: "team-8-m",
    title: "Damien",
    designation: "Business Consultant",
  },
  {
    delayAnimation: "0",
    img: "team-9-m",
    title: "Yogendra",
    designation: "PHP Developer, Laravel|codeigniter|MySQl",
  },
  {
    delayAnimation: "100",
    img: "team-10-m",
    title: "Alvin",
    designation: "Digital Marketing Expert",
  },
  {
    delayAnimation: "100",
    img: "team-11-m",
    title: "Laura Lorwence",
    designation: "Project Management",
  },
  // {
  //   delayAnimation: "100",
  //   img: "team-12-m",
  //   title: "Andy Robertson",
  //   designation: "Content Writer",
  // },
  {
    delayAnimation: "100",
    img: "new-member",
    title: "",
    designation: "",
  },
];

const TeamTwo = () => {
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
          <div className="ptf-team-member">
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

export default TeamTwo;
