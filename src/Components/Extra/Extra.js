import React from "react";
import useReviews from "../../Hooks/useRevews";
import Review from "../Review/Review";

const Extra = () => {
  const { reviews } = useReviews();
  return (
    <div className="container m-5 bg-light">
      <h3> Customars reviews({reviews.length})</h3><hr />
      <div className="row g-5"> {reviews.map((review) => (
        <Review key={review.id} review={review}></Review>
      ))}</div>
     
    </div>
  );
};

export default Extra;
