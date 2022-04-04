import React from "react";

const Review = ({ review }) => {
  const { name, ratting, comment } = review;
  return (
    <div>
      <div className="m-5">
        <h1 className="text-2xl text-center font-bold">{name}</h1>
        <p className="text-xl my-3">{comment}</p>
        <p>{ratting}</p>
      </div>
    </div>
  );
};

export default Review;
