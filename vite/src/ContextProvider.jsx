import React, { createContext, useEffect, useMemo, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import { motion } from "framer-motion";

export const MyContext = createContext();

function ContextProvider({ children }) {
  const [audio, setAudio] = useState({
    audio: undefined,
    title: "",
    id: undefined,
  });

  const handleAudio = (params) => {
    const { audio, title, id } = params;
    setAudio((prev) => ({
      ...prev,
      ...(audio && { audio }),
      ...(title && { title }),
      ...(id && { id }),
    }));
  };

  /*  const handlePlayerState = (value) => {
    setPlayerState({
      status: value,
    });
  }; */
  useEffect(() => {
    console.log("AUDIO", audio);
  }, [audio]);

  function AudioTemplateContext({ audio, onClickHeader }) {
    const memoizedAudioPlayer = useMemo(() => {
      return (
        <AudioPlayer
          style={{ background: "none" }}
          className="react-h5-audio-player"
          src={audio.audio}
          autoPlay
          header={
            <motion.div
              whileHover={{ textDecorationLine: "underline" }}
              onClick={onClickHeader}
              style={{ cursor: "pointer" }}
            >
              {audio.title}
            </motion.div>
          }
          onVolumeChange={(e) =>
            console.log("Volume changed:", e.target.volume)
          }
          // other props here
        />
      );
    }, [audio.audio, audio.title, onClickHeader]);

    return <>{memoizedAudioPlayer}</>;
  }

  return (
    <MyContext.Provider
      value={{
        audio,
        handleAudio,
        AudioTemplateContext,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default ContextProvider;
