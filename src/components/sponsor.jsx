// Sponsors.jsx
import React from "react";
import Animation1 from "./animation"

import mahe from "../img/sponsor_pics/mahe.png";
import simscale from "../img/sponsor_pics/simscale.png";
import smartlink from "../img/sponsor_pics/smartlink.png";
import altium from "../img/sponsor_pics/altium.png";
import ansys from "../img/sponsor_pics/ansys.png";
import bossard from "../img/sponsor_pics/bossard.png";
import cadfem from "../img/sponsor_pics/cadfem.png";
import emworks from "../img/sponsor_pics/emworks.png";
import janatics from "../img/sponsor_pics/janatics.png";
import solidworks from "../img/sponsor_pics/solidworks.png";
import honeycomb from "../img/sponsor_pics/honeycomb.jpg"

//import "./Sponsors.css"; // We'll create this CSS file next

class Sponsors extends React.Component {
  render() {
const sponsor = ({ logo, name, url }) => {
  return (
    <div className="sponsor-item">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={logo} alt={`${name} logo`} className="sponsor-logo" />
      </a>
    </div>
  );
};
  // Sample sponsors data - replace with your actual sponsors
  const sponsors = [
    // {
    //   id: 1,
    //   name: "Sponsor 1",
    //   logo: mahe, // Replace with actual path to logo
    //   url: "https://www.manipal.edu/mu.html"
    // },
    // {
    //   id: 2,
    //   name: "Sponsor 2",
    //   logo: bossard, // Replace with actual path to logo
    //   url: "https://www.bossard.com/in-en/"
    // },
    {
      id: 3,
      name: "Sponsor 3",
      logo: smartlink, // Replace with actual path to logo
      url: "https://www.smartlinkstech.com/"
    },
    {
      id: 4,
      name: "Sponsor 4",
      logo: solidworks, // Replace with actual path to logo
      url: "https://www.solidworks.com/"
    },
    {
      id: 5,
      name: "Sponsor 4",
      logo: simscale, // Replace with actual path to logo
      url: "https://www.simscale.com/"
    },
    {
      id: 6,
      name: "Sponsor 4",
      logo: janatics, // Replace with actual path to logo
      url: "https://www.janatics.com/"
    },
    {
      id: 7,
      name: "Sponsor 4",
      logo: ansys, // Replace with actual path to logo
      url: "https://www.ansys.com/en-in"
    },
    {
      id: 8,
      name: "Sponsor 4",
      logo: altium, // Replace with actual path to logo
      url: "https://www.altium.com/?srsltid=AfmBOor8WgKhvI7Ji2LFTO3cgkexE0SYHekAMYTjBzu2hsymz-tG-x5y"
    },
    {
      id: 9,
      name: "Sponsor 4",
      logo: cadfem, // Replace with actual path to logo
      url: "https://www.cadfem.net/en/home.html"
    },
    {
      id: 10,
      name: "Sponsor 4",
      logo: emworks, // Replace with actual path to logo
      url: "https://www.emworks.com/"
    },
    {
      id: 11,
      name: "Sponsor 4",
      logo: honeycomb, // Replace with actual path to logo
      url: "https://honeycombindia.com/"
    }
  ];

  return (
  
    <div className="container mt-6 sect-pt4" id="sponsors">
      <div className="row justify-content-center">
        <div className="col-12 text-center">
          <h3 className="title-a">Our Sponsors</h3>
                <p className="subtitle-a">
                    Fueling innovation together with our valued sponsors.
                </p>
          <div className="line-mf"></div>
        </div>
      </div>
      <Animation1 direction="left" delay={0.3}>
        <div className="row justify-content-center align-items-center py-4">
          
            <div 
              
              className="col-12 mt-4 text-center"
            >
              <a 
                href="https://www.bossard.com/in-en/"
                target="_blank" 
                rel="noopener noreferrer"
                className="d-block sponsor-link"
              >
                <img
                  src={bossard}
                  alt={`${sponsor.name} logo`}
                  className="img-fluid mx-auto sponsor-logo"
                  style={{ maxHeight: "100px"}}
                />
              </a>
            </div>
          
        </div>
      </Animation1>
      <Animation1 direction="left" delay={0.3}>
        <div className="row justify-content-center align-items-center py-4">
          {sponsors.map((sponsor) => (
            <div 
              key={sponsor.id} 
              className="col-6 col-md-3 mb-4 mt-4 text-center"
            >
              <a 
                href={sponsor.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="d-block sponsor-link"
              >
                <img
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  className="img-fluid mx-auto sponsor-logo"
                  style={{ maxHeight: "50px" }}
                />
              </a>
            </div>
          ))}
        </div>
      </Animation1>
    </div>
  );
};
  }


export default Sponsors;
