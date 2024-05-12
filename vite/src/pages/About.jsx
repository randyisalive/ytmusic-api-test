import { useEffect } from "react";
import LabelDisplay from "../components/LabelDisplay";

function About() {
  useEffect(() => {
    document.title = "About - YT Music Downloader";
  }, []);
  return (
    <>
      <LabelDisplay label={"About"} />
      <main className="d-flex mt-3 flex-column library-card">
        <div className="d-flex flex-column w-100">
          <span className="display-6" style={{ fontWeight: "bold" }}>
            About This Web Application
          </span>
          <div className="mt-3">
            <p className="m-0" style={{ textAlign: "justify" }}>
              YT Music Downloader is a user-friendly platform that offers music
              enthusiasts the ability to easily download their favorite tracks
              from YouTube. With a simple and intuitive interface, users can
              quickly convert YouTube videos into MP3 files, ensuring they have
              their music available on-the-go. The service prides itself on
              providing high-quality audio downloads without the need for
              registration, making it accessible and convenient for all users.
            </p>
            <p className="m-0" style={{ textAlign: "justify" }}>
              The website supports a variety of formats, allowing for
              flexibility in how users choose to save their music. Whether it’s
              for a curated playlist or just a single song, YT Music Downloader
              ensures that the process is seamless and hassle-free. The platform
              also emphasizes speed and efficiency, with a high-speed conversion
              engine that processes downloads swiftly, ensuring that users can
              enjoy their music downloads without any unnecessary delays.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default About;
