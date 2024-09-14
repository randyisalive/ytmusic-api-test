import { memo, useEffect, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import ReactPlayer from "react-player/lazy";

import { motion } from "framer-motion";
import VideoPlayer from "./Player/VideoPlayer";

function Player({ audio, playerState, handlePlayerState }) {
  const variants = {
    open: { y: "100%", opacity: 1 },
    openOn: { zIndex: 1, y: "0%" },
    maximized: { height: "", y: "70%" },
  };
  useEffect(() => {
    // This effect will run only when audio.audio changes
    console.log("audio.audio has changed:", audio);
    console.log("playerStates.status has changed:", playerState);
  }, [audio, playerState]);
  return (
    <>
      <motion.div
        className="d-flex flex-column w-100"
        variants={variants}
        initial={{ y: "0%" }}
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          zIndex: "1",
          height: "",
        }} // Temporary background color for visibility
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
        <AudioPlayer
          style={{ background: "none" }}
          className="react-h5-audio-player"
          onEnded={() => console.log("ended")}
          src={audio.audio}
          autoPlay
          header={
            <>
              <motion.div
                whileHover={{
                  textDecorationLine: "underline",
                  cursor: "pointer",
                }}
                whileFocus={{ scale: 1.2 }}
                onClick={() => handlePlayerState(2)}
                style={{ width: "fit-content" }}
              >
                {audio.title} - {audio.author_name}
              </motion.div>
            </>
          }
          onVolumeChange={(e) =>
            console.log("Volume changed:", e.target.volume)
          }
        />
      </motion.div>
    </>
  );
}

export default Player;
