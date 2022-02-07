import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  /* background-color: coral; */
  position: relative;
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
`;

const Wrapper = styled.div`
  height: 100%;
`

const Slide = styled.div`
display: flex;
align-items: center;
`  

const ImgContainer = styled.div`
flex: 1;
`
const Image = styled.img`
`
const InfoContainer = styled.div`
flex: 1;

`

const Slider123 = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        <ImgContainer>
          <Image src="https://www.byrdie.com/thmb/w0YNNCc_FXlckQktZc1syl9kzuo=/1000x1000/filters:fill(auto,1)/sipsip-3d750d4ed7154222a2dd1722ed3f71d2.jpg"/>
        </ImgContainer>
        <InfoContainer>
        </InfoContainer>
      </Wrapper>
      <Arrow direction="right">
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider123;
