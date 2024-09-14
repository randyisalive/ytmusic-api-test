import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Footer({ expand }) {
  const footerData = [
    {
      icon: "github",
      label: "randyisalive",
      link: "https://github.com/randyisalive",
    },
    {
      icon: "instagram",
      label: "rendyzvous",
      link: "https://www.instagram.com/rendyzvous/",
    },
  ];
  return (
    <>
      <div
        className="d-flex flex-column gap-4 p-3 navbar-container text-white w-100 rounded-8 mb-5"
        style={{ minHeight: "250px", height: "30%" }}
      >
        {footerData.map((item) => {
          return (
            <>
              <Link
                className="text-white navbar-container-text"
                style={{ width: "fit-content" }}
                to={`${item.link}`}
              >
                <div
                  className="d-flex w-100 gap-3 align-items-center "
                  style={{ height: "fit-content" }}
                >
                  <i
                    className={`pi pi-${item.icon}`}
                    style={{ fontSize: "1.2rem" }}
                  ></i>
                  <motion.span
                    animate={
                      expand ? { fontSize: "1.2rem" } : { fontSize: "0" }
                    }
                  >
                    {item.label}
                  </motion.span>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Footer;
