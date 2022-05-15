import React from "react";

function WebsiteTile(props) {
  return (
    <>
      <div className="row">
        {props.websites &&
          props.websites.map((website) => (
            <a className="col-4" rel="noreferrer" target="_blank" href={`${website.url}`} key={website.id}>
              <div className="card bg-light mb-3 website-card">
                <div className="row">
                  <div className="client col-8 text-white">
                    {website.friendly_name}
                  </div>
                  <div className="a col-2 text-white">Website Logs</div>
                  <div className="col-2 status-circle">{website.status}</div>
                </div>
              </div>
            </a>
          ))}
      </div>
    </>
  );
}

export default WebsiteTile;
