import React from "react";
import { useOutletContext } from "react-router-dom";
import { Image } from "primereact/image";
import { motion } from "framer-motion";
import SearchVariants from "../Variants/NavbarCard";
import ShowAllButton from "../components/Search/ShowAllButton";
import SearchList from "../components/Search/SearchList";
import TopResultContainer from "../components/Search/TopResultContainer";

function Search() {
  const { searchData } = useOutletContext();

  return (
    <>
      <TopResultContainer searchData={searchData} />
      <SearchList
        searchData={searchData}
        category="Songs"
        resultType="song"
        imgSize={60}
      />
      <SearchList searchData={searchData} category="Videos" imgSize={40} />
      <SearchList
        searchData={searchData}
        category="Albums"
        resultType="album"
        imgSize={60}
      />
      <SearchList
        searchData={searchData}
        category="Featured playlists"
        resultType="playlist"
        imgSize={50}
      />
    </>
  );
}

export default Search;
