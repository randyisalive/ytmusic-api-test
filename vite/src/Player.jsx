import { memo, useEffect } from "react";
import AudioPlayer from "react-h5-audio-player";
import { motion } from "framer-motion";

function Player({ audio, playerState, handlePlayerState }) {
  const variants = {
    open: { y: 300 },
    openOn: { zIndex: 1, y: 0 },
    maximized: { height: "100%", y: 0 },
  };
  /*   useEffect(() => {
    // This effect will run only when audio.audio changes
    console.log("audio.audio has changed:", audio.audio);
  }, [audio.audio]); */
  return (
    <>
      <motion.div
        className="d-flex flex-column w-100"
        variants={variants}
        initial={{ y: 300 }}
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          zIndex: "1",
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
          src={audio.audio}
          autoPlay
          header={
            <motion.div
              whileHover={{ textDecorationLine: "underline" }}
              onClick={() => handlePlayerState(2)}
              style={{ cursor: "pointer" }}
            >
              {audio.title}
            </motion.div>
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
