import React from "react";

function WebsiteTile(props) {
  return (
    <>
      <div className="row website-tile">
        {props.websites &&
          props.websites.map((website) => (
            <a
              className="col-md-4 col-sm-12"
              rel="noreferrer"
              target="_blank"
              href={`${website.url}`}
              key={website.id}
            >
              <div className="card bg-light mb-3 website-card">
                <div className="row align-items-center">
                  <div className="client col-4 text-white">
                    {website.friendly_name}
                  </div>
                  <div className="col-6 text-black website-logs align-items-center">
                    Website Logs
                  </div>
                  <div className={`col-2 status-${website.status}`}>
                    {website.status}
                  </div>
                </div>
              </div>
            </a>
          ))}
      </div>
    </>
  );
}

export default WebsiteTile;
