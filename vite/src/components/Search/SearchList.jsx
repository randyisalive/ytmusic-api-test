import React from "react";
import SearchVariants from "../../Variants/NavbarCard";
import { motion } from "framer-motion";
import useLibraryData from "../../function/useLibraryData";
import { Image } from "primereact/image";
import ShowAllButton from "./ShowAllButton";
import { Toast } from "primereact/toast";
import { useMyContext } from "../../AudioTemplate";

function SearchList({
  searchData,
  category = "Videos" || "Songs",
  resultType = "video" || "song",
  imgSize,
}) {
  const { navbarCardVariant } = SearchVariants();
  const { handleAudio } = useMyContext();
  const { download_song, toast } = useLibraryData();

  return (
    <>
      <div>
        <Toast ref={toast} />
        <div className="d-flex mb-4 mt-5">
          <span className="h3" style={{ fontWeight: "bold" }}>
            {category}
          </span>
        </div>
        {searchData?.map((item) => {
          if (item.category === category || item.resultType === resultType) {
            return (
              <>
                <motion.div
                  variants={navbarCardVariant}
                  whileHover={"hover"}
                  onClick={() => {
                    download_song(
                      `https://music.youtube.com/watch?v=${item.videoId}`
                    );
                  }}
                  className=" mt-2 mb-3 d-flex gap-4 justify-content-start"
                >
                  <div className="me-3" style={{ width: "10%" }}>
                    <Image height={imgSize} src={item.thumbnails[0]?.url} />
                  </div>
                  <div className="d-block">
                    <p className="m-0">{item.title}</p>
                    <div className="d-flex gap-2" style={{ color: "#e0dadb" }}>
                      <p>{item.resultType ? item?.resultType : item?.type}</p>
                      <p>•</p>
                      <p>{item.artists?.[0]?.name}</p>
                      {(
                        <>
                          {item.album?.name === undefined ? "" : <p>•</p>}
                          <p>{item.album?.name}</p>
                        </>
                      ) ?? ""}
                      {item?.views ? (
                        <>
                          <p>•</p>
                          <p>{item.views}</p>
                        </>
                      ) : (
                        ""
                      )}
                      {item?.duration ? (
                        <>
                          <p>•</p>
                          <p>{item.duration}</p>
                        </>
                      ) : (
                        ""
                      )}
                      {item?.year ? (
                        <>
                          <p>•</p>
                          <p>{item.year}</p>
                        </>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </motion.div>
              </>
            );
          }
        })}
        <ShowAllButton title={"Show All"} />
      </div>
    </>
  );
}

export default SearchList;
