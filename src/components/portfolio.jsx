// src/components/Portfolio.jsx
import React from "react";
import TeamMember from "./TeamMember";
import Animation1 from "./animation";
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
import default_pic from "../img/Member_pics/default.webp";

class Portfolio extends React.Component {
  render() {
    const teamLeaders = [
      { id: 1, image: sohan, name: "Sohan Kumar Y", skills: "Team Leader" },
      { id: 2, image: akshaya, name: "Akshaya Velliangiri", skills: "Team Manager" },
      { id: 3, image: gandhar, name: "Gandhar Apte", skills: "Technical Head" },
      { id: 4, image: kp, name: "Krishnapriya Binnoy", skills: "Electronics and Coding Head" },
    ];
    const lnpTeamMembers = [
      { id: 1, image: prabhanjana, name: "Prabhanjana P", skills: "Levitation And Propulsion" },
      { id: 2, image: prabhav, name: "Prabhav Rajeev Nambiar", skills: "Levitation And Propulsion" },
      { id: 3, image: dhairya, name: "Dhairya Kumar Berry", skills: "Levitation And Propulsion" },
    ];
    const elecTeamMembers = [
      { id: 1, image: satvik, name: "B SatvikPrabhu", skills: "Electronics And Coding" },
      { id: 2, image: shreyas, name: "Shreyas Chaudhary", skills: "Electronics And Coding" },
      { id: 3, image: edwin, name: "Edwin Ainnikal", skills: "Electronics And Coding" },
      { id: 4, image: daniel, name: "Daniel Konat", skills: "Electronics And Coding" },
      { id: 5, image: aaron, name: "Aaron Mathew George", skills: "Electronics And Coding" },
      { id: 6, image: default_pic, name: "Joyjeet Adhikary", skills: "Electronics And Coding" },
    ];
    const mechTeamMembers = [
      { id: 1, image: pratham, name: "Pratham Mutalikdesai", skills: "Mechanical" },
      { id: 2, image: default_pic, name: "Sonali Saini", skills: "Mechanical" },
    ];
    const manTeamMembers = [
      { id: 1, image: devak, name: "Devak Vora", skills: "Management" },
    ];

    const sections = [
      { title: "Meet the Team", type: "header" },
      { title: "Levitation And Propulsion", members: lnpTeamMembers, anim: "left" },
      { title: "Electronics And Coding", members: elecTeamMembers, anim: "right" },
      { title: "Mechanical", members: mechTeamMembers, anim: "left" },
      { title: "Management", members: manTeamMembers, anim: "right" },
    ];

    return (
      <section id="team" className="portfolio-mf py-4">
        <div className="container overflow-hidden">
          <div className="row">
            <div className="col-12 text-center mb-4">
              <h3 className="title-a">MEET THE TEAM</h3>
          <p className="subtitle-a">
                 Meet the passionate minds dedicated to transforming the Hyperloop concept into reality.
                </p>
          <div className="line-mf"></div>
              
              
            </div>
          </div>

          <Animation1 direction="right" delay={0.2}>
            <div className="row justify-content-center mb-5">
              {teamLeaders.map((member) => (
                <TeamLeader key={member.id} {...member} />
              ))}
            </div>
          </Animation1>

          {sections
            .filter((sec) => sec.type !== "header")
            .map((section, idx) => (
              <React.Fragment key={idx}>
                <div className="row justify-content-center">
                  <div className="col-auto">
                    <h4 className="h4">{section.title}</h4>
                  </div>
                </div>
                <hr className="my-3" />
                <Animation1 direction={section.anim} delay={0.2}>
                  <div className="row justify-content-center mb-5">
                    {section.members.map((member) => (
                      <TeamMember key={member.id} {...member} />
                    ))}
                  </div>
                </Animation1>
              </React.Fragment>
            ))}
        </div>
      </section>
    );
  }
}

export default Portfolio;
