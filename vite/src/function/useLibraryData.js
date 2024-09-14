import { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { downloadSong, getPlaylist } from "./async/async_function";
import { AudioContext } from "../context/AudioContext";

function useLibraryData() {
  const { playlist_id } = useParams();
  const [playlistData, setPlaylistData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { handleAudio } = useContext(AudioContext);

  const toast = useRef(null);
  const toastDownload = useRef(null);

  const show = () => {
    toastDownload.current.show({
      severity: "success",
      summary: "Info",
      detail: "Song Downloaded!!",
    });
  };

  const toastOff = (key) => {
    toast.current.clear(key);
  };

  const showDownload = () => {
    toast.current.show({
      severity: "primary",
      summary: "Info",
      detail: "Downloading...",
      key: "downloadToast",
      life: "999999999",
    });
  };

  useEffect(() => {
    if (playlist_id != null) {
      getPlaylist(playlist_id).then((data) => {
        setPlaylistData(data);
        setIsLoading(false);
      });
    }
  }, []);
  useEffect(() => {
    console.log("Playlist Data", playlistData);
  }, [playlistData]);

  useEffect(() => {
    if (playlistData && playlistData.title) {
      document.title = `${playlistData.title} - YT Music Downloader`;
    }
  }, [playlistData]);

  function download_song(url) {
    showDownload();
    downloadSong(url).then((data) => {
      console.log(data);
      if (data.message === true) {
        toastOff("downloadToast");
        show();
        handleAudio({ video_id: data.song_data.video_id, id: 1 });
      }
    });
  }

  return { playlistData, isLoading, download_song, toast, toastDownload };
}

export default useLibraryData;
