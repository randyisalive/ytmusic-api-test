import React, { memo, useContext, useMemo, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { AudioTemplate } from "./AudioTemplate";
import Search from "./pages/Search";
import { ContextMenu } from "primereact/contextmenu";
const Loading = lazy(() => import("./pages/Loading"));
const Home = lazy(() => import("./pages/Home"));
const Navbar = lazy(() => import("./components/Navbar"));
const Library = lazy(() => import("./pages/Library"));
const Download = lazy(() => import("./pages/Download"));
const About = lazy(() => import("./pages/About"));

function App() {
  const channelId = "UCm1Ta_ebXboWHcZBBvXYmwg";
  const cm = useRef(null);
  const items = [
    { label: "Copy", icon: "pi pi-copy" },
    { label: "Rename", icon: "pi pi-file-edit" },
  ];

  return (
    <AudioTemplate>
      <ContextMenu
        global
        model={items}
        ref={cm}
        unstyled
        breakpoint="767px"
        pt={{
          root: { className: "custom-context-menu" },
          menu: {
            className: "d-flex flex-column",
          },
          menuitem: { className: "custom-context-menu-item" },
          separator: { className: "custom-context-menu-divider" },
        }}
      />
      <Router>
        <Navbar channelId={channelId}>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />}>
                <Route path="/browse/s/:search" element={<Search />} />
              </Route>
              <Route path="/download" element={<Download />} />
              <Route path="/about" element={<About />} />
              <Route path="/browse/:playlist_id" element={<Library />} />
            </Routes>
          </Suspense>
        </Navbar>
      </Router>
    </AudioTemplate>
  );
}

export default App;
