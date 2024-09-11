import React, { useEffect, useState } from "react";
import Download from "../pages/Download";
import api from "./api";

function usePlayerData() {
  const [refresh, setRefresh] = useState(false);
  const { AudioPlayerApi } = api();
  const { fetchAudio } = AudioPlayerApi();

  const [audio, setAudio] = useState({
    audio: "",
    title: "",
    id: undefined,
    autoPlay: false,
  });

  const handleAudio = (params) => {
    const { title, id } = params;
    fetchAudio(id).then((data) => {
      setAudio({ audio: data, title: title, id: id });
    });
  };

  // audio player state
  const [playerState, setPlayerState] = useState({
    status: 0,
  });

  const handlePlayerState = (var_len) => {
    setPlayerState((prev) => ({
      status: (prev.status + 1) % var_len, // Cycle through 0, 1, 2, 3
    }));
  };

  useEffect(() => {
    console.log("Audio:", audio);
    console.log("playerState:", playerState);
  }, [audio, playerState]);

  return { audio, handleAudio, playerState, handlePlayerState };
}

export default usePlayerData;
