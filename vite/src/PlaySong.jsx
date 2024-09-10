import "./play-song.css";
import { useEffect } from "react";
import { motion } from "framer-motion";
import "react-h5-audio-player/lib/styles.css";
import useDownloadData from "./function/useDownloadData";

function PlaySong({ audio, AudioTemplateContext, handleAudio }) {
  const { fetchAudio, playerState, handlePlayerState, songStats } =
    useDownloadData();

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
  }, 10);

  useEffect(() => {
    handleAudio({ audio: undefined, autoPlay: false });

    if (songStats.id) {
      debouncedFetchAudio(songStats.id);
    }
  }, [songStats.id]);

  const variants = {
    open: { y: 300 },
    openOn: { zIndex: 1, y: 0 },
    // closed: { y: 100 },
    maximized: { height: "100%", y: 0 },
    // minimized: { height: "" },
  };

  return (
    <>
      <motion.div
        className="d-flex w-100"
        variants={variants}
        initial={{ y: 300 }}
        style={{ position: "absolute", left: 0, bottom: 0 }}
        animate={
          playerState.status === 0
            ? audio.audio
              ? "openOn"
              : "open"
            : playerState.status === 1
            ? "maximized"
            : "openOn"
        }
      >
        <AudioTemplateContext
          audio={audio}
          onClickHeader={() => {
            handlePlayerState(2);
          }}
          songStats={songStats}
        />
      </motion.div>
    </>
  );
}

export default PlaySong;
