import React from "react";
import "./Header.css";
const Header = (prop) => {
  return (
    <>
      <div className="container-fluid mt-3" id="top-container">
        <br />
        <h3>To-do list</h3>
        <p>
          A sticky navigation bar stays fixed at the top of the page when you
          scroll past it.
        </p>
      </div>

      <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            To do list
          </a>
        </div>
      </nav>

      {/* <div className="container-fluid"><br> */}
    </>
  );
};
export default Header;
