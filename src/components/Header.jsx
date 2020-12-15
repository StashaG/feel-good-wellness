import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
    return (
        <>
      <Navbar bg="light">
        <Navbar.Brand href="#home">
          <img
            alt="logo"
            src="/logo-with-flower.png"
            width="200"
            height="200"
            className="d-inline-block align-top"
          />{" "}
          
        </Navbar.Brand>
      </Navbar>
    </>
    );
}

export default Header;