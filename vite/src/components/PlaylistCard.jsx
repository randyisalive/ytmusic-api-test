import { Image } from "primereact/image";
import { Link } from "react-router-dom";
import "./css/playlist-card.css";

function PlaylistCard({ item, download_page = false, delete_download }) {
  return (
    <>
      {download_page ? (
        <div className="library-card">
          <div
            className="w-100 d-flex"
            style={{ justifyContent: "space-between" }}
          >
            <div className="d-flex gap-4 align-items-center w-100 p-2">
              <span>{item.song_title.replace(".mp3", "")}</span>
            </div>
            <div className="d-block">
              <button className="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
      ) : (
        <Link className=" library-card" to={`/browse/${item.playlistId}`}>
          <div
            className="w-100 d-flex"
            style={{ justifyContent: "space-between" }}
          >
            <div className="d-flex gap-4 align-items-center w-100 p-2">
              <Image src={item.thumbnails[1].url} width="80" preview />

              <span>{item.title}</span>
            </div>
          </div>
        </Link>
      )}
    </>
  );
}
export default PlaylistCard;
