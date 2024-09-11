import { base_url } from "./global_const";

function api() {
  function Home() {
    async function getAllPlaylist() {
      try {
        const response = await fetch(base_url + "/api/get_user_playlist");
        const data = await response.json();
        return data;
      } catch (e) {
        console.error(e);
      }
    }

    return { getAllPlaylist };
  }

  function DownloadApi() {
    async function GetDownload() {
      const url = base_url + "/api/get-downloads";
      try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
      } catch (e) {
        console.error(e);
      }
    }

    async function InsertDownload(song_title) {
      const url = base_url + "/api/insert-download";
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ song_title }),
        });
        const data = await response.json();
        return data;
      } catch (e) {
        console.error(e);
      }
    }

    async function DeleteDownload(song_title) {
      const url = base_url + "/api/delete";
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ song_title }),
        });
        const data = await response.json();
        return data;
      } catch (e) {
        console.error(e);
      }
    }

    return { DeleteDownload, GetDownload, InsertDownload };
  }

  function AudioPlayerApi() {
    async function fetchAudio(song_title) {
      try {
        const response = await fetch(base_url + "/api/get-audio", {
          method: "POST",
          responseType: "blob",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ song_title }),
        });
        if (!response.ok) {
          throw new Error("ERROR");
        }

        const audioBlob = await response.blob();
        if (audioBlob.type === "application/json") {
          return { message: false };
        }
        const audioUrl = URL.createObjectURL(audioBlob);
        return audioUrl;
      } catch (error) {
        console.error("Error fetching audio:", error);
      }
    }
    return { fetchAudio };
  }
  return { Home, DownloadApi, AudioPlayerApi };
}

export default api;
