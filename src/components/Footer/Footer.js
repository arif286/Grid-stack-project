import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css';
const list = [
  {
    name: "about company",
		link: "/about",
		id:1
  },
  {
    name: "privacy policy",
		link: "/privacy",
		id: 2
  },
  {
    name: "terms & conditions",
		link: "/terms",
		id: 3
  },
  {
    name: "blog",
		link: "/blog",
		id: 4
  },
  {
    name: "contacts",
		link: "/contact",
		id: 5
  },
];
const Footer = () => {
	return (
    <div className="footer-box">
      <ul className="footer-list">
        {list.map(({ name, link ,id}) => (
          <li key={id}>
            <Link to={link}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;