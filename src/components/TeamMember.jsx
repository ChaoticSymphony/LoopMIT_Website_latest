// TeamMember.jsx
import React from 'react';

const TeamMember = ({ image, name, skills }) => {
  console.log(image);
  return (
    <div className="col-md-2 col-sm-6 col-6 custom-card" style={{ marginBottom: "80px" }}>
  <div className="work-box">
    <div className="work-img">
      <img 
        src={image}
        alt={name} 
        className="img-fluid"
        style={{ 
          width: "100%", 
          height: "100%", 
          objectFit: "cover", 
          objectPosition: "center" 
        }}
      />
    </div>
    <div className="work-content">
      <div className="row">
        <div className="col-12">
          <h2 className="w-title">{name}</h2>
          <div className="w-more">
            <span className="w-ctegory">{skills}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default TeamMember;