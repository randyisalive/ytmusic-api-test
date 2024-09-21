import React, { useEffect, useState } from "react";
import api from "./api";

function usePlayerData() {
  const { AudioPlayerApi } = api();
  const { fetchAudio } = AudioPlayerApi();

  const [audio, setAudio] = useState({
    audio: "",
    title: "",
    id: undefined,
    autoPlay: false,
  });

  const handleAudio = (params) => {
    const { video_id, id, title, author_name, audio_data } = params;
    if (id) {
      fetchAudio(video_id).then((data) => {
        setAudio({
          audio: data,
          video_id: video_id,
          id: id,
          title: title,
          author_name: author_name,
        });
      });
    }
    setAudio({
      audio: audio_data,
      video_id: video_id,
      title: title,
      author_name: author_name,
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

  return { audio, handleAudio, playerState, handlePlayerState };
}

export default usePlayerData;
