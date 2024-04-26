import { Link } from "react-router-dom";
import PlaylistCard from "../components/PlaylistCard";
import useYoutubeData from "../function/useYoutubeData";
import Loading from "./Loading";

function Home() {
  const { playlist, isLoading } = useYoutubeData();

  if (isLoading) {
    return (
      <>
        <Loading />s
      </>
    );
  }
  return (
    <>
      <div className="d-flex">
        <h3 className="m-0">Library</h3>
      </div>
      <div className="d-flex mt-5 gap-3 " style={{ flexWrap: "wrap" }}>
        {playlist.map((item) => {
          return (
            <>
              <Link to={`/browse/${item.playlistId}`}>
                <PlaylistCard
                  img={item.thumbnails[1].url}
                  playlist_name={item.title}
                />
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Home;
