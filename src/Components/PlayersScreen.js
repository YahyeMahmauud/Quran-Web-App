import React from "react";
import ReactPlayer from "react-player";

const PlayersScreen = () => {
  return (
    <div className="min-vh-100 shadow-lg p-3 bg-red">
      <h1 className="fs-5 fw-bold text-center">Player</h1>
      <hr />
      <ul className="list-group text-end">
        <div>
          <li className="list-group-item bg-transparent border-0 py-0 text-light d-flex justify-content-between curser ">
            <span>Reciter:</span>
            <span className="fs-6">Yahye Mahamuud</span>
          </li>
          <hr className="my-2" />
          {/* Chapter In Arabic  */}
          <li className="list-group-item bg-transparent border-0 py-0 text-light d-flex justify-content-between curser ">
            <span>Chapter In Arabic:</span>
            <span className="fs-6">Maida</span>
          </li>
          <hr className="my-2" />
          {/*Chapter In English  */}
          <li className="list-group-item bg-transparent border-0 py-0 text-light d-flex justify-content-between curser fs-6">
            <span className="fs-6 ">Chapter In English</span>
            <span className="fs-6">Yahye Mahamuud</span>
          </li>
          <hr className="my-2" />
          {/* revolution place */}
          <li className="list-group-item bg-transparent border-0 py-0 text-light d-flex justify-content-between curser fs-6 ">
            <span>Revolution Place</span>
            <span className="fs-10">Madinah</span>
          </li>
          <hr className="my-2" />

          {/* Translated Name */}
          <li className="list-group-item bg-transparent border-0 py-0 text-light d-flex justify-content-between curser ">
            <span>Translated Name: </span>
            <span className="fs-6">The Table Spread</span>
          </li>
          <hr className="my-2" />
          <div>
            <ReactPlayer
              url={"ksldf"}
              controls={true}
              playing={true}
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </ul>
    </div>
  );
};

export default PlayersScreen;
