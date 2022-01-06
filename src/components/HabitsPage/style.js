import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #e5e5e5;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
  p {
    font-family: 'Lexend Deca', sans-serif;
    font-size: 18px;
    line-height: 22px;
    color: #666666;
    padding: 0 20px;
    margin-top: 22px;
  }
`;


const MyHabits = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px;
  p {
    font-size: 23px;
    color: #126ba5;
  }
  div {
    width: 40px;
    height: 35px;
    font-size: 27px;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #52b6ff;
    border-radius: 5px;
  }
`;
export { Container, MyHabits };
