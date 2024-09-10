import LabelDisplay from "../components/LabelDisplay";
import PlaylistCard from "../components/PlaylistCard";
import { Link, Outlet } from "react-router-dom";
import useDownloadData from "../function/useDownloadData";

function Download() {
  const {
    isLoading,
    downloadData,
    delete_download,
    handleAudio,
    songStats,
    handleStats,
  } = useDownloadData();
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
                <PlaylistCard
                  key={item.song_title}
                  item={item}
                  songStats={songStats}
                  handleStats={handleStats}
                  download_page={true}
                  handleAudio={handleAudio}
                  delete_download={delete_download}
                />
              </>
            );
          })}
        </div>
      )}
    </>
  );
}

export default Download;
