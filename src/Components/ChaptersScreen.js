import React from "react";

const ChaptersScreen = () => {
  return (
    <div className="min-vh-100 shadow-lg p-3 bg-red">
      <h1 className="fs-5 fw-bold text-center">Chapters</h1>
      <hr />
      <ul className="list-group text-end">
        <div>
          <li className="list-group-item bg-transparent border-0 py-0 text-light d-flex justify-content-between curser ">
            <span>1.</span>
            <span>Fatiha</span>
          </li>
          <hr className="my-2" />
        </div>
      </ul>
    </div>
  );
};

export default ChaptersScreen;
