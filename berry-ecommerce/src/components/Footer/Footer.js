import React from "react";
import "./style.css";
import {
  UilFacebook,
  UilInstagramAlt,
  UilTwitter,
  UilYoutube,
  UilSnapchatSquare,
  UilGithub,
  UilLinkedin,
  UilBag,
} from "@iconscout/react-unicons";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div id="containerContainer">
        <div id="topContainer">
      <div id="connectContainer">
        <div id="connect">
          <div className="containerTitle">Connect with Us</div>
          <div id="connectContent">
            <a
              target="_blank"
              href={"https://github.com/Bram-G"}
              rel="noreferrer"
            >
              <UilFacebook size={40} color="black" />
            </a>
            <a
              target="_blank"
              href={"https://www.linkedin.com/in/bram-g"}
              rel="noreferrer"
            >
              <UilInstagramAlt size={40} color="black" />
            </a>
            <a
              target="_blank"
              href={"https://stackoverflow.com/users/21333322/bram-g"}
              rel="noreferrer"
            >
              <UilTwitter size={40} color="black" />
            </a>
            <a
              target="_blank"
              href={"https://stackoverflow.com/users/21333322/bram-g"}
              rel="noreferrer"
            >
              <UilYoutube size={40} color="black" />
            </a>
            <a
              target="_blank"
              href={"https://stackoverflow.com/users/21333322/bram-g"}
              rel="noreferrer"
            >
              <UilSnapchatSquare size={40} color="black" />
            </a>
          </div>
        </div>
      </div>
      <div id="featuredWatches">
        <div className="containerTitle">Featured Watches</div>
        <div id="featuredWatchContent">
          <div id="watchList">
            <div>Grand Seiko</div>
            <div>Seiko</div>
            <div>TRILOBE</div>
            <div>Nomos</div>

          </div>
          <div id="watchList2">
          <div>TAG Heuer</div>
            <div>Vulcain</div>
            <div>OMEGA</div>
            <div>Breitling</div>
          </div>
        </div>
      </div>
      </div>
      <div id="lineBreak"></div>
      <div id="bottomContainer">
        <div id="leftContainer">
          <div className="containerTitle">About Us</div>
          <div id="aboutUs">
            <div id="aboutUsContent">
              <ul className="listItems">
                <li className="listItemSetting">Fake Watch Retailer</li>
                <li className="listItemSetting">Assets From&nbsp;<a href="https://shop.hodinkee.com/"> Hodinkee</a> </li>
                <li className="listItemSetting">and&nbsp;<a href="https://www.grand-seiko.com/us-en/collections"> Grand Seiko</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div id="centerContainer">
          <div className="containerTitle">Location</div>
          <div id="locationContent">
            <ul className="listItems">
              <li className="listItemSetting">1010 Thirtyfive Lane</li>
              <li className="listItemSetting">Movement Township</li>
              <li className="listItemSetting">Watchington, 12345</li>
            </ul>
          </div>
        </div>
        <div id="rightContainer">
          <div className="containerTitle">Created by</div>
          <div id="createdContent">
            <ul className="listItems">
              <li className="listItemSettingTitle">Bram Gibson</li>
              <li className="listItemSetting">Fullstack Web Developer</li>
              <div id="createdIcons">
              <li className="createdIcon"><a target="_blank" href="https://github.com/Bram-G"><UilGithub size={40} color="black"/></a></li>
              <li className="createdIcon"><a target="_blank" href="https://www.linkedin.com/in/bram-g"><UilLinkedin size={40} color="black"/></a></li>
              <li className="createdIcon"><a target="_blank" href="https://bramgibson.dev/"><UilBag size={40} color="black"/></a></li>
              </div>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Footer;
