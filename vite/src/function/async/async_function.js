import { base_url } from "../global_const";

export async function logSearch(search) {
  try {
    const response = await fetch(base_url + "/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ search }),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}

export async function getPlaylist(id) {
  try {
    const response = await fetch(base_url + "/api/get_playlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}

export async function getUser(channelId) {
  try {
    const response = await fetch(base_url + "/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ channelId }),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}

export async function downloadSong(url) {
  try {
    const response = await fetch(base_url + "/api/download", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}

export async function open_folder() {
  try {
    const response = await fetch(base_url + "/api/open_folder");
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}
