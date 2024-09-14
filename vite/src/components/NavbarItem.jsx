import { Link } from "react-router-dom";
import "./css/navbar-item.css";
import { useState } from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";

function NavbarItem() {
  const [expand, setExpand] = useState(false);
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

  return (
    <>
      <motion.div
        animate={expand ? { width: "300px" } : { width: "78px" }}
        id="outer-container-navbar"
        style={{ justifyContent: "space-between" }}
        className="p-2 navbar-container d-flex flex-column"
      >
        <motion.div
          animate={expand ? { width: "250px", opacity: 1 } : { width: "58px" }}
          className=" p-3 gap-3 navbar-card d-flex flex-column"
          style={{ width: "fit-content" }}
        >
          <motion.div className="d-flex align-items-center mb-3">
            <motion.div
              animate={expand ? {} : { opacity: 1 }}
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
            <motion.div
              className="d-flex gap-2"
              initial={{ opacity: 0 }}
              animate={expand ? { opacity: 1 } : { opacity: 0 }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Youtube_Music_icon.svg/2048px-Youtube_Music_icon.svg.png"
                alt=""
                width={50}
              />

              <label htmlFor="" className="h5 m-0 text-white">
                YT Music Downloader
              </label>
            </motion.div>
          </motion.div>
          <motion.div
            animate={
              expand
                ? { scale: 1, width: "fit-content" }
                : {
                    opacity: 1,
                    display: "none",
                    width: "20px",
                  }
            }
            className="d-flex flex-column gap-3 w-100"
          >
            {navbarItem.map((item) => {
              return (
                <>
                  <Link className="navbar-container-text" to={`${item.link}`}>
                    <motion.div
                      animate={
                        expand
                          ? { opacity: 1, width: "100%" }
                          : { opacity: 1, width: "fit-content" }
                      }
                      className={`d-flex ${
                        expand ? null : "justify-content-center"
                      } `}
                    >
                      <motion.div
                        animate={expand ? { width: "20%" } : {}}
                        className="d-flex"
                        id="icon-item"
                      >
                        <i className={`pi pi-${item.icon} h5 m-0`}></i>
                      </motion.div>

                      <motion.div
                        animate={
                          expand
                            ? { opacity: 1 }
                            : { opacity: 0, fontSize: "0px" }
                        }
                        className="d-flex h5 m-0 w-100 "
                      >{`${item.label}`}</motion.div>
                    </motion.div>
                  </Link>
                </>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div animate={expand ? { opacity: 1 } : { opacity: 1 }}>
          <Footer expand={expand} />
        </motion.div>
      </motion.div>
    </>
  );
}

export default NavbarItem;
