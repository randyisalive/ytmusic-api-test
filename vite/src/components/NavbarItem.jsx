import { Link } from "react-router-dom";
import "./navbar-item.css";

function NavbarItem() {
  return (
    <>
      <div
        className="p-2 w-50 navbar-container "
        style={{ borderRadius: "0", maxWidth: "350px" }}
      >
        <div className=" p-3 gap-3 navbar-card d-flex flex-column">
          <div className="d-flex align-items-center gap-2 mb-5">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Youtube_Music_icon.svg/2048px-Youtube_Music_icon.svg.png"
              alt=""
              width={50}
            />
            <label htmlFor="" className="h5 m-0 text-white">
              YT Music Downloader
            </label>
          </div>
          <Link className="navbar-container-text" to={`/`}>
            <div className="d-flex ">
              <div className="d-flex align-items-center" id="icon-item">
                <i className="pi pi-home h5 m-0"></i>
              </div>
              <div className="d-flex h5 m-0">Home</div>
            </div>
          </Link>
          <Link className="navbar-container-text">
            <div className="d-flex">
              <div className="d-flex align-items-center" id="icon-item">
                <i className="pi pi-search h5 m-0"></i>
              </div>
              <div className="d-flex h5 m-0">Search</div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default NavbarItem;
