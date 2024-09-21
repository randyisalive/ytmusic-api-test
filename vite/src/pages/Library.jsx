import useLibraryData from "../function/useLibraryData";
import Loading from "./Loading";
import usePlayerData from "./../function/usePlayerData";
import { Toast } from "primereact/toast";
import LibraryList from "../components/LibraryList";
import "./css/library.css";

function Library() {
  const { playlistData, isLoading, download_song, toast, toastDownload } =
    useLibraryData();

  const { handleAudio } = usePlayerData();

  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <div className="container text-white">
      <Toast ref={toast} />
      <Toast ref={toastDownload} />
      <div className="d-flex gap-3" id="title-library-container">
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
                ? playlistData.author?.name
                : null}
            </span>
          </div>
          <div
            className="d-flex gap-2 flex-column h-100"
            style={{ justifyContent: "space-between" }}
          >
            <div className="d-flex flex-column">
              <span>{playlistData.trackCount} Tracks</span>
              <span>{playlistData.duration}</span>
            </div>
          </div>
        </div>
      </div>
      <div id="song-bar" className="d-flex mt-5 flex-column w-100">
        <LibraryList
          download_song={download_song}
          playlistData={playlistData}
          handleAudio={handleAudio}
        />
      </div>
    </div>
  );
}

export default Library;
