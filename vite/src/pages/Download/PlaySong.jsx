import { useOutletContext, useParams } from "react-router-dom";
import "./play-song.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./play-song.css";
import "react-h5-audio-player/lib/styles.css";

function PlaySong({
  audio,
  AudioTemplateContext,
  fetchAudio,
  handleAudio,
  handlePlayerState,
  playerState,
}) {
  useEffect(() => {
    if (audio.id) {
      fetchAudio(audio.id).then((data) => {
        const audio = data;
        handleAudio({ audio: audio });
      });
    }
    console.log(audio);
  }, [audio.id]);

  const variants = {
    open: { display: "none", y: 0 },
    closed: { y: 100 },
    maximized: { height: "100%" },
  };

  return (
    <>
      <motion.div
        className="d-flex w-100"
        variants={variants}
        initial={{ display: "none", zIndex: 1 }}
        onClick={(e, i) => handlePlayerState(2)}
        style={{ position: "absolute", left: 0, bottom: 0 }}
        animate={
          playerState.status === 0
            ? "open"
            : playerState.status === 2
            ? "maximized"
            : null
        }
      >
        <AudioTemplateContext />
      </motion.div>
    </>
  );
}

export default PlaySong;
