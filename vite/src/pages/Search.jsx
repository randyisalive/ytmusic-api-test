import React from "react";
import { useOutletContext } from "react-router-dom";
import { Image } from "primereact/image";
import { motion } from "framer-motion";
import SearchVariants from "../Variants/NavbarCard";
import ShowAllButton from "../components/Search/ShowAllButton";
import SearchList from "../components/Search/SearchList";

function Search() {
  const { searchData } = useOutletContext();

  return (
    <>
      {searchData &&
        searchData?.map((item, index) => {
          if (item.category === "Top result") {
            return (
              <React.Fragment key={index}>
                <h3 className="mt-4" style={{ fontWeight: "bold" }}>
                  {item.category}
                </h3>
                <div className="p-3 " style={{ width: "fit-content" }}>
                  <div className="d-flex gap-3 align-items-center mb-5">
                    <Image
                      src={item.thumbnails[1]?.url}
                      imageStyle={{ borderRadius: "30rem" }}
                      preview
                    />
                    <div className="d-block">
                      {item.artists?.map((x, artistIndex) => (
                        <div className="d-flex" key={artistIndex}>
                          <motion.p
                            className="m-0"
                            whileHover={{
                              cursor: "pointer",
                              textDecoration: "underline",
                            }}
                            onClick={() => {
                              window.location.href = `https://music.youtube.com/channel/${x.id}`;
                            }}
                            style={{ fontWeight: "bold" }}
                          >
                            {x.name}
                          </motion.p>
                          {/* <p>{x.id}</p> */}
                        </div>
                      ))}
                      <div
                        className="d-flex gap-2"
                        style={{ color: "#E5E5E5" }}
                      >
                        <div>{item.resultType}</div>
                        <div>•</div>
                        <div>{item.subscribers} subscribers</div>
                      </div>
                    </div>
                  </div>
                  <SearchList
                    searchData={searchData}
                    category="Songs"
                    resultType="song"
                    imgSize={60}
                  />
                  <SearchList
                    searchData={searchData}
                    category="Videos"
                    imgSize={40}
                  />
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
                </div>
              </React.Fragment>
            );
          }
          return null;
        })}
    </>
  );
}

export default Search;
