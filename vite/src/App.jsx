import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "primeicons/primeicons.css";
import { lazy, Suspense, useContext, useState } from "react";
import { MyContext } from "./ContextProvider";
import useDownloadData from "./function/useDownloadData";
const Loading = lazy(() => import("./pages/Loading"));
const Home = lazy(() => import("./pages/Home"));
const Navbar = lazy(() => import("./components/Navbar"));
const Library = lazy(() => import("./pages/Library"));
const Download = lazy(() => import("./pages/Download"));
const PlaySong = lazy(() => import("./pages/Download/PlaySong"));
const About = lazy(() => import("./pages/About"));

function App() {
  const channelId = "UCm1Ta_ebXboWHcZBBvXYmwg";

  const { audio, AudioTemplateContext, handleAudio } = useContext(MyContext);

  return (
    <>
      <Router>
        <Navbar channelId={channelId}>
          <Suspense fallback={<Loading />}>
            {audio.id != undefined ? (
              <PlaySong
                audio={audio}
                handleAudio={handleAudio}
                AudioTemplateContext={AudioTemplateContext}
              />
            ) : null}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/download" element={<Download />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/browse/:playlist_id" element={<Library />} />
            </Routes>
          </Suspense>
        </Navbar>
      </Router>
    </>
  );
}

export default App;
