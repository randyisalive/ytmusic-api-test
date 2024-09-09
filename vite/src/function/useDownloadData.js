import { useContext, useEffect, useState } from "react";
import api from "./api";
import { MyContext } from "../ContextProvider";

function useDownloadData() {
  const { audio, handleAudio, AudioTemplateContext } = useContext(MyContext);
  const { Download } = api();
  const { GetDownload, DeleteDownload, fetchAudio } = Download();
  const [downloadData, setDownloadData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [playerState, setPlayerState] = useState({
    status: 0,
  });

  const handlePlayerState = (value) => {
    setPlayerState({
      status: value,
    });
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
    audio,
    handleAudio,
    AudioTemplateContext,
    playerState,
    handlePlayerState,
  };
}

export default useDownloadData;
