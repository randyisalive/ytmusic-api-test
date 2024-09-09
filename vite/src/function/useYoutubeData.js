import { useEffect, useState } from "react";
import api from "./api";

function useYoutubeData() {
  const { Home } = api();
  const { getAllPlaylist } = Home();

  const [isLoading, setIsLoading] = useState(true);
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    getAllPlaylist().then((data) => {
      setPlaylist(data);
      setIsLoading(false);
    });
    document.title = "YT Music Downloader - Home";
  }, []);

  return { playlist, isLoading };
}

export default useYoutubeData;
