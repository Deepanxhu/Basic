import React, { useState } from "react";
import "./Topic.css";
import {frequencies,daw,vocalsProcessing,mixing,mixingConsole,mastering,bgElement1} from "../../assets"

const Topic = () => {

const [currentImage, setCurrentImage] = useState(frequencies)

  return (
    <section id="topic" className="black">
      <div className="wrapper">
        <h2>What will you learn ?</h2>
        <div className="content-container">
          <ul className="topic-list">
              <li onMouseEnter={()=> setCurrentImage(frequencies)}>What are Frequencies ?</li>
              <li onMouseEnter={()=> setCurrentImage(daw)}>Using the DAW</li>
              <li onMouseEnter={()=> setCurrentImage(vocalsProcessing)}>Vocals Processing</li>
              <li onMouseEnter={()=> setCurrentImage(mixing)}>Mixing</li>
              <li onMouseEnter={()=> setCurrentImage(mixingConsole)}>Mixing Console</li>
              <li onMouseEnter={()=> setCurrentImage(mastering)}>Mastering</li>
          </ul>
          <div className="topic-image">
            <img src={currentImage} alt="" />
          </div>
        </div>
        <img src={bgElement1} alt="" className="bg-element-1" />
      </div>
    </section>
  );
};

export default Topic;
