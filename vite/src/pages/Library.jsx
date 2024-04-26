import React from "react";
import useLibraryData from "../function/useLibraryData";
import Loading from "./Loading";
import { Toast } from "primereact/toast";
import LibraryList from "../components/LibraryList";

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
        <LibraryList
          download_song={download_song}
          playlistData={playlistData}
        />
      </div>
    </div>
  );
}

export default Library;
