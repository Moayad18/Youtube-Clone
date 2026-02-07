import React from "react";
import "./video.css";
import PlayVideo from "../../components/playVideo/PlayVideo";
import Recommended from "../../components/recommended/Recommended";
import { useParams } from "react-router";

const Video = () => {
  const { categoryId } = useParams();
  return (
    <div className="play-container">
      <PlayVideo />
      <Recommended categoryId={categoryId} />
    </div>
  );
};

export default Video;
