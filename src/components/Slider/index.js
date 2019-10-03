import React, { useMemo, useState, useRef } from 'react';
import ReactSlider from 'react-slick';
import { Container, ContainerLetter, ContainerSlider } from './styles';
import Logo from './svg';
import { useWidth } from '~/hooks';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from '~/components/Card';

export default function Slider() {
  const sliderRef = useRef(null);
  const [width] = useWidth();
  const [slideIndex, setSlideIndex] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    rtl: false,

    centerMode: true,
    focusOnSelect: true,

    beforeChange: (current, next) => {
      setSlideIndex(next);
      console.log(sliderRef);
      sliderRef.current.slickGoTo(next);
    },
  };

  const settings2 = {
    draggable: false,
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: false,
    focusOnSelect: true,

    // centerMode: true,
  };

  const marginAlign = useMemo(() => width / 4.3, [width]);

  return (
    <Container marginAlign={marginAlign}>
      <div className="svg-test">
        <Logo />
      </div>
      <ContainerSlider className="letters-slide">
        <ReactSlider
          {...settings}
          // afterChange={console.log}

          // onChange={console.log}
        >
          <ContainerLetter>
            <h1>A</h1>
            <span style={{ position: 'absolute', top: 50 }}>
              teste fdfdsfdsfdsfsfdsf
            </span>
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
        <ReactSlider
          ref={sliderRef}
          {...settings2}
          style={{ top: 200 }}
          className="new-slider"
          // afterChange={console.log}
          // beforeChange={console.log}
          // onChange={console.log}
        >
          <ContainerLetter>
            <Card />
          </ContainerLetter>
          <ContainerLetter>
            <Card />
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
      </ContainerSlider>
    </Container>
  );
}
