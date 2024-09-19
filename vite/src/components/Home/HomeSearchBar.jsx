import React from "react";
import { motion } from "framer-motion";

function HomeSearchBar({ handleForm, get_search, form }) {
  return (
    <>
      <input
        type="text"
        id="search-bar"
        name="search"
        value={form?.search}
        onChange={(e) => handleForm(e)}
        className="form-control text-white"
        placeholder="search song..."
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
    </>
  );
}

export default HomeSearchBar;
