function PlaylistCard({ img, playlist_name, total_tracks }) {
  return (
    <>
      <div className="d-flex flex-column" style={{ width: "fit-content" }}>
        <img src={img} alt="album-thumbnail" width={120} />
        <div className="d-flex">
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
