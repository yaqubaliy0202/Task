import React from "react";
import "./nav.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <div className="home">
        <Link to="/homePage">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/usersPage">Our Users</Link>
      </div>

      <Link to={"/"} className="form">
        <FaUserCircle className="a  vatar" />
        <IoMdArrowDropdown className="dropdawn" />
      </Link>
    </nav>
  );
};

export default Nav;
