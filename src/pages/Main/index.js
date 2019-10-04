import React, { useMemo, useRef } from 'react';
import ReactSlider from 'react-slick';
import { Container, ContainerLetter, ContainerSlider } from './styles';
import Logo from '~/assets/images/logo';
import { useWidth } from '~/hooks';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from '~/components/Card';
import data from '~/server/data';

export default function Main() {
  const sliderRefFather = useRef(null);
  const sliderRefChildren = useRef(null);
  const [width] = useWidth();

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
      sliderRefChildren.current.slickGoTo(next);
    },
  };

  const settings2 = {
    draggable: true,
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: false,
    focusOnSelect: true,
    beforeChange: (current, next) => {
      sliderRefFather.current.slickGoTo(next);
    },
  };

  const marginAlign = useMemo(() => width / 4.3, [width]);

  return (
    <Container marginAlign={marginAlign}>
      <div className="svg-test">
        <Logo />
      </div>
      <ContainerSlider className="letters-slide">
        <ReactSlider ref={sliderRefFather} {...settings}>
          <ContainerLetter>
            <h1>D</h1>
          </ContainerLetter>
          <ContainerLetter>
            <h1>E</h1>
          </ContainerLetter>
          <ContainerLetter>
            <h1>R</h1>
          </ContainerLetter>
          <ContainerLetter>
            <h1>S</h1>
          </ContainerLetter>
          <ContainerLetter>
            <h1>Z</h1>
          </ContainerLetter>
        </ReactSlider>
        <ReactSlider
          ref={sliderRefChildren}
          {...settings2}
          style={{ top: 200 }}
        >
          <ContainerLetter>
            <Card contacts={data.D} />
          </ContainerLetter>
          <ContainerLetter>
            <Card contacts={data.E} />
          </ContainerLetter>
          <ContainerLetter>
            <Card contacts={data.R} />
          </ContainerLetter>
          <ContainerLetter>
            <Card contacts={data.S} />
          </ContainerLetter>
          <ContainerLetter>
            <Card contacts={data.Z} />
          </ContainerLetter>
        </ReactSlider>
      </ContainerSlider>
    </Container>
  );
}
