import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  padding: 100px 18px;
  background-color: #f2f2f2;
  .title {
    font-size: 23px;
    line-height: 29px;
    color: #126ba5;
    margin-bottom: 3px;
    font-family: "Lexend Deca", sans-serif;
  }
  .margin{
    margin-top: 28px;
  }
`;
const Progress = styled.span`
  font-size: 18px;
  line-height: 22px;
  color: ${(props) => (props.progress > 0 ? "#8FC549" : "#BABABA")};
`;

const Habit = styled.div`
  width: 100%;
  height: 94px;
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  background: #ffffff;
  margin-bottom: 10px;
  border-radius: 7px;
  .habit-name {
    font-size: 20px;
    line-height: 25px;
    color: #666666;
    margin-top: 13px;
  }
  .habit-sequence {
    font-size: 13px;
    line-height: 16px;
    color: #666666;
    margin-top: 7px;
    .record {
      color: #8fc549;
    }
  }
`;

const CheckBox = styled.div`
  width: 69px;
  height: 69px;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => (props.check ? "#8FC549" : "#EBEBEB")};
  border: 1px solid #e7e7e7;
  box-sizing: border-box;
  border-radius: 5px;
`;

const LoadingScreen = styled.div`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

export { Container, Progress, Habit, CheckBox, LoadingScreen };
