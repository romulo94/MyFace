import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  .letters-slide {
    z-index: 1000;
  }
  .slick-slider {
    top: ${({ marginAlign }) => `${marginAlign}px`};
    z-index: 1000;
    position: fixed;
    width: 100%;
    height: 100%;
  }
`;

export const ContainerSlider = styled.div``;

export const ContainerLetter = styled.div``;
