import { useEffect, useState } from "react";
import api from "./api";

function useDownloadData() {
  const { DownloadApi } = api();
  const { GetDownload, DeleteDownload, fetchAudio } = DownloadApi();
  const [downloadData, setDownloadData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    get_download_data();
  }, [refresh]);

  useEffect(() => {
    if (downloadData.length >= 0) {
      console.log("Download Data: ", downloadData);
    }
  }, [downloadData]);

  function get_download_data() {
    GetDownload().then((data) => {
      setDownloadData(data);
      setIsLoading(false);
    });
  }

  function dowload_song() {}

  function delete_download(id) {
    DeleteDownload(id).then((data) => {
      console.log(data);
      setRefresh(!refresh);
    });
  }

  return {
    downloadData,
    isLoading,
    delete_download,
    fetchAudio,
    setRefresh,
    GetDownload,
  };
}

export default useDownloadData;
