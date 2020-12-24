import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "react-bootstrap/Navbar";
import { Link } from 'react-router-dom';


const Navigation = () => {
    return (
        <>
      <Navbar bg="light">
        <Link to="/"><Navbar.Brand>
          <img
            alt="logo"
            src="images/logo-with-flower.png"
            width="auto"
            height="auto"
            className="d-inline-block align-top"
          />
          </Navbar.Brand></Link>
      </Navbar>
    </>
    );
}

export default Navigation;