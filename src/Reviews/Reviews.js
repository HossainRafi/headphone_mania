import React from "react";
import Review from "../Reviews/Reviews";
import useReviews from "../hooks/useReviews";

const Reviews = () => {
  const [reviews, setReviews] = useReviews();
  return (
    <div className="mt-20 grid grid-cols-3 gap-5 m-5">
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
};

export default Reviews;
