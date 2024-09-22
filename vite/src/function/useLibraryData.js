import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { downloadSong, getPlaylist } from "./async/async_function";
import { useMyContext } from "../AudioTemplate";
import { base64ToBlob } from "./utils/base64ToBlob";

function useLibraryData() {
  const { playlist_id } = useParams();
  const [playlistData, setPlaylistData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { handleAudio } = useMyContext();

  const toast = useRef(null);

  const show = (severity, summary, detail) => {
    toast.current.show({
      severity: severity,
      summary: summary,
      detail: detail,
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

  function download_song(video_id) {
    show("info", "Info", "Downloading...");
    downloadSong(video_id).then((data) => {
      console.log(data);
      show("success", "Info", "Song Downloaded!!");
      handleAudio({
        audio_data: URL.createObjectURL(
          base64ToBlob(data.song_data.audio_data, "audio/mp4")
        ),
        video_id: data.song_data.video_id,
        author_name: data.song_data.author_name,
        title: data.song_data.song_title,
      });

      /* const songId =
        data.message === true ? data.song_data.video_id : data.video_id;
      GetDownload().then((download) => {
        const filter = download.filter((item) => item.song_id === songId);
        console.log("Filter", filter);

        filter.forEach((item) => {
          handleAudio({
            video_id: item.song_id ? item.song_id : item.video_id,
            id: item.id,
            author_name: item.author_name,
            title: item.song_title,
          });
        });
      }); */
    });
  }

  return { playlistData, isLoading, download_song, toast };
}

export default useLibraryData;
