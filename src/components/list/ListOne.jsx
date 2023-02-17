import React from "react";
import { Link } from "react-router-dom";

const listContent = [
  "Web App Development",
  "Mobile App Development",
  "IT Outsourcing Staffing",
  "UI/UX Website Design",
  "UI/UX Mobile Design",
  "Software Development Consulting",
];

const ListOne = () => {
  return (
    <ul
      className="ptf-services-list ptf-services-list--style-5"
      style={{ "--ptf-font-family": "var(--ptf-primary-font)" }}
    >
      {listContent.map((val, i) => (
        <li key={i}>
          <Link to="/service-details">{val}</Link>
        </li>
      ))}
    </ul>
  );
};

export default ListOne;
