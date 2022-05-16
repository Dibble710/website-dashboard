import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="container">
        <footer className="py-3 my-4 justify-content-center">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <Link to="/" className="nav-link px-2 text-muted">
                Home
              </Link>
            </li>
          </ul>
            <Link to="/">
              <p className="text-center text-muted">© 2022 Digitizers, Inc</p>
            </Link>
        </footer>
      </div>
    </>
  );
}

export default Footer;
