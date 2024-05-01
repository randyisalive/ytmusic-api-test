function PlaylistCard({ img, playlist_name, total_tracks }) {
  return (
    <>
      <div
        className="d-flex flex-column gap-1"
        style={{ width: "fit-content", maxHeight: "200px" }}
      >
        <img src={img} alt="album-thumbnail" width={120} />
        <div className="d-flex bg-danger" style={{ height: "fit-content" }}>
          <div className="d-flex">
            <p className="m-0" style={{ width: "120px", height: "120px" }}>
              {playlist_name}
            </p>
          </div>
          <div className="d-flex" style={{ wordWrap: "break-word" }}>
            {total_tracks}
          </div>
        </div>
      </div>
    </>
  );
}
export default PlaylistCard;
