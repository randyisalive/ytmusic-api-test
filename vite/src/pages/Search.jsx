import React from "react";
import useYoutubeData from "../function/useYoutubeData";
import { useOutletContext, useParams } from "react-router-dom";
import { Image } from "primereact/image";

function Search() {
  const { search } = useParams();
  const { searchData } = useOutletContext();

  return (
    <>
      {searchData &&
        searchData.map((item, index) => {
          if (item.category === "Top result") {
            return (
              <React.Fragment key={index}>
                <h5 style={{ fontWeight: "bold" }}>{item.category}</h5>
                <div
                  className="navbar-card p-3 py-5 w-50"
                  style={{ width: "fit-content" }}
                >
                  <div className="d-flex gap-3 align-items-center justify-content-center mb-5">
                    <Image
                      src={item.thumbnails[1].url}
                      imageStyle={{ borderRadius: "30rem" }}
                    />
                    <div className="d-block">
                      {item.artists.map((x, artistIndex) => (
                        <div className="d-flex" key={artistIndex}>
                          <p className="m-0" style={{ fontWeight: "bold" }}>
                            {x.name}
                          </p>
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
                  {searchData.map((item) => {
                    if (
                      item.resultType === "song" ||
                      item.category === null ||
                      item.resultType === "album"
                    ) {
                      return (
                        <>
                          <div className="navbar-card mt-2 d-flex gap-4 justify-content-start">
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
                          </div>
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
