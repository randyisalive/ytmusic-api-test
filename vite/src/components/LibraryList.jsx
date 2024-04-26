import { Image } from "primereact/image";

function LibraryList({ download_song, playlistData }) {
  return (
    <>
      {playlistData.tracks.map((item) => {
        return (
          <>
            <div
              className="w-100 d-flex border-top"
              style={{ justifyContent: "space-between" }}
            >
              <div className="d-flex gap-2 align-items-center w-100 p-2">
                <Image src={item.thumbnails[0].url} width="80" preview />

                <span>{item.title}</span>
              </div>
              <div className="d-flex align-items-center w-50 gap-2">
                <span className="text-secondary">{item.artists[0].name}</span>
              </div>

              <div className="d-flex gap-3 align-items-center">
                <span> {item.duration}</span>
                <button
                  className="btn btn-success"
                  onClick={() => {
                    download_song(
                      `https://music.youtube.com/watch?v=${item.videoId}&list=${playlistData.id}`
                    );
                  }}
                >
                  Download
                </button>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default LibraryList;
