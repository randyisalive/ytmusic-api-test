import { Image } from "primereact/image";
import { motion } from "framer-motion";

function TopResultContainer({ category = "artist" || "songs", searchData }) {
  return (
    <div className="d-flex gap-4 flex-column">
      <h3 className="mt-4" style={{ fontWeight: "bold" }}>
        Top Results
      </h3>
      {searchData?.map((item) => {
        if (item.category === "Top result") {
          return (
            <>
              <div className="d-flex gap-4 align-items-center">
                <Image
                  src={
                    item.resultType === "artist"
                      ? item.thumbnails?.[1]?.url
                      : item.thumbnails?.[0]?.url
                  }
                  height={
                    item.resultType === "artist"
                      ? item.thumbnails?.[1]?.height
                      : item.thumbnails?.[0]?.height
                  }
                  width={
                    item.resultType === "artist"
                      ? item.thumbnails?.[1]?.width
                      : item.thumbnails?.[0]?.width
                  }
                  imageStyle={
                    item.resultType === "artist"
                      ? { borderRadius: "30rem" }
                      : { borderRadius: "0" }
                  }
                />
                <div className="d-block">
                  {item.artists?.map((x, artistIndex) => (
                    <div className="d-flex" key={artistIndex}>
                      <motion.p
                        className="m-0"
                        whileHover={{
                          cursor: "pointer",
                          textDecoration: "underline",
                        }}
                        onClick={() => {
                          window.location.href = `https://music.youtube.com/channel/${x.id}`;
                        }}
                        style={{ fontWeight: "bold" }}
                      >
                        {x.name}
                      </motion.p>
                      {/* <p>{x.id}</p> */}
                    </div>
                  ))}
                  <div className="d-flex gap-2" style={{ color: "#E5E5E5" }}>
                    <div>{item.resultType}</div>
                    <div>•</div>
                    <div>{item.subscribers} subscribers</div>
                  </div>
                </div>
              </div>
            </>
          );
        }
      })}
    </div>
  );
}

export default TopResultContainer;
