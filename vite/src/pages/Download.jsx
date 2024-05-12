import LabelDisplay from "../components/LabelDisplay";
import PlaylistCard from "../components/PlaylistCard";
import { Link, Outlet } from "react-router-dom";
import useDownloadData from "../function/useDownloadData";

function Download() {
  const { isLoading, downloadData, delete_download } = useDownloadData();
  return (
    <>
      <Link
        to={`/download`}
        className="d-flex"
        style={{ width: "fit-content" }}
      >
        <LabelDisplay label={`Download`} />
      </Link>

      <Outlet context={{ delete_download }} />
      {isLoading ? null : (
        <div className="d-flex gap-3 flex-column mt-5">
          {downloadData.map((item) => {
            return (
              <>
                <Link to={item.song_title}>
                  <PlaylistCard
                    item={item}
                    download_page={true}
                    delete_download={delete_download}
                  />
                </Link>
              </>
            );
          })}
        </div>
      )}
    </>
  );
}

export default Download;
