import React from "react";
import { useEffect } from "react";
import Navbar from "../components/Navbar"

function WebsiteTile(props) {
  const websites = props.websites
  return (
    <>
    <Navbar websites={websites} />
      <div className="row website-tile">
        {props.websites &&
          props.websites.map((website) => (
            <a
              className="col-md-4 col-sm-12"
              rel="noreferrer"
              target="_blank"
              href={website.url}
              key={website.id}
            >
              <div className="card bg-light mb-3 website-card">
                <div className="row align-items-center">
                  <div className="client col-4 text-white">
                    {website.friendly_name}
                  </div>
                  <div className="col-8 text-black website-logs align-items-center">
                    {website.url.split("/", 3)[2].split(".")[0]}
                  </div>
                  {website.status !== 2 ? (
                    <div className={`col-2 status status-red`}>
                      {website.status}
                    </div>
                  ) : (
                    <div className={`col-2 status status-${website.status}`}>
                      {website.status}
                    </div>
                  )}
                </div>
              </div>
            </a>
          ))}
      </div>
    </>
  );
}

export default WebsiteTile;
