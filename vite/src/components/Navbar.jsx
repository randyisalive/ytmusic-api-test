import useUserData from "../function/useUserData";
import "./css/navbar.css";
import NavbarItem from "./NavbarItem";

function Navbar({ channelId, children }) {
  return (
    <>
      <div className="outer-container d-flex">
        <NavbarItem />
        <div
          className="outer-content-container d-flex m-3 p-5 flex-column w-100 rounded-8 vh-100"
          style={{ overflowY: "auto" }}
        >
          {children}
        </div>
      </div>
    </>
  );
}

export default Navbar;
