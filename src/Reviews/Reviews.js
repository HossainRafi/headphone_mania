import React from "react";
import useReviews from "../hooks/useReviews";
import Details from './../Details/Details';

const Reviews = () => {
  const [reviews, setReviews] = useReviews();
  return (
    <div className="pt-10 grid grid-cols-3 gap-5 py-10 bg-slate-300">
      {reviews.map((review) => (
        <Details key={review.id} review={review} />
      ))}
    </div>
  );
};

export default Reviews;
