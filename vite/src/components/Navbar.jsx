import useUserData from "../function/useUserData";
import "./css/navbar.css";
import NavbarItem from "./NavbarItem";

function Navbar({ channelId, children }) {
  const { user } = useUserData(channelId);
  console.log(user);

  return (
    <>
      <div className="outer-container d-flex">
        <NavbarItem />
        <div className="outer-content-container d-flex m-3 p-5 flex-column w-100 rounded-8 ">
          {children}
        </div>
      </div>
    </>
  );
}

export default Navbar;
