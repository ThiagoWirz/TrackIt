import styled from "styled-components";

const Container = styled.footer`
  width: 100%;
  height: 70px;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  font-family: "Lexend Deca", sans-serif;
  position: fixed;
  bottom: 0;
  left: 0;
  a {
    font-size: 18px;
    line-height: 22px;
    color: #52b6ff;
    text-decoration: none;
  }
  .progress-bar {
    width: 91px;
    height: 91px;
    background: #52b6ff;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 10px;
    right: 0;
    left: 0;
    margin: 0 auto;
    border-radius: 50%;
    color: #ffffff;
  }
`;

export { Container };
