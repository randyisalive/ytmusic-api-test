import React from "react";

function SearchVariants() {
  const navbarCardVariant = {
    initial: {},
    hover: {
      justifyContent: "space-between",
      backdropFilter: "blur(25px)",
      padding: "12px",
      borderRadius: "12px",
      background: "#FFFFFF0F",
      cursor: "pointer",
    },
  };

  return { navbarCardVariant };
}

export default SearchVariants;
