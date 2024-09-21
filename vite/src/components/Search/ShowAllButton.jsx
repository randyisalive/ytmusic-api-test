import React from "react";
import { motion } from "framer-motion";

function ShowAllButton({ title }) {
  return (
    <div className="d-flex">
      <motion.button
        className="px-3 py-2"
        whileHover={{ backgroundColor: "rgba(204,204,204,0.2)" }}
        style={{
          border: "1px solid  #cccccc",
          borderRadius: "30rem",
          fontWeight: "bold",
          color: "white",
          backgroundColor: "rgba(0,0,0,0)",
          fontSize: "14px",
          transition: { duration: 0 },
        }}
      >
        {title}
      </motion.button>
    </div>
  );
}

export default ShowAllButton;
