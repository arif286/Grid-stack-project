import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css';
const list = [
  {
    name: "about company",
    link: "/about",
  },
  {
    name: "privacy policy",
    link: "/privacy",
  },
  {
    name: "terms & conditions",
    link: "/terms",
  },
  {
    name: "blog",
    link: "/blog",
  },
  {
    name: "contacts",
    link: "/contact",
  },
];
const Footer = () => {
	return (
    <div className="footer-box">
      <ul className="footer-list">
        {list.map(({ name, link }) => (
          <li>
            <Link to={link}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;