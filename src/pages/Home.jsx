import useYoutubeData from "../function/useYoutubeData";
import Loading from "./Loading";
import "./css/home.css";
import PlaylistCard from "../components/PlaylistCard";
import LabelDisplay from "../components/LabelDisplay";

function Home() {
  const { playlist, isLoading } = useYoutubeData();

  return (
    <>
      <div className="d-flex">
        <LabelDisplay label={`Library`} />
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
