// Portfolio.jsx
import React from "react";
import TeamMember from "./TeamMember"; // Import the new component
import Animation1 from "./animation"


import TeamLeader from "./TeamLeader";

import satvik from "../img/Member_pics/satvik.jpg";
import aaron from "../img/Member_pics/aaron.jpg";
import edwin from "../img/Member_pics/edwin.jpg";
import akshaya from "../img/Member_pics/akshaya.jpg";
import daniel from "../img/Member_pics/daniel.jpg";
import devak from "../img/Member_pics/devak.jpg";
import dhairya from "../img/Member_pics/dhairya.jpg";
import gandhar from "../img/Member_pics/gandhar.jpg";
import kp from "../img/Member_pics/kp.jpg";
import prabhanjana from "../img/Member_pics/Prabhanjana P.jpg";
import prabhav from "../img/Member_pics/prabhav.jpg";
import pratham from "../img/Member_pics/pratham.jpg";
import shreyas from "../img/Member_pics/shreyas.jpg";
import sohan from "../img/Member_pics/sohan.jpg";
import default_pic from "../img/Member_pics/default.webp"

class Portfolio extends React.Component {
  render() {
    // Team members data array
    const teamLeaders = [
      {
        id: 1,
        image: sohan,
        name: "Sohan Kumar Y",
        skills: "Team Leader"
      },
      {
        id: 2,
        image: akshaya,
        name: "Akshaya Velliangiri",
        skills: "Team Manager"
      },
      {
        id: 3,
        image: gandhar,
        name: "Gandhar Apte",
        skills: "Technical Head"
      },
      {
        id: 4,
        image: kp,
        name: "Krishnapriya Binnoy",
        skills: "Electronics and Coding Head"
      },
    ]
    const elecTeamMembers = [
      
      {
        id: 1,
        image: satvik,
        name: "B SatvikPrabhu",
        skills: "Electronics And Coding"
      },
      {
        id: 2,
        image: shreyas,
        name: "Shreyas Chaudhary",
        skills: "Electronics And Coding"
      },
      {
        id: 3,
        image: edwin,
        name: "Edwin Ainnikal",
        skills: "Electronics And Coding"
      },
      {
        id: 4,
        image: daniel,
        name: "Daniel Konat",
        skills: "Electronics And Coding"
      },
      {
        id: 5,
        image: aaron,
        name: "Aaron Mathew George",
        skills: "Electronics And Coding"
      },
       {
         id: 5,
         image: default_pic,
         name: "Joyjeet Adhikary",
         skills: "Electronics And Coding"
       }
    ];
    const lnpTeamMembers = [
      
      {
        id: 1,
        image: prabhanjana,
        name: "Prabhanjana P",
        skills: "Levitation And Propulsion"
      },
      {
        id: 1,
        image: prabhav,
        name: "Prabhav Rajeev Nambiar",
        skills: "Levitation And Propulsion"
      },{
        id: 1,
        image: dhairya,
        name: "Dhairya Kumar Berry",
        skills: "Levitation And Propulsion"
      },
    ];
    const mechTeamMembers = [
      
      {
        id: 1,
        image: pratham,
        name: "Pratham Mutalikdesai",
        skills: "Mechanical"
      },
       {
         id: 1,
         image: default_pic,
         name: "Sonali Sainik",
         skills: "Mechanical"
       }
    ];
    const manTeamMembers = [
      
      {
        id: 1,
        image: devak,
        name: "Devak Vora",
        skills: "Management"
      }
    ];


    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
      <div style={{ overflowX: 'hidden' }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Meet the Team</h3>
                <p className="subtitle-a">
                  Meet the passionate minds dedicated to transforming the Hyperloop concept into reality.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
      
      <Animation1 direction="right" delay={0.2}>
      <div className="row justify-content-center">
            {teamLeaders.map(member => (
              <TeamLeader
                key={member.id}
                image={member.image}
                name={member.name}
                skills={member.skills}
              />
            ))}
          </div>
      </Animation1>

        <div className="row justify-content-center">
        <h3 className="">Levitation And Propulsion</h3>
        </div>
        <hr></hr>
        <Animation1 direction="left" delay={0.2}>
        <div className="row justify-content-center">
            {lnpTeamMembers.map(member => (
              <TeamMember 
                key={member.id}
                image={member.image}
                name={member.name}
                skills={member.skills}
              />
            ))}
          </div>
        </Animation1>
        <div className="row justify-content-center">
        <h3 className="">Electronics And Coding</h3>
        </div>
        <hr></hr>

         <Animation1 direction="right" delay={0.2}>
      <div className="row justify-content-center">
            {elecTeamMembers.map(member => (
              <TeamMember
                key={member.id}
                image={member.image}
                name={member.name}
                skills={member.skills}
              />
            ))}
          </div>
        </Animation1> 
        <div className="row justify-content-center"> 
        <h3 className="">Mechanical</h3>
        </div>
        <hr></hr>
        <Animation1 direction="left" delay={0.2}>
      <div className="row justify-content-center">
            {mechTeamMembers.map(member => (
              <TeamMember
                key={member.id}
                image={member.image}
                name={member.name}
                skills={member.skills}
              />
            ))}
          </div>
        </Animation1>
        <div className="row justify-content-center"> 
        <h3 className="">Management</h3>
        </div>
        <hr></hr>
        <Animation1 direction="right" delay={0.2}>
      <div className="row justify-content-center">
            {manTeamMembers.map(member => (
              <TeamMember
                key={member.id}
                image={member.image}
                name={member.name}
                skills={member.skills}
              />
            ))}
          </div>
        </Animation1>
        {/* <div>
          <TeamSection/>
        </div>  */}
        </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;