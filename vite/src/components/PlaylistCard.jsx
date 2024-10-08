import { Image } from "primereact/image";
import { Link } from "react-router-dom";
import "./css/playlist-card.css";

function PlaylistCard({
  item,
  download_page = false,
  delete_download,
  handleAudio,
}) {
  return (
    <>
      {download_page ? (
        <div
          className="library-card"
          onClick={() =>
            handleAudio({
              video_id: item?.song_id ?? "",
              id: item?.id ?? "",
              title: item?.song_title ?? "Unknown Title",
              author_name: item?.author_name ?? "Unknown Author",
            })
          }
        >
          <div
            className="w-100 d-flex"
            style={{ justifyContent: "space-between" }}
          >
            <div className="d-flex gap-4 align-items-center me-2 p-2">
              <Image
                src={item?.img ?? "default-image-url"}
                width="100"
                preview
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            <div className="d-flex flex-column w-100 p-2">
              <span>{item?.author_name ?? "Unknown Author"}</span>
              <span>{item?.author_id ?? "Unknown ID"}</span>
              <span>{item?.song_title ?? "Unknown Title"}</span>
            </div>
            <div className="d-flex align-items-center">
              <div>
                <i
                  className="pi pi-trash"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    delete_download(item?.id ?? "");
                  }}
                ></i>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Link className="library-card" to={`/browse/${item?.playlistId ?? ""}`}>
          <div
            className="w-100 d-flex"
            style={{ justifyContent: "space-between" }}
          >
            <div className="d-flex gap-4 align-items-center w-100 p-2">
              <Image
                src={item?.thumbnails?.[1]?.url ?? "default-thumbnail-url"}
                width="80"
                preview
                onClick={(e) => e.preventDefault()}
              />

              <span>{item?.title ?? "Unknown Title"}</span>
            </div>
          </div>
        </Link>
      )}
    </>
  );
}
export default PlaylistCard;
