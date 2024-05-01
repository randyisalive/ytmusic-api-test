import { Link } from "react-router-dom";
import PlaylistCard from "../components/PlaylistCard";
import useYoutubeData from "../function/useYoutubeData";
import Loading from "./Loading";
import LibraryList from "../components/LibraryList";
import { Image } from "primereact/image";

function Home() {
  const { playlist, isLoading } = useYoutubeData();

  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }
  return (
    <>
      <div className="d-flex">
        <h3 className="m-0">Library</h3>
      </div>
      <div
        className="d-flex mt-5 mb-5 gap-3 flex-column "
        style={{ flexWrap: "wrap" }}
      >
        {playlist.map((item) => {
          return (
            <>
              <Link className="text-black" to={`/browse/${item.playlistId}`}>
                <div
                  className="w-100 d-flex border-top"
                  style={{ justifyContent: "space-between" }}
                >
                  <div className="d-flex gap-4 align-items-center w-100 p-2">
                    <Image src={item.thumbnails[1].url} width="80" preview />

                    <span>{item.title}</span>
                  </div>
                  <div className="d-flex align-items-center w-50 gap-2">
                    <span className="text-secondary"></span>
                  </div>

                  <div className="d-flex gap-3 align-items-center">
                    <span></span>
                  </div>
                </div>
              </Link>
              {/*   <Link to={`/browse/${item.playlistId}`}>
                <PlaylistCard
                  img={item.thumbnails[1].url}
                  playlist_name={item.title}
                />
              </Link> */}
            </>
          );
        })}
      </div>
    </>
  );
}

export default Home;
