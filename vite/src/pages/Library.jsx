import React from "react";
import useLibraryData from "../function/useLibraryData";
import Loading from "./Loading";
import { Toast } from "primereact/toast";

function Library() {
  const { playlistData, isLoading, download_song, toast, toastDownload } =
    useLibraryData();

  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }
  return (
    <div className="container">
      <Toast ref={toast} />
      <Toast ref={toastDownload} />
      <div className="d-flex gap-3">
        <img
          src={playlistData.thumbnails[1].url}
          width={300}
          alt="album-thumbnail"
        />
        <div className="d-flex flex-column">
          <p className="display-6">{playlistData.title}</p>
          <div className="d-flex mt-3 gap-2">
            <span>{playlistData.privacy}</span>
            <span>
              {window.location.pathname === "/browse/LM"
                ? null
                : playlistData.author.name}
            </span>
          </div>
          <div
            className="d-flex gap-2 flex-column h-100"
            style={{ justifyContent: "space-between" }}
          >
            <div className="d-flex">
              <span>{playlistData.trackCount} Tracks</span>
              <span>{playlistData.duration}</span>
            </div>
            <div className="d-flex">
              <button
                className="btn btn-danger"
                onClick={() => {
                  download_song(
                    `https://music.youtube.com/playlist?list=${playlistData.id}`
                  );
                }}
              >
                Download All Songs
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="song-bar" className="d-flex mt-5 flex-column w-100">
        {playlistData.tracks.map((item) => {
          return (
            <>
              <div
                className="w-100 d-flex border-top"
                style={{ justifyContent: "space-between" }}
              >
                <div className="d-flex gap-2 align-items-center w-100 p-2">
                  <img
                    src={item.thumbnails[0].url}
                    alt="song-thumbnail"
                    width={80}
                  />
                  <span>{item.title}</span>
                </div>
                <div className="d-flex align-items-center w-50 gap-2">
                  <span className="text-secondary">{item.artists[0].name}</span>
                </div>

                <div className="d-flex gap-3 align-items-center">
                  <span> {item.duration}</span>
                  <button
                    className="btn btn-success"
                    onClick={() => {
                      download_song(
                        `https://music.youtube.com/watch?v=${item.videoId}&list=${playlistData.id}`
                      );
                    }}
                  >
                    Download
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Library;
