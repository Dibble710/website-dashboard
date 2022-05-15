import React from "react";

function Navbar(props) {

  const websites = props.websites;

  let websitesUp = 0;
  let websitesDown = 0;
  const getStatus = () => {
    for (let i = 0; i < websites.length; i++) {
      websites[i].status === 2 ? websitesUp++ : websitesDown++;
    }

    console.log(websitesUp, websitesDown);
  };

  getStatus();

  return (
    <>
      <div className="header">
          There are {websitesUp} sites up and {websitesDown} sites down!
      </div>
      <div className="title text-white text-center mt-5">Digitizers Web Dashboard</div>
    </>
  );
}

export default Navbar;
