import styled from 'styled-components';
import {
  media,
  transitionEase,
  nearWhite,
  lightGray,
  nearBlack,
} from 'src/styles';

export const BlockGroup = styled.div`
  border-left: 0.5rem solid ${props => props.borderColor};

  ${media.tablet`
    border-left: none;
    display: flex;
    flex-direction: row-reverse;
  `};
`;

export const HalfBlock = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: calc(50vh - 2rem);
  background-color: ${props => props.backgroundColor || nearWhite};
  padding-right: 0.5rem;
  ${transitionEase};

  ${media.tablet`
    padding-right: 0;
    height: calc(33.33vh);
    width: ${props => props.width || '50%'};
  `};
`;

export const Title = styled.h1`
  text-decoration: underline;
  opacity: 0.8;
  color: ${lightGray};
  ${transitionEase};
`;

export const PictureBlock = HalfBlock.extend`
  z-index: 1;
  justify-content: ${props => props.justify || 'initial'};

  background-image: url('${props => props.image}');
  background-size: ${props => props.imageSize || 'auto'};
  background-repeat: no-repeat;
  background-position: 50%;

  &:hover {
    background-size: ${props => props.hoverSize || 'auto'};
    ${Title} {
      opacity: 1;
      text-shadow: 0px 0px 3px #fff;
    }
  }
`;

export const Intro = styled.div`
  ${media.tablet`
    opacity: ${props => props.opacity || 0.5};
    ${transitionEase};

    &:hover {
      opacity: 1;
      text-shadow: 0px 0px 2px #fff;
    }
  `};
`;

export const IntroSub = styled.h3`
  color: ${nearWhite};
  margin-bottom: 0rem;
`;

export const IntroHead = styled.h2`
  color: ${nearBlack};
  margin: 0;
`;

export const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem;
  ${transitionEase};

  a {
    text-decoration: underline;
  }

  ${media.phoneLandscape`
    padding: 0 4rem;
  `};

  ${media.tablet`
    ${props => props.padding};
    width: 100%;
    text-align: right;
    padding-left: 1rem;
    padding-right: 3rem;
  `};

  ${media.desktop`
    padding-left: 1rem;
    padding-right: 6rem;
  `};
`;

export const Caret = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: ${props => props.backgroundColor};
  transform: rotate(45deg);
  position: absolute;
  top: -1.5rem;
  right: calc(50% - 1.5rem);
  z-index: 0;

  ${media.tablet`
    display: none;
  `};
`;
