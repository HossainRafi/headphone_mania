import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../image/headphone.jpg";
import useReviews from "../hooks/useReviews";
import Review from "../Review/Review";

const Home = () => {
  const navigate = useNavigate();
  const [reviews] = useReviews();
  const threeReviews = reviews.slice(0, 3);
  console.log(threeReviews);
  return (
    <div className="bg-gray-300 pb-5">
      <section className="flex justify-center items-center mx-10">
        <div className="w-1/2 mr-6">
          <h1 className="text-5xl font-serif leading-tight font-bold mb-2 mt-5 text-orange-400">
            <i class="las la-crown font-bold text-yellow-500 text-6xl"></i>King
            Of Noise Cancellation
          </h1>
          <h1 className="text-5xl font-bold mb-6 text-blue-500 italic">
            Sony WH-1000XM4
          </h1>
          <p className="text-xl">
            Industry-leading noise canceling with Dual Noise Sensor technology
            Next-level music with Edge-AI, co-developed with Sony Music Studios
            Tokyo Up to 30-hour battery life with quick charging (10 min charge
            for 5 hours of playback) Touch Sensor controls to pause play skip
            tracks, control volume, activate your voice assistant, and answer
            phone calls Speak-to-chat technology automatically reduces volume
            during conversations
          </p>
        </div>
        <div className="w-1/2">
          <img className="w-[300px] ml-20 mt-10" src={img} alt="" />
        </div>
      </section>
      <section>
        <h1 className="text-5xl font-serif font-bold text-center text-blue-800 pt-20">
          Customer Reviews(3)
        </h1>
        <div className="mt-10 flex flex-row gap-5 m-5">
          {threeReviews.map((review) => (
            <Review key={review.id} review={review} />
          ))}
        </div>
        <div className="flex justify-center mt-16 mb-10">
          <button
            onClick={() => navigate("/reviews")}
            className="bg-blue-500 hover:bg-blue-700 text-2xl font-serif font-bold px-5 py-1 rounded-full text-center pb-1"
          >
            More Reviews
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
