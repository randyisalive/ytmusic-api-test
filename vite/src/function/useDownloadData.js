import { useEffect, useState } from "react";
import api from "./api";

function useDownloadData() {
  const { DownloadApi } = api();
  const { GetDownload, DeleteDownload, fetchAudio } = DownloadApi();
  const [downloadData, setDownloadData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [playerState, setPlayerState] = useState({
    status: 0,
  });

  const handlePlayerState = (var_len) => {
    setPlayerState((prev) => ({
      status: (prev.status + 1) % var_len, // Cycle through 0, 1, 2, 3
    }));
  };

  useEffect(() => {
    get_download_data();
  }, [refresh]);

  useEffect(() => {
    if (downloadData.length >= 0) {
      console.log("Download Data: ", downloadData);
    }
  }, [downloadData]);

  useEffect(() => {
    console.log("PlayerState Data: ", playerState);
  }, [playerState]);

  function get_download_data() {
    GetDownload().then((data) => {
      setDownloadData(data);
      setIsLoading(false);
    });
  }

  function delete_download(song_title) {
    DeleteDownload(song_title).then((data) => {
      console.log(data);
      setRefresh(!refresh);
    });
  }

  return {
    downloadData,
    isLoading,
    delete_download,
    fetchAudio,
    playerState,
    handlePlayerState,
  };
}

export default useDownloadData;
