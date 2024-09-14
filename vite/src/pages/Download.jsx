import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import LabelDisplay from "../components/LabelDisplay";
import PlaylistCard from "../components/PlaylistCard";
import useDownloadData from "../function/useDownloadData";
import { AudioContext } from "../context/AudioContext";
import { motion } from "framer-motion";

function Download() {
  const { handleAudio } = useContext(AudioContext);
  const { isLoading, downloadData, delete_download } = useDownloadData();

  return (
    <>
      <motion.div>
        <Link
          to={`/download`}
          className="d-flex"
          style={{ width: "fit-content" }}
        >
          <LabelDisplay label={`Download`} />
        </Link>

        <Outlet context={{ delete_download }} />
        {isLoading ? null : (
          <div className="d-flex gap-3 flex-column mt-5">
            {downloadData.map((item) => (
              <PlaylistCard
                key={item.song_title}
                item={item}
                download_page={true}
                handleAudio={handleAudio}
                delete_download={delete_download}
              />
            ))}
          </div>
        )}
      </motion.div>
    </>
  );
}

export default Download;
