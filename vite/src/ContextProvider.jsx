import React, { createContext, useEffect, useMemo, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import { motion } from "framer-motion";

export const MyContext = createContext();

function ContextProvider({ children }) {
  const [audio, setAudio] = useState({
    audio: undefined,
    title: "",
    id: undefined,
    autoPlay: false,
  });

  const [songStats, setSongStats] = useState({
    title: undefined,
    id: undefined,
  });

  const handleStats = (params) => {
    const { title, id } = params;
    setSongStats((prev) => ({
      ...(title && { title }),
      ...(id && { id }),
    }));
  };

  const handleAudio = (params) => {
    const { audio, autoPlay } = params;
    setAudio((prev) => ({
      ...(audio && { audio }),
      ...(autoPlay && { autoPlay }),
    }));
  };

  useEffect(() => {
    console.log("AUDIO", audio);
  }, [audio]);
  useEffect(() => {
    console.log("Song Stats", songStats);
  }, [songStats]);

  function AudioTemplateContext({ audio, onClickHeader, songStats }) {
    const memoizedAudioPlayer = useMemo(() => {
      return (
        <AudioPlayer
          style={{ background: "none" }}
          className="react-h5-audio-player"
          src={audio.audio}
          autoPlay={audio.autoPlay}
          header={
            <motion.div
              whileHover={{ textDecorationLine: "underline" }}
              onClick={onClickHeader}
              style={{ cursor: "pointer" }}
            >
              {songStats.title}
            </motion.div>
          }
          onVolumeChange={(e) =>
            console.log("Volume changed:", e.target.volume)
          }
          // other props here
        />
      );
    }, [audio.audio, songStats.title]);

    return <>{memoizedAudioPlayer}</>;
  }

  return (
    <MyContext.Provider
      value={{
        audio,
        handleAudio,
        AudioTemplateContext,
        songStats,
        handleStats,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default ContextProvider;
