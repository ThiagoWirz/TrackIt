import styled from "styled-components";

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  padding: 0 18px;
  z-index: 1;

  h1 {
    font-family: "Playball", cursive;
    font-size: 39px;
    line-height: 49px;
    color: #ffffff;
  }
  img {
    width: 51px;
    height: 51px;
    border-radius: 50%;
  }
  ion-icon{
    color: #FFFFFF;
    font-size: 25px;
  }
`;

export { Container };
