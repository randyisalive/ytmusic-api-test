import { Image } from "primereact/image";
import { Link } from "react-router-dom";

function PlaylistCard({ item }) {
  return (
    <>
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
    </>
  );
}
export default PlaylistCard;
