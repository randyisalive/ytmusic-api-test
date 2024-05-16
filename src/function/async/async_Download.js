import global_const from "../global_const";

function async_Download() {
  const { url_custom, url_local } = global_const();
  async function GetDownload() {
    const url = url_local + "/api/get-downloads";
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (e) {
      console.error(e);
    }
  }

  async function InsertDownload(song_title) {
    const url = url_local + "/api/insert-download";
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
    const url = url_local + "/api/delete";
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

  async function fetchAudio(song_title) {
    try {
      const response = await fetch(url_local + "/api/get-audio", {
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
      const audioUrl = URL.createObjectURL(audioBlob);
      return audioUrl;
    } catch (error) {
      console.error("Error fetching audio:", error);
    }
  }

  return { GetDownload, InsertDownload, DeleteDownload, fetchAudio };
}

export default async_Download;
