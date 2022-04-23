import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Nav from "../../pages/nav/nav";
const DashboardPage = () => {
  const navigate = useNavigate();
  let USER = localStorage.getItem("user");
  if (USER) {
    USER = JSON.parse(USER);
  }
  // const refesh = () => {
	// 	window.location.reload(true);
	// };

  return (
    <div>
      <Nav />
      
      <h1
        style={{
          fontSize: "60px",
          textAlign: "center",
          marginTop: "50px",
          marginBottom: "100px",
        }}
      >
        Your Information
      </h1>
      <div className="flex d-flex ">
        <h3>{USER.name}</h3>
        <h3>{USER.email}</h3>
        <h3>{USER.password}</h3>
        <Button
          className="success"
          onClick={() => {
            // localStorage.removeItem('user');
            navigate("/homePage");
          }}
          variant="success"
        >
          Success
        </Button>
      </div>
    </div>
  );
};

export default DashboardPage;
