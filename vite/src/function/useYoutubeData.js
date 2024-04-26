import { useEffect, useState } from "react";
import { getAllPlaylist, getPlaylist, logSearch } from "./async/async_function";
import { useParams } from "react-router-dom";

function useYoutubeData() {
  const { playlist_id } = useParams();
  const [searchData, setSearchData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    getAllPlaylist().then((data) => {
      setPlaylist(data);
      setIsLoading(false);
    });
  }, []);

  return { searchData, playlist, isLoading };
}

export default useYoutubeData;
