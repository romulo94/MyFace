import React, { useMemo } from 'react';
import ReactSlider from 'react-slick';
import { Container, ContainerLetter, ContainerSlider } from './styles';
import Logo from './svg';
import { useWidth } from '~/hooks';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  rtl: false,

  centerMode: true,
  focusOnSelect: true,
};

export default function Slider() {
  const [width] = useWidth();

  const marginAlign = useMemo(() => width / 4.3, [width]);

  return (
    <Container marginAlign={marginAlign}>
      <div className="svg-test">
        <Logo />
      </div>
      <ContainerSlider className="letters-slide">
        <ReactSlider {...settings} afterChange={e => console.log(e)}>
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
      </ContainerSlider>
    </Container>
  );
}
