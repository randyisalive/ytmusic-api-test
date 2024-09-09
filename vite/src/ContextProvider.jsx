import React, { createContext, useEffect, useMemo, useState } from "react";
import AudioPlayer from "react-h5-audio-player";

export const MyContext = createContext();

function ContextProvider({ children }) {
  const [audio, setAudio] = useState({
    audio: undefined,
    title: "",
    id: undefined,
  });
  const [playerState, setPlayerState] = useState({
    status: 0,
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

  const handlePlayerState = (value) => {
    setPlayerState({
      status: value,
    });
  };
  useEffect(() => {
    console.log("AUDIO", audio);
  }, [audio]);
  useEffect(() => {
    console.log("Player State", playerState);
  }, [playerState]);

  function AudioTemplateContext() {
    const memoizedAudioPlayer = useMemo(() => {
      return (
        <AudioPlayer
          style={{ background: "none" }}
          className="react-h5-audio-player"
          src={audio.audio}
          autoPlay
          header={audio.title}
          // other props here
        />
      );
    }, [audio.audio, audio.title]);

    return <>{memoizedAudioPlayer}</>;
  }

  return (
    <MyContext.Provider
      value={{
        audio,
        handleAudio,
        AudioTemplateContext,
        handlePlayerState,
        playerState,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default ContextProvider;
