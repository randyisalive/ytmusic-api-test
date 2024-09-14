import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";

function VideoPlayer({ videoControl, audio, playerState }) {
  useEffect(() => {
    console.log("VideoControl: ", videoControl);
  }, [videoControl]);

  return (
    <motion.div
      className="d-flex w-100 h-100"
      animate={playerState.status === 1 ? { y: "0%" } : { y: "100%" }}
    >
      <ReactPlayer
        width={"100%"}
        height={"100%"}
        playing={videoControl}
        url={`https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4
`}
      />
    </motion.div>
  );
}

export default VideoPlayer;
