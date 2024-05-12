import { Link } from "react-router-dom";
import "./css/navbar-item.css";

function NavbarItem() {
  const navbarItem = [
    { id: 1, icon: "book", link: "/", label: "Library" },
    { id: 2, icon: "search", link: "/search", label: "Search" },
    { id: 3, icon: "download", link: "/download", label: "Download" },
    {
      id: 4,
      icon: "youtube",
      link: "https://music.youtube.com/",
      label: "Youtube Music",
    },
  ];
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
          {navbarItem.map((item) => {
            return (
              <>
                <Link className="navbar-container-text" to={`${item.link}`}>
                  <div className="d-flex ">
                    <div className="d-flex align-items-center" id="icon-item">
                      <i className={`pi pi-${item.icon} h5 m-0`}></i>
                    </div>
                    <div className="d-flex h5 m-0">{`${item.label}`}</div>
                  </div>
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default NavbarItem;
