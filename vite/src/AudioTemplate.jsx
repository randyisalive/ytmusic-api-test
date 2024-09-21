import usePlayerData from "./function/usePlayerData";
import { AudioContext } from "./context/AudioContext";
import "react-h5-audio-player/lib/styles.css";
import "primereact/resources/themes/saga-blue/theme.css"; // Import PrimeReact theme

import Player from "./Player";
import { useContext, useRef } from "react";

export function AudioTemplate({ children }) {
  const { audio, handleAudio, playerState, handlePlayerState } =
    usePlayerData();

  return (
    <AudioContext.Provider
      value={{ audio, handleAudio, playerState, handlePlayerState }}
    >
      <Player
        audio={audio}
        handlePlayerState={handlePlayerState}
        playerState={playerState}
      />
      {children}
    </AudioContext.Provider>
  );
}

export const useMyContext = () => useContext(AudioContext);
