import { useOutletContext, useParams } from "react-router-dom";
import "./play-song.css";
import { useEffect, useState } from "react";
import useDownloadData from "../../function/useDownloadData";
import AudioPlayer from "react-h5-audio-player";

import "./play-song.css";
import "react-h5-audio-player/lib/styles.css";

function PlaySong() {
  const { fetchAudio } = useDownloadData();
  const { song_title } = useParams();
  const [audioSrc, setAudioSrc] = useState("");

  useEffect(() => {
    fetchAudio(song_title).then((data) => {
      setAudioSrc(data);
    });

    document.title = `${song_title.replace(".mp3", "")} - YT Music Downloader`;
  }, [song_title]);

  return (
    <>
      <div
        className="d-flex flex-column mt-5 song-card w-100 justify-content-center"
        id="audio-player"
      >
        <div className="d-flex mb-5">
          <span className="display-6">{song_title.replace(".mp3", "")}</span>
        </div>

        <div
          className="d-flex w-100"
          style={{ justifyContent: "space-between" }}
        >
          <div className="d-flex w-100">
            <AudioPlayer
              style={{ background: "none" }}
              className="react-h5-audio-player"
              src={audioSrc}
              // other props here
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default PlaySong;
