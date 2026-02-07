import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router";
import Video from "./pages/video/Video";
const App = () => {
  const [sidebar, setSidebar] = useState(true);
  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </div>
  );
};

export default App;
