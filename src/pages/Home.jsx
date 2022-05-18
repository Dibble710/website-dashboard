import React from "react";
import WebsiteTile from "../components/WebsiteTile";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";

function Home() {
  const url = "https://api.uptimerobot.com/v2/getMonitors?format=json";
  const apiKey = "ur1258962-d871e8ad46112ee63fc110d7";

  const [websites, setWebsites] = useState("");
  const [offset, setOffset] = useState("0");
  const [loading, setLoading] = useState(true);

  const getAllWebsites = () => {
    !loading && setLoading(true);
    axios
      .post(`${url}&api_key=${apiKey}&logs=1`, {
        offset: offset,
        logs: "1",
      })
      .then((response) => {
        const allWebsites = response.data.monitors;
        setWebsites(allWebsites);
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  function onClick() {
    offset < 50 ? setOffset(50) : setOffset(0);
    getAllWebsites();
  }

  useEffect(() => {
    const interval = setInterval(() => {
      document.getElementById('paginate').click()
    }, 500000);
  
    // Clear interval to prevent memory leaks
    return () => clearInterval(interval); 
  }, [])

  useEffect(() => {
    setOffset(50);
    getAllWebsites();
  }, []);

  return (
    <>
      <Navbar websites={websites} />
      {loading ? (
        <Loader />
      ) : (
        <div className="main-container mt-2">
          {offset === 50 ? (
            <button id="paginate" className="btn btn-info" onClick={() => onClick()}>
              Next Page
            </button>
          ) : (
            <button id="paginate" className="btn btn-info" onClick={() => onClick()}>
              Go Back
            </button>
          )}
          <WebsiteTile websites={websites} />{" "}
          {offset === 50 ? (
            <button className="btn btn-info" onClick={() => onClick()}>
              Next Page
            </button>
          ) : (
            <button className="btn btn-info" onClick={() => onClick()}>
              Go Back
            </button>
          )}
        </div>
      )}
    </>
  );
}

export default Home;
