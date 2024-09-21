import React from "react";
import { motion } from "framer-motion";

function HomeSearchBar({ handleForm, get_search = null, inputParams }) {
  return (
    <>
      <div className="d-flex align-items-center gap-3">
        <input
          type="text"
          id="search-bar"
          name="search"
          value={inputParams.form}
          onChange={(e) => handleForm(e)}
          className="form-control text-white"
          placeholder={inputParams?.placeholder}
          style={{ borderRadius: "30rem", backgroundColor: "rgba(0,0,0,0)" }}
        />

        <motion.i
          whileHover={{
            scale: 1.2,
            cursor: "pointer",
          }}
          className="pi pi-search"
          onClick={() => {
            get_search();
          }}
          style={{ fontSize: "1.3rem" }}
        ></motion.i>
      </div>
    </>
  );
}

export default HomeSearchBar;
