import { useEffect, useState } from "react";
import async_Home from "./async/async_Home";

function useYoutubeData() {
  const { getAllPlaylist } = async_Home();

  const [isLoading, setIsLoading] = useState(true);
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    getAllPlaylist().then((data) => {
      setPlaylist(data);
      setIsLoading(false);
    });
  }, []);

  return { playlist, isLoading };
}

export default useYoutubeData;
