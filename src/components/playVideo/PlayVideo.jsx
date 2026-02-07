import React, { useEffect, useState } from "react";
import "./playVideo.css";
import Like from "../../assets/like.png";
import Dislike from "../../assets/dislike.png";
import Save from "../../assets/save.png";
import Share from "../../assets/share.png";
import { API_KEY, value_converter } from "../../data";
import moment from "moment";
import { useNavigate, useParams } from "react-router";

const PlayVideo = () => {
  const { videoId } = useParams();
  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState(null);
  const navegate = useNavigate();
  const fetchVideoData = async () => {
    const viseoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(viseoDetails_url)
      .then((response) => response.json())
      .then((data) => setApiData(data.items[0]));
  };
  const fetchOtherData = async () => {
    const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData?.snippet.channelId}&key=${API_KEY}`;
    await fetch(channelData_url)
      .then((response) => response.json())
      .then((data) => setChannelData(data?.items?.[0]));

    const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`;
    await fetch(comment_url)
      .then((response) => response.json())
      .then((data) => setCommentData(data.items));
  };

  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

  useEffect(() => {
    if (apiData && apiData.snippet) {
      fetchOtherData();
    }
  }, [apiData]);
  console.log(apiData);
  return (
    <div className="play-video">
      {/* <video src={Video1} controls muted autoPlay></video> */}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <h3>{apiData?.snippet.title}</h3>
      <div className="play-video-info">
        {value_converter(apiData?.statistics.viewCount)} &bull; {moment(apiData?.snippet.publishedAt).fromNow()}
        <div>
          <span>
            <img src={Like} alt="" />
            {value_converter(apiData?.statistics.likeCount)}
          </span>
          <span>
            <img src={Dislike} alt="" />
          </span>
          <span>
            <img src={Share} alt="" />
            Share
          </span>
          <span>
            <img src={Save} alt="" />
            Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={channelData?.snippet.thumbnails.default.url} alt="" />
        <div>
          <p>{apiData?.snippet.channelTitle}</p>
          <span>{value_converter(channelData?.statistics.subscriberCount)} Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>{apiData?.snippet.description.slice(0, 500)}</p>
        <hr />
        <h4>{value_converter(apiData?.statistics.commentCount)} Comments</h4>
        {commentData?.map((item, index) => {
          return (
            <div key={index} className="comment">
              <img
                src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}
                alt=""
                onClick={() => navegate(item.snippet.topLevelComment.snippet.authorChannelUrl)}
              />
              <div>
                <h3>
                  {item.snippet.topLevelComment.snippet.authorDisplayName}
                  <span>{moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span>
                </h3>
                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className="comment-action">
                  <img src={Like} alt="" />
                  <span>{item.snippet.topLevelComment.snippet.likeCount}</span>
                  <img src={Dislike} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlayVideo;
