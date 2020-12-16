import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "react-bootstrap/Navbar";
import { Link, Route, Switch } from 'react-router-dom';


const Header = () => {
    return (
        <>
      <Navbar bg="light">
        <Link to="/"><Navbar.Brand>
          <img
            alt="logo"
            src="/logo-with-flower.png"
            width="200"
            height="200"
            className="d-inline-block align-top"
          />{" "}
          
          </Navbar.Brand></Link>
      </Navbar>
    </>
    );
}

export default Header;