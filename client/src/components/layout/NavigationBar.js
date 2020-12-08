import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigationbar = ({ auth, onClick }) => (
   <Navbar
      bg="dark"
      variant="dark"
      expand="sm"
      className="mb-3"
      style={{ minHeight: "4rem" }}
   >
      <Link to="/blog">
         <Nav>
         <img
               src="https://raw.githubusercontent.com/ebubechi/anox/3e09b55c0d83c5dc2d19373e964e36995499c5dd/anoxs.svg"
               style={{ height: 30, width: 40 }}
               className="d-inline-block align-top"
               alt=""
            />
         </Nav>
         {/* <Navbar.Brand>
            <img https://raw.githubusercontent.com/ebubechi/anox/3e09b55c0d83c5dc2d19373e964e36995499c5dd/Anox.svg
               src="https://react-bootstrap.github.io/logo.svg"
               style={{ height: 30, width: 30 }}
               className="d-inline-block align-top"
               alt=""
            />
            {" Anox "}
         </Navbar.Brand> */}
      </Link>
      {/* <Nav className="ml-auto">
         {auth ? (
            <Link to="/logout">
               <Button
                  variant="outline-light"
                  className="mr-sm-2"
                  onClick={onClick}
               >
                  Logout
               </Button>
            </Link>
         ) : (
            <Link to="/login">
               <Button variant="outline-light" className="mr-sm-2">
                  Login
               </Button>
            </Link>
         )}
      </Nav> */}
   </Navbar>
);

Navigationbar.propTypes = {
   auth: PropTypes.bool.isRequired,
   onClick: PropTypes.func.isRequired
};

export default Navigationbar;
