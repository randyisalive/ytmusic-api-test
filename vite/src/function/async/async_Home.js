import global_const from "../global_const";

function async_Home() {
  const { url_custom } = global_const();
  async function getAllPlaylist() {
    try {
      const response = await fetch(url_custom + "/api/get_user_playlist", {
        method: "GET",
        mode: "cors",
      });
      const data = await response.json();
      return data;
    } catch (e) {
      console.error(e);
    }
  }

  return { getAllPlaylist };
}

export default async_Home;
