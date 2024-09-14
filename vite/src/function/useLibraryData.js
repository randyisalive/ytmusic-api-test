import { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { downloadSong, getPlaylist } from "./async/async_function";
import { AudioContext } from "../context/AudioContext";
import useDownloadData from "./useDownloadData";

function useLibraryData() {
  const { playlist_id } = useParams();
  const [playlistData, setPlaylistData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { handleAudio } = useContext(AudioContext);

  const { downloadData } = useDownloadData();
  console.log(downloadData);

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
    downloadSong(url).then((data) => {
      console.log(data.message);
      if (data.message === true) {
        show();
        const filter = downloadData.filter(
          (item) => item.song_id === data.song_data.video_id
        );
        filter.map((item) => {
          handleAudio({
            video_id: item.song_id,
            id: item.id,
            author_name: item.author_name,
            title: item.song_title,
          });
        });
      } else {
        show();
        const filter = downloadData.filter(
          (item) => item.song_id === data.video_id
        );
        filter.map((item) => {
          handleAudio({
            video_id: item.song_id,
            id: item.id,
            author_name: item.author_name,
            title: item.song_title,
          });
        });
      }
    });
  }

  return { playlistData, isLoading, download_song, toast, toastDownload };
}

export default useLibraryData;
