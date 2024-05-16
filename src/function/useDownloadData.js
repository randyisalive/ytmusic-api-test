import { useEffect, useState } from "react";
import async_Download from "./async/async_Download";

function useDownloadData() {
  const { GetDownload, DeleteDownload, fetchAudio } = async_Download();
  const [downloadData, setDownloadData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    get_download_data();
  }, []);

  function get_download_data() {
    GetDownload().then((data) => {
      setDownloadData(data);
      console.log(data);
      setIsLoading(false);
    });
  }

  function delete_download(song_title) {
    DeleteDownload(song_title).then((data) => {
      console.log(data);
      get_download_data();
    });
  }

  return { downloadData, isLoading, delete_download, fetchAudio };
}

export default useDownloadData;
