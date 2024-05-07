import React from "react";
import homepagestyle from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={homepagestyle.maindiv}>
      <span style={{ fontSize: "40px" }}>Welcome to Homepage</span>
      <span style={{ fontSize: "20px", marginTop: "1rem" }}>
        Click on Users to see all the users.
      </span>
    </div>
  );
}

export default HomePage;
