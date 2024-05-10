import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Library from "./pages/Library";

function App() {
  const channelId = "UCm1Ta_ebXboWHcZBBvXYmwg";

  return (
    <>
      <Router>
        <Navbar channelId={channelId}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse/:playlist_id" element={<Library />} />
          </Routes>
        </Navbar>
      </Router>
    </>
  );
}

export default App;
