import React from 'react';
import ReactSlider from 'react-slick';
import { ContainerLetter } from './styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

export default function Slider() {
  return (
    <div className="container">
      <ReactSlider {...settings}>
        <ContainerLetter>
          <h1>A</h1>
        </ContainerLetter>
        <ContainerLetter>
          <h1>B</h1>
        </ContainerLetter>
        <ContainerLetter>
          <h1>C</h1>
        </ContainerLetter>
        <ContainerLetter>
          <h1>D</h1>
        </ContainerLetter>
        <ContainerLetter>
          <h1>F</h1>
        </ContainerLetter>
        <ContainerLetter>
          <h1>G</h1>
        </ContainerLetter>
      </ReactSlider>
    </div>
  );
}
