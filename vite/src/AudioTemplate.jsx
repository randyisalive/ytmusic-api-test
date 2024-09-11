import { useMemo } from "react";
import AudioPlayer from "react-h5-audio-player";
import { motion } from "framer-motion";
import usePlayerData from "./function/usePlayerData";
import { AudioContext } from "./context/AudioContext";
import "react-h5-audio-player/lib/styles.css";

export function AudioTemplate({ children }) {
  const { audio, handleAudio, playerState, handlePlayerState } =
    usePlayerData();

  console.log("Audio:", audio);
  console.log("Player State:", playerState);

  const variants = {
    open: { y: 300 },
    openOn: { zIndex: 1, y: 0 },
    maximized: { height: "100%", y: 0 },
  };

  const memoizedAudioPlayer = useMemo(
    () => (
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
          <div className="d-flex bg-danger justify-content-end">
            <div className="d-flex bg-primary" style={{ width: "86.2%" }}>
              asd
            </div>
          </div>
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
    ),
    [audio, playerState]
  );

  return (
    <AudioContext.Provider
      value={{ audio, handleAudio, playerState, handlePlayerState }}
    >
      {memoizedAudioPlayer}
      {children}
    </AudioContext.Provider>
  );
}
