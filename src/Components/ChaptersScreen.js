import { useState } from "react";

const ChaptersScreen = ({ chapters, chapterHandler }) => {
  const [activeId, setActiveId] = useState("");

  return (
    <div className="min-vh-100 shadow-lg p-3 bg-red">
      <h1 className="fs-5 fw-bold text-center">Chapters</h1> <hr />
      <ul className="list-group text-end">
        {chapters && chapters.length > 0 ? (
          chapters.map((chapter) => (
            <div key={chapter.id}>
              <div
                onClick={(e) => {
                  chapterHandler(chapter);
                  setActiveId(chapter.id);
                }}
                className={`d-flex justify-content-between  py-0 curser ${
                  chapter.id === activeId && "active"
                }`}
              >
                <span>{chapter.id} - </span> <span>{chapter.name_arabic}</span>
              </div>
              <hr />
            </div>
          ))
        ) : (
          <div className="text-center">
            <span className="spinner-border"></span>
          </div>
        )}
      </ul>
    </div>
  );
};

export default ChaptersScreen;
