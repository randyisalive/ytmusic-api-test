import { useOutletContext, useParams } from "react-router-dom";
import "./play-song.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "react-h5-audio-player/lib/styles.css";
import useDownloadData from "../../function/useDownloadData";

function PlaySong({ audio, AudioTemplateContext, handleAudio }) {
  const { fetchAudio, playerState, handlePlayerState, songStats, handleStats } =
    useDownloadData();
  const [isLoading, setLoading] = useState(true);

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const debouncedFetchAudio = debounce((id) => {
    fetchAudio(id).then((data) => {
      handleAudio({ audio: data, autoPlay: true });
    });
  }, 2000);

  useEffect(() => {
    handleAudio({ audio: undefined, autoPlay: false });

    if (songStats.id) {
      debouncedFetchAudio(songStats.id);
    }
  }, [songStats.id]);

  const variants = {
    open: { display: "none", y: 0 },
    closed: { y: 100 },
    maximized: { height: "100%" },
    minimized: { height: "" },
  };

  return (
    <>
      <motion.div
        className="d-flex w-100"
        variants={variants}
        initial={{ display: "none", zIndex: 1 }}
        style={{ position: "absolute", left: 0, bottom: 0 }}
        animate={
          playerState.status === 0
            ? "open"
            : playerState.status === 2
            ? "maximized"
            : playerState.status === 3
            ? "minimized"
            : "closed"
        }
      >
        <AudioTemplateContext
          audio={audio}
          onClickHeader={() => {
            handlePlayerState(playerState.status + 1);
          }}
          songStats={songStats}
        />
      </motion.div>
    </>
  );
}

export default PlaySong;
