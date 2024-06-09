"use client";

import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleVideoButton = () => {
    setIsOpen((prevState) => !prevState);
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button
          onClick={handleVideoButton}
          className="float-right btn btn-primary btn-xs"
        >
          X
        </button>
        <YouTube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
        />
      </div>
    );
  };

  const ButtonOpenTrailer = () => {
    return (
      <button
        onClick={handleVideoButton}
        className="fixed btn btn-primary bottom-5 right-5"
      >
        Tonton Trailer
      </button>
    );
  };

  const option = {
    width: "250",
    height: "200",
  };

  return isOpen ? <Player /> : <ButtonOpenTrailer />
};

export default VideoPlayer;
