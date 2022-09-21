import React from "react";
import { FaUserCircle } from "react-icons/fa";

const RecitersScreen = ({ reciters, reciterHandler }) => {
  return (
    <div className="min-vh-100 shadow-lg p-3 bg-red ">
      <h1 className="fs-5 fw-bold text-center">Reciters</h1> <hr />
      {reciters && reciters.length > 0 ? (
        reciters.map((reciter) => (
          <div key={reciter.id}>
            <li
              onClick={() => reciterHandler(reciter)}
              className="list-group-item bg-transparent border-0 text=light py-0 curser fs-6 px-0"
            >
            <div className="d-flex align-items-start">
              <FaUserCircle className="fs-3" />
              <span className="ps-3 ">{reciter.name}</span> <br />
            </div>
              <li/>
            <hr />
          </div>
        ))
      ) : (
        <div className="text-center">
          <span className="spinner-border"></span>
        </div>
      )}
    </div>
  );
};

export default RecitersScreen;
