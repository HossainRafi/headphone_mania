import React from "react";

const Details = ({ review }) => {
  const { name, img, ratting, comment } = review;
  return (
    <div>
      <div className="mx-5 mb-10 bg-neutral-400 px-5 py-2 rounded-xl h-[350px] relative">
        <img
          className="h-[80px] w-[80px] mx-auto rounded-full"
          src={img}
          alt=""
        />
        <h3 className="text-xl text-center text-blue-700 font-bold pt-2">
          {name}
        </h3>
        <p className="text-xl text-center my-2">{comment}</p>
        <h5 className="text-xl text-red-700 font-bold absolute bottom-5">
          Rating: {ratting}
        </h5>
      </div>
    </div>
  );
};

export default Details;
