import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { AudioTemplate } from "./AudioTemplate";
const Loading = lazy(() => import("./pages/Loading"));
const Home = lazy(() => import("./pages/Home"));
const Navbar = lazy(() => import("./components/Navbar"));
const Library = lazy(() => import("./pages/Library"));
const Download = lazy(() => import("./pages/Download"));
const About = lazy(() => import("./pages/About"));

function App() {
  const channelId = "UCm1Ta_ebXboWHcZBBvXYmwg";

  return (
    <Router>
      <Navbar channelId={channelId}>
        <Suspense fallback={<Loading />}>
          <AudioTemplate>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/download" element={<Download />} />
              <Route path="/about" element={<About />} />
              <Route path="/browse/:playlist_id" element={<Library />} />
            </Routes>
          </AudioTemplate>
        </Suspense>
      </Navbar>
    </Router>
  );
}

export default App;
