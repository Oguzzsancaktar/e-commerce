import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  /* background-color: coral; */
  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #f5f5f5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: ${(props) =>
    props.direction === "left" ? "10px" : "calc(100% - 60px)"};
  top: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 999;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 0.7s ease-in-out;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  height: 80%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const slides = [
    {
      bg: "f2f200",
      img: "https://www.byrdie.com/thmb/w0YNNCc_FXlckQktZc1syl9kzuo=/1000x1000/filters:fill(auto,1)/sipsip-3d750d4ed7154222a2dd1722ed3f71d2.jpg",
      title: "Sipsip",
      description: "desc 1 ",
      button: "button 1",
    },
    {
      bg: "a56712",
      img: "https://www.byrdie.com/thmb/w0YNNCc_FXlckQktZc1syl9kzuo=/1000x1000/filters:fill(auto,1)/sipsip-3d750d4ed7154222a2dd1722ed3f71d2.jpg",
      title: "Sipsip 2 ",
      description: "desc 2 ",
      button: "button 2",
    },
  ];
  const [activeSlide, setActiveSlide] = useState(0);
  const handleClick = (direction) => {
    console.log(activeSlide,direction);
    if (direction === "left") {
      if (activeSlide !== 0) {
        setActiveSlide(activeSlide - 1);
      } else {
        setActiveSlide(slides.length - 1);
      }
    } else {
      if (activeSlide !== slides.length - 1) {
        setActiveSlide(activeSlide + 1);
      }else{
        setActiveSlide(0);
      }
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper style={{ transform: `translateX(${activeSlide * 100}vw)` }}>
        {slides.map((slide, index) => (
          <Slide bg={slide.bg} key={index}>
            <ImgContainer>
              <Image src={slide.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{slide.title}</Title>
              <Description>{slide.description}</Description>
              <Button>{slide.button}</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
