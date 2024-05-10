import useYoutubeData from "../function/useYoutubeData";
import Loading from "./Loading";
import "./home.css";
import PlaylistCard from "../components/PlaylistCard";

function Home() {
  const { playlist, isLoading } = useYoutubeData();

  return (
    <>
      <div className="d-flex">
        <h3 className="m-0 text-white">Library</h3>
      </div>
      {isLoading ? <Loading /> : null}
      <div
        className="d-flex mt-5 mb-5 gap-3 flex-column "
        style={{ flexWrap: "wrap" }}
      >
        {playlist.map((item) => {
          return (
            <>
              <PlaylistCard item={item} />
            </>
          );
        })}
      </div>
    </>
  );
}

export default Home;
