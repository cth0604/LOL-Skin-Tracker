import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";

import ImageCard from "./ImageCard";

export default function Carousel(props) {
  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <Slider {...settings}>
      {props.contents.map((content) => (
        <ImageCard
          key={content.name}
          type={props.type}
          content={content}
          isAuthenticated={props.isAuthenticated}
          user={props.user}
        />
      ))}
    </Slider>
  );
}
