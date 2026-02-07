import React from "react";
import "./sidebar.css";
import Home_icon from "../../assets/home.png";
import Game_icon from "../../assets/game_icon.png";
import Automobiles from "../../assets/automobiles.png";
import Sports from "../../assets/sports.png";
import Entertainment from "../../assets/entertainment.png";
import Tech from "../../assets/tech.png";
import Music from "../../assets/music.png";
import Blogs from "../../assets/blogs.png";
import News from "../../assets/news.png";
import Jack from "../../assets/jack.png";
import Simon from "../../assets/simon.png";
import Megan from "../../assets/megan.png";
import Tom from "../../assets/tom.png";
import Cameron from "../../assets/cameron.png";

const Sidebar = ({ sidebar, category, setCategory }) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="sortcut-links">
        <div className={`side-link ${category === 0 ? "active" : ""}`} onClick={() => setCategory(0)}>
          <img src={Home_icon} alt="home-icon" className="side-icon" />
          <p>Home</p>
        </div>
        <div className={`side-link ${category === 20 ? "active" : ""}`} onClick={() => setCategory(20)}>
          <img src={Game_icon} alt="game-icon" className="side-icon" />
          <p>Gaming</p>
        </div>
        <div className={`side-link ${category === 2 ? "active" : ""}`} onClick={() => setCategory(2)}>
          <img src={Automobiles} alt="automobiles-icon" className="side-icon" />
          <p>Automobiles</p>
        </div>
        <div className={`side-link ${category === 17 ? "active" : ""}`} onClick={() => setCategory(17)}>
          <img src={Sports} alt="sports-icon" className="side-icon" />
          <p>Sports</p>
        </div>
        <div className={`side-link ${category === 24 ? "active" : ""}`} onClick={() => setCategory(24)}>
          <img src={Entertainment} alt="entertainment-icon" className="side-icon" />
          <p>Entertainment</p>
        </div>
        <div className={`side-link ${category === 28 ? "active" : ""}`} onClick={() => setCategory(28)}>
          <img src={Tech} alt="tech-icon" className="side-icon" />
          <p>Technology</p>
        </div>
        <div className={`side-link ${category === 10 ? "active" : ""}`} onClick={() => setCategory(10)}>
          <img src={Music} alt="music-icon" className="side-icon" />
          <p>Music</p>
        </div>
        <div className={`side-link ${category === 22 ? "active" : ""}`} onClick={() => setCategory(22)}>
          <img src={Blogs} alt="blogs-icon" className="side-icon" />
          <p>Blogs</p>
        </div>
        <div className={`side-link ${category === 25 ? "active" : ""}`} onClick={() => setCategory(25)}>
          <img src={News} alt="news-icon" className="side-icon" />
          <p>News</p>
        </div>
      </div>
      <hr />
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-link">
          <img src={Jack} alt="jack" />
          <p>Jack</p>
        </div>
        <div className="side-link">
          <img src={Simon} alt="simon" />
          <p>Simon</p>
        </div>
        <div className="side-link">
          <img src={Megan} alt="megan" />
          <p>Megan</p>
        </div>
        <div className="side-link">
          <img src={Tom} alt="tom" />
          <p>Tom</p>
        </div>
        <div className="side-link">
          <img src={Cameron} alt="cameron" />
          <p>Cameron</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
