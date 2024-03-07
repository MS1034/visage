import React from "react";
import concept from "../concept.mp4";
import face from "../face.webp";

function Home() {
  const handleOpenYouTube = () => {
    window.open("https://youtu.be/jaE-IIWLNKY", "_blank");
  };
  return (
    <div class="grid-container">
      <div class="content">
        <h1 class="title">
          <span>Visage:</span> Photo Sharing Tool for Photographers
        </h1>
        <p class="description">
          Share event photos effortlessly with our AI-powered app, utilizing
          Face Recognition to effortlessly organize images. Bid farewell to
          tedious sorting and embrace unforgettable memories.
        </p>
        <a href="#" class="btn-start">
          Get started
          <svg
            class="btn-icon"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        <button class="play-button" onClick={handleOpenYouTube}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            fill="#00447f"
          >
            <path d="M19.749,9.464,5,.048V23.989L19.743,14.54a3,3,0,0,0,.006-5.076Z" />
            <span className="sr-only">Watch Demo</span>
          </svg>
        </button>
        <p className="demo-text">Watch Demo</p>
      </div>
      <div class="image-container">
        <img src={face} alt="Face Recognition Img" width="350px" />
      </div>
    </div>
  );
}

export default Home;
