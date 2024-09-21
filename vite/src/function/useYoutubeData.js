import { useEffect, useState } from "react";
import api from "./api";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import usePlayerData from "./usePlayerData";

function useYoutubeData() {
  const { Home } = api();
  const { getAllPlaylist, getSearch } = Home();
  const { playlist_id } = useParams();
  const nav = useNavigate();
  const location = useLocation();

  const { handleAudio } = usePlayerData();

  const [isLoading, setIsLoading] = useState(true);
  const [playlist, setPlaylist] = useState([]);
  const [search, setSearch] = useState([]);
  const [form, setForm] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const searchUrl = decodeURIComponent(location.pathname.split("/").pop());

  useEffect(() => {
    if (location.pathname == "/") {
      getAllPlaylist().then((data) => {
        setPlaylist(data);
        setIsLoading(false);
      });
      document.title = "YT Music Downloader - Home";
    }
  }, [refresh, location]);

  useEffect(() => {
    console.log("Form Search: ", form);
    console.log("Playlist: ", playlist);
    console.log("pathname: ", location);
    console.log("Saerch Data: ", search);
  }, [form, playlist, location, search]);

  useEffect(() => {
    if (searchUrl) {
      getSearch(searchUrl).then((data) => {
        setPlaylist([]);
        setSearch(data);
      });
    }
  }, [searchUrl]);

  function handleForm(e) {
    setForm(e.target.value);
  }

  function handleRefresh() {
    setRefresh(!refresh);
  }

  function get_search() {
    nav(`/browse/s/${form}`);
    getSearch(form).then((data) => {
      setPlaylist([]);
      setSearch(data);
      setForm("");
    });
  }

  return {
    playlist,
    isLoading,
    handleRefresh,
    handleForm,
    get_search,
    form,
    searchData: search,
  };
}

export default useYoutubeData;
