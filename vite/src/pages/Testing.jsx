import React, { useEffect, useState } from "react";
import global_const from "../function/global_const";

function Testing() {
  const [audioSrc, setAudioSrc] = useState("");
  const { url_local } = global_const();

  useEffect(() => {
    const fetchAudio = async () => {
      try {
        const response = await fetch(url_local + "/api/get-audio", {
          responseType: "blob",
        });
        if (!response.ok) {
          throw new Error("ERROR");
        }
        const audioBlob = await response.blob();
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioSrc(audioUrl);
      } catch (error) {
        console.error("Error fetching audio:", error);
      }
    };
    fetchAudio();
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          console.log(audioSrc);
        }}
      >
        open blob
      </button>
      <audio controls src={audioSrc} />
    </div>
  );
}

export default Testing;
