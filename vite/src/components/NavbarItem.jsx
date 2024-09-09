import { Link } from "react-router-dom";
import "./css/navbar-item.css";
import { useState } from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";

function NavbarItem() {
  const [expand, setExpand] = useState(true);
  const navbarItem = [
    { id: 1, icon: "book", link: "/", label: "Library" },
    { id: 2, icon: "info", link: "/about", label: "About" },
    { id: 3, icon: "download", link: "/download", label: "Download" },
    {
      id: 4,
      icon: "youtube",
      link: "https://music.youtube.com/",
      label: "Youtube Music",
    },
  ];

  const variants = {
    min: { borderRadius: "0", maxWidth: "0", justifyContent: "space-between" },
    max: {
      maxWidth: "350px",
    },
    minBox: {
      width: "fit-content",
    },
  };
  return (
    <>
      <motion.div
        variants={variants}
        initial="min"
        animate="max"
        id="outer-container-navbar"
        className="p-2 navbar-container d-flex flex-column"
      >
        <motion.div
          variants={variants}
          animate={expand ? "max" : "min"}
          className=" p-3 gap-3 navbar-card d-flex flex-column"
          style={{ width: "fit-content" }}
        >
          <div className="d-flex align-items-center gap-2 mb-5">
            <motion.div
              whileHover={{
                scale: 1.1,
              }}
              className="d-flex me-3"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setExpand(!expand);
              }}
            >
              <i
                className="pi pi-bars text-white"
                style={{ fontSize: "1.5rem" }}
              ></i>
            </motion.div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Youtube_Music_icon.svg/2048px-Youtube_Music_icon.svg.png"
              alt=""
              width={50}
            />
            {expand ? (
              <label htmlFor="" className="h5 m-0 text-white">
                YT Music Downloader
              </label>
            ) : null}
          </div>
          {navbarItem.map((item) => {
            return (
              <>
                <Link className="navbar-container-text" to={`${item.link}`}>
                  <div
                    className={`d-flex ${
                      expand ? null : "justify-content-center"
                    } `}
                  >
                    <div className="d-flex align-items-center" id="icon-item">
                      <i className={`pi pi-${item.icon} h5 m-0`}></i>
                    </div>
                    {expand ? (
                      <div className="d-flex h5 m-0">{`${item.label}`}</div>
                    ) : null}
                  </div>
                </Link>
              </>
            );
          })}
        </motion.div>

        <Footer />
      </motion.div>
    </>
  );
}

export default NavbarItem;
