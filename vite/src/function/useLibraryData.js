import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { downloadSong, getPlaylist } from "./async/async_function";

function useLibraryData() {
  const { playlist_id } = useParams();
  const [playlistData, setPlaylistData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const toast = useRef(null);
  const toastDownload = useRef(null);

  const show = () => {
    toast.current.show({
      severity: "success",
      summary: "Info",
      detail: "Song Downloaded",
    });
  };

  const showDownload = () => {
    toast.current.show({
      severity: "primary",
      summary: "Info",
      detail: "Downloading...",
    });
  };

  useEffect(() => {
    if (playlist_id != null) {
      getPlaylist(playlist_id).then((data) => {
        setIsLoading(false);
        setPlaylistData(data);
      });
    }
  }, []);

  function download_song(url) {
    showDownload();
    downloadSong(url).then((data) => {
      if (data === undefined) {
        show();
      }
    });
  }

  return { playlistData, isLoading, download_song, toast, toastDownload };
}

export default useLibraryData;
