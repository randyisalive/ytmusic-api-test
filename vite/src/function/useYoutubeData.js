import { useEffect, useState } from "react";
import api from "./api";
import { useLocation, useNavigate } from "react-router-dom";

function useYoutubeData() {
  const { Home } = api();
  const { getAllPlaylist, getSearch } = Home();
  const nav = useNavigate();
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(true);
  const [playlist, setPlaylist] = useState([]);
  const [search, setSearch] = useState([]);
  const [form, setForm] = useState(null);
  const [refresh, setRefresh] = useState(false);

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

  function handleForm(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleRefresh() {
    setRefresh(!refresh);
  }

  function get_search() {
    getSearch(form.search).then((data) => {
      nav(`/browse/s/${form.search}`);
      setPlaylist([]);
      setSearch(data);
      setForm({ search: "" });
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
