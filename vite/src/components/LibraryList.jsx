import { Image } from "primereact/image";
import "./css/library-list.css";
import { Link } from "react-router-dom";

function LibraryList({ download_song, playlistData }) {
  return (
    <>
      {playlistData.tracks.map((item) => {
        return (
          <>
            <Link to={`/download/${item.title}.mp3`}>
              <div
                className="w-100 d-flex hover-card p-3 text-white"
                style={{ justifyContent: "space-between" }}
              >
                <div className="d-flex gap-2 align-items-center w-100 p-2">
                  <Image
                    src={item.thumbnails[0].url}
                    width="80"
                    preview
                    onClick={(e) => e.preventDefault()}
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
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      download_song(
                        `https://music.youtube.com/watch?v=${item.videoId}&list=${playlistData.id}`
                      );
                    }}
                  >
                    Download
                  </button>
                </div>
              </div>
            </Link>
          </>
        );
      })}
    </>
  );
}

export default LibraryList;
