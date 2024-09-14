import { Image } from "primereact/image";
import "./css/library-list.css";
import { motion } from "framer-motion";

function LibraryList({ download_song, playlistData, handleAudio }) {
  return (
    <>
      {playlistData.tracks.map((item) => {
        return (
          <>
            <motion.div
              className="w-100 d-flex hover-card p-3 text-white"
              style={{ justifyContent: "space-between" }}
            >
              <motion.div
                className="d-flex gap-2 align-items-center w-100 p-2"
                onClick={(e) => {
                  e.preventDefault();
                  download_song(
                    `https://music.youtube.com/watch?v=${item.videoId}&list=${playlistData.id}`
                  );
                }}
              >
                <Image
                  src={item.thumbnails[0].url}
                  width="80"
                  preview
                  onClick={(e) => e.stopPropagation()}
                />

                <span>{item.title}</span>
              </motion.div>
              <div className="d-flex align-items-center w-50 gap-2">
                <span className="text-secondary">{item.artists[0].name}</span>
              </div>
            </motion.div>
          </>
        );
      })}
    </>
  );
}

export default LibraryList;
