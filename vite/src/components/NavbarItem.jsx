import React from "react";
import { Link } from "react-router-dom";

function NavbarItem() {
  return (
    <>
      <div
        className="card p-2 w-50 navbar-container"
        style={{ borderRadius: "0", maxWidth: "350px" }}
      >
        <div className="card p-3 gap-3" style={{ backgroundColor: "#E28181" }}>
          <Link className="navbar-container-text" to={`/`}>
            <div className="d-flex">
              <div className="d-flex w-25"></div>
              <div className="d-flex">Home</div>
            </div>
          </Link>
          <Link className="navbar-container-text">
            <div className="d-flex ">
              <div className="d-flex w-25"></div>
              <div className="d-flex ">Search</div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default NavbarItem;
