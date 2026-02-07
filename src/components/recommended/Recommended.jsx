import React, { useEffect, useState } from "react";
import "./recommended.css";
import Thumbnail1 from "../../assets/thumbnail1.png";
import Thumbnail2 from "../../assets/thumbnail2.png";
import Thumbnail3 from "../../assets/thumbnail3.png";
import Thumbnail4 from "../../assets/thumbnail4.png";
import Thumbnail5 from "../../assets/thumbnail5.png";
import Thumbnail6 from "../../assets/thumbnail6.png";
import Thumbnail7 from "../../assets/thumbnail7.png";
import Thumbnail8 from "../../assets/thumbnail8.png";
import { API_KEY, value_converter } from "../../data";
import { Link } from "react-router";

const Recommended = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);
  const fetchData = async () => {
    const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=SA&videoCategoryId=${categoryId}&key=${API_KEY}`;
    await fetch(relatedVideo_url)
      .then((response) => response.json())
      .then((data) => setApiData(data.items));
  };
  console.log(apiData);
  useEffect(() => {
    fetchData();
  }, [categoryId]);
  return (
    <div className="recommended">
      {apiData.map((item, index) => {
        return (
          <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
            <img src={item.snippet.thumbnails.default.url} alt="" />
            <div className="vid-info">
              <h4>{item.snippet.title}</h4>
              <p>{item.snippet.channelTitle}</p>
              <p>{value_converter(item.statistics.viewCount)}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Recommended;
