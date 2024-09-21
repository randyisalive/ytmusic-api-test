import { Image } from "primereact/image";
import "./css/library-list.css";
import { motion } from "framer-motion";
import { useState } from "react";
import HomeSearchBar from "./Home/HomeSearchBar";

function LibraryList({ download_song, playlistData, handleAudio }) {
  const [form, setForm] = useState("");

  function handleSearch(e) {
    setForm(e.target.value);
  }

  const filteredTracks = playlistData.tracks?.filter(
    (item) =>
      item.title.toLowerCase().includes(form.toLowerCase()) ||
      item.artists[0].name.toLowerCase().includes(form.toLowerCase())
  );

  return (
    <>
      <div className="mt-3 mb-3 d-flex w-50 align-items-center gap-3">
        <HomeSearchBar
          form={form}
          handleForm={handleSearch}
          inputParams={{ form, placeholder: "Filter Songs" }}
        />
      </div>
      {filteredTracks?.map((item, index) => (
        <motion.div
          key={`${item.videoId}-${index}`}
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

              handleAudio({
                video_id: item.song_id,
                id: item.id,
                title: item.song_title,
                author_name: item.author_name,
              });
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
      ))}
    </>
  );
}

export default LibraryList;
