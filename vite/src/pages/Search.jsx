import React from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { Image } from "primereact/image";
import { motion } from "framer-motion";
import SearchVariants from "../Variants/NavbarCard";
import useLibraryData from "../function/useLibraryData";

function Search() {
  const { search } = useParams();
  const { searchData } = useOutletContext();
  const { navbarCardVariant } = SearchVariants();
  const nav = useNavigate();

  const { download_song } = useLibraryData();

  return (
    <>
      {searchData &&
        searchData?.map((item, index) => {
          if (item.category === "Top result") {
            return (
              <React.Fragment key={index}>
                <h5 style={{ fontWeight: "bold" }}>{item.category}</h5>
                <div
                  className="p-3 py-5 w-100"
                  style={{ width: "fit-content" }}
                >
                  <div className="d-flex gap-3 align-items-center justify-content-center mb-5">
                    <Image
                      src={item.thumbnails[1]?.url}
                      imageStyle={{ borderRadius: "30rem" }}
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
                            onClick={() =>
                              (window.location.href = `https://music.youtube.com/channel/${x.id}`)
                            }
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
                  {searchData?.map((item) => {
                    if (
                      item.category === "Songs" ||
                      item.resultType === "song"
                    ) {
                      return (
                        <>
                          <motion.div
                            variants={navbarCardVariant}
                            whileHover={"hover"}
                            onClick={() =>
                              download_song(
                                `https://music.youtube.com/watch?v=${item.videoId}&list=${item.album.id}`
                              )
                            }
                            className=" mt-2 mb-3 d-flex gap-4 justify-content-start"
                          >
                            <div className="" style={{ width: "10%" }}>
                              <Image
                                height={item.thumbnails[0].height}
                                src={item.thumbnails[0].url}
                              />
                            </div>
                            <div className="d-block">
                              <p className="m-0">{item.title}</p>
                              <div className="d-flex gap-2">
                                <p>
                                  {item.resultType === "song"
                                    ? item?.resultType
                                    : item?.type}
                                </p>
                                <p>•</p>
                                <p>{item.artists[0].name}</p>
                                {(
                                  <>
                                    {item.album?.name === undefined ? (
                                      ""
                                    ) : (
                                      <p>•</p>
                                    )}
                                    <p>{item.album?.name}</p>
                                  </>
                                ) ?? ""}
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
