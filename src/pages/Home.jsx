import React from "react";
import WebsiteTile from "../components/WebsiteTile";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const url = "https://api.uptimerobot.com/v2/getMonitors?format=json";
  const apiKey = "ur1258962-d871e8ad46112ee63fc110d7";

  const [websites, setWebsites] = useState("");

  const getAllWebsites = () => {
    axios
      .post(`${url}&api_key=${apiKey}`)
      .then((response) => {
        const allWebsites = response.data.monitors;
        setWebsites(allWebsites);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllWebsites();
  }, []);

  return (
    <>
      <Navbar websites={websites} />
      <WebsiteTile websites={websites} />
    </>
  );
}

export default Home;
