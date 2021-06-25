import React, { useState } from "react";
import reviews from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

function Review() {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = reviews[index];

  const nextProfil = () => {
    if (index === reviews.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const prevProfil = () => {
    if (index === 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const randomProfil = () => {
    setIndex(Math.floor(Math.random() * Math.floor(reviews.length)));
  };

  return (
    <article className="review" key={id}>
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <button className="prev-btn" onClick={prevProfil}>
        <FaChevronLeft />
      </button>

      <button className="next-btn" onClick={nextProfil}>
        <FaChevronRight />
      </button>

      <button className="random-btn" onClick={randomProfil}>
        Surprise me
      </button>
    </article>
  );
}

export default Review;
