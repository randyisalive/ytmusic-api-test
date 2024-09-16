import React from "react";
import useYoutubeData from "../function/useYoutubeData";
import { useOutletContext, useParams } from "react-router-dom";

function Search() {
  const { search } = useParams();
  const { searchData } = useOutletContext();

  return (
    <>
      <div></div>
      {searchData.map((item) => {
        if (item.category === "Top result") {
          return <>{item.resultType}</>;
        }
        return <>adasdasd</>;
      })}
    </>
  );
}

export default Search;
