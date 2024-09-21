import useYoutubeData from "../function/useYoutubeData";
import Loading from "./Loading";
import "./css/home.css";
import PlaylistCard from "../components/PlaylistCard";
import LabelDisplay from "../components/LabelDisplay";
import HomeSearchBar from "../components/Home/HomeSearchBar";
import { Outlet } from "react-router-dom";
import { useMyContext } from "../AudioTemplate";

function Home() {
  const { playlist, isLoading, handleForm, get_search, searchData, form } =
    useYoutubeData();

  const { handleAudio } = useMyContext();

  return (
    <>
      <div className="d-flex container">
        <LabelDisplay label={`Library`} />
      </div>
      <div className="mt-3 container d-flex  gap-3">
        <HomeSearchBar
          form={form}
          handleForm={handleForm}
          get_search={get_search}
          inputParams={{ form, placeholder: "Search Songs 🤗" }}
        />
      </div>

      <div
        className="d-flex mt-5 mb-5 gap-3 flex-column container"
        style={{ flexWrap: "wrap" }}
      >
        {playlist ? (
          playlist?.map((item) => {
            return (
              <>
                <PlaylistCard item={item} />
              </>
            );
          })
        ) : (
          <>
            <div className="d-flex">
              <h3>Error</h3>
            </div>
          </>
        )}
        {searchData ? <Outlet context={{ searchData, handleAudio }} /> : null}
      </div>
    </>
  );
}

export default Home;
