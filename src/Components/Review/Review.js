import React from "react";

const Review = ({ review }) => {
    const {name,img,description}=review
  return (
    
      <div class="col-md-4">
        <div className="card h-100">
          <img src={img} alt="" className="img-fluid" />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
             {description}
            </p>
          </div>
        </div>
      </div>
    
  );
};

export default Review;
