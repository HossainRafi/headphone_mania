import React from "react";

const Details = ({ review }) => {
  const { name, img, ratting, comment } = review;
  return (
    <div>
      <div className="m-5 bg-neutral-400 p-5 rounded-xl h-[620px] relative">
        <img
          className="h-[100px] w-[100px] mx-auto rounded-full"
          src={img}
          alt=""
        />
        <h3 className="text-xl text-center text-blue-700 font-bold pt-3">{name}</h3>
        <p className="text-xl text-justify my-3">{comment}</p>
        <h5 className="text-xl font-bold absolute bottom-8">
          Rating: {ratting} Star
        </h5>
      </div>
    </div>
  );
};

export default Details;
