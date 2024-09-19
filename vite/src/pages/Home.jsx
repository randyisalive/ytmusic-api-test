import useYoutubeData from "../function/useYoutubeData";
import Loading from "./Loading";
import "./css/home.css";
import PlaylistCard from "../components/PlaylistCard";
import LabelDisplay from "../components/LabelDisplay";
import HomeSearchBar from "../components/Home/HomeSearchBar";
import { Outlet } from "react-router-dom";

function Home() {
  const { playlist, isLoading, handleForm, get_search, searchData, form } =
    useYoutubeData();

  return (
    <>
      <div className="d-flex">
        <LabelDisplay label={`Library`} />
      </div>
      <div className="mt-3 d-flex w-50 align-items-center gap-3">
        <HomeSearchBar
          form={form}
          handleForm={handleForm}
          get_search={get_search}
        />
      </div>

      {isLoading ? <Loading /> : null}
      <div
        className="d-flex mt-5 mb-5 gap-3 flex-column "
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
        <Outlet context={{ searchData }} />
      </div>
    </>
  );
}

export default Home;
