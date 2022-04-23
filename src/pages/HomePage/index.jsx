import React from "react";
import "./index.css";
import Nav from "../nav/nav";
import CrudPage from "../crud";
const HomePage = () => {
  return (
    <>
    <Nav/>
      <div className="homePage">
        <CrudPage/>
      </div>
    </>
  );
};
export default HomePage;
