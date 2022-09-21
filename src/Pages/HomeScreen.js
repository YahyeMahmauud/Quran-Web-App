import React from "react";
import { useEffect, useState } from "react";
import ChapterScreen from "../Components/ChaptersScreen";
import PlayersScreen from "../Components/PlayersScreen";
import RecitersScreen from "../Components/RecitersScreen";
import axios from "axios";
const HomeScreen = () => {
  const [reciters, setReciters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const {
        data: { reciters },
      } = await axios.get(`https://mp3quran.net/api/_english.php`);
      setReciters(reciters);
    }

    fetchData();
  }, []);

  return (
    <div className="row p-5 vh-100 ">
      <div className="col-lg-4 col-md-4 col-sm-12 col-12 scroll">
        <RecitersScreen reciters={reciters} />
      </div>
      <div className="col-lg-4 col-md-4 col-sm-12 col-12 scroll ">
        <ChapterScreen />
      </div>
      <div className="col-lg-4 col-md-4 col-sm-12 col-12 scroll ">
        <PlayersScreen />
      </div>
    </div>
  );
};

export default HomeScreen;
