import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Library from "./pages/Library";

import "primeicons/primeicons.css";
import Download from "./pages/Download";
import PlaySong from "./pages/Download/PlaySong";
import About from "./pages/About";

function App() {
  const channelId = "UCm1Ta_ebXboWHcZBBvXYmwg";

  return (
    <>
      <Router>
        <Navbar channelId={channelId}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/download" element={<Download />}>
              <Route path=":song_title" element={<PlaySong />} />
            </Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/browse/:playlist_id" element={<Library />} />
          </Routes>
        </Navbar>
      </Router>
    </>
  );
}

export default App;
