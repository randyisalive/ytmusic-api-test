export async function logSearch(search) {
  try {
    const response = await fetch("http://127.0.0.1:5000/search", {
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

export async function getAllPlaylist() {
  try {
    const response = await fetch("http://127.0.0.1:5000/api/get_user_playlist");
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}

export async function getPlaylist(id) {
  try {
    const response = await fetch("http://127.0.0.1:5000/api/get_playlist", {
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
    const response = await fetch("http://127.0.0.1:5000/api/user", {
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
    const response = await fetch("http://127.0.0.1:5000/api/download", {
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
