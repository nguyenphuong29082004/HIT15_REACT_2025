import React from "react";
import "./Review.scss";
import imgReview1 from "../../assets/testimonials-1-CNxFrjqD.jpg";
import imgReview2 from "../../assets/testimonials-2-Ui5WBQGD.jpg";
import imgReview3 from "../../assets/testimonials-3-CdIuPdtQ.jpg";
function Review() {
  return (
    <div className="review">
      <h1 className="review__title">What people are saying...</h1>
      <div className="review__content">
        <div className="review__content--item">
            <div className="review__content--item__img">
              <img src={imgReview1} alt="img-review1" />
            </div>
            <h3 className="review__content--item__name">Margaret E.</h3>
            <p className="review__content--item__title">
              "This is fantastic! Thanks so much guys!"
            </p>
        </div>

        <div className="review__content--item">
            <div className="review__content--item__img">
              <img src={imgReview2} alt="img-review1" />
            </div>
            <h3 className="review__content--item__name">Fred S.</h3>
            <p className="review__content--item__title">
              "Bootstrap is amazing. I've been using it to create lots of super nice landing pages."
            </p>
        </div>

        <div className="review__content--item">
          
            <div className="review__content--item__img">
              <img src={imgReview3} alt="img-review1" />
            </div>
            <h3 className="review__content--item__name">Sarah W.</h3>
            <p className="review__content--item__title">
            "Thanks so much for making these free resources available to us!"
            </p>
          </div>
        </div>
      </div>
  );
}

export default Review;
