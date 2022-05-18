import React from "react";
import {useState,  useEffect} from "react"

function Navbar(props) {
  const websites = props.websites;

  let websitesUp = 0;
  let websitesDown = 0;
  const getStatus = () => {
    for (let i = 0; i < websites.length; i++) {
      websites[i].status === 2 ? websitesUp++ : websitesDown++;
    }
  };

  websites && getStatus();

  const [scroll, setScroll] = useState(false);
 useEffect(() => {
   window.addEventListener("scroll", () => {
     setScroll(window.scrollY > 50);
   });
 }, []);

  return (
    <>
      <div className={`header ${scroll ? "sticky" : ""}`}>
        There are {websitesUp} sites up and {websitesDown} sites down!
      
      <div className="down-list">
        
        {websitesDown === 0 ? <div className="h6 mt-1">All sites are up!</div> : <div className="text-red mt-1">These sites are down!</div>}
        {props.websites &&
          props.websites.map((website) => <div className="" key={website.id}>
            {website.status !== 2 ? <a className="container" href={website.url} target="_blank" rel="noreferrer">{website.friendly_name}</a> : ''}
          </div>)}
          </div>
      </div>
      <div className="title text-white text-center">
        Digitizers Web Dashboard
      </div>
    </>
  );
}

export default Navbar;
