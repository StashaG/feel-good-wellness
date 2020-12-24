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
            src="images/logo.png"
            width="100"
            height="100"
            className="d-inline-block align-top"
          />
          </Navbar.Brand></Link>
      </Navbar>
    </>
    );
}

export default Navigation;