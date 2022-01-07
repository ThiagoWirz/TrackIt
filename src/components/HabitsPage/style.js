import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: #e5e5e5;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
  span {
    font-family: "Lexend Deca", sans-serif;
    font-size: 18px;
    line-height: 22px;
    color: #666666;
  }
`;

const MyHabits = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px;
  span {
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

const TaskCreation = styled.div`
  width: 90%;
  height: 180px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 7px;
  margin: 20px 0;
  form{
    width: 90%;
    height: 100%;
  }
  input {
    width: 100%;
    height: 45px;
    font-size: 20px;
    line-height: 25px;
    text-indent: 11px;
    margin: 18px 0 10px 0;
    border: 1px solid #d5d5d5;
    box-sizing: border-box;
    border-radius: 5px;
    outline: none;
    ::placeholder {
      color: #dbdbdb;
    }
  }
`;

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
  button {
    width: 84px;
    height: 35px;
    font-family: "Lexend Deca", sans-serif;
    font-size: 16px;
    border: hidden;
    border-radius: 5px;

    :first-child {
      background: #ffffff;
      color: #52b6ff;
      margin-right: 18px;
    }

    :last-child {
      background: #52b6ff;
      color: #ffffff;
    }
  }
  .opacity {
    opacity: 0.7;
  }
`;

const DaySelector = styled.div`
  display: flex;
  gap: 4px
`;

const DayBox = styled.button`
  width: 30px;
  height: 30px;
  font-size: 20px;
  font-family: "Lexend Deca", sans-serif;
  color: ${(props) => (props.selected ? "#FFFFFF" : "#DBDBDB")};
  background: ${(props) => (props.selected ? "#CFCFCF" : "#FFFFFF")};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
`;

const Habit = styled.div`
    width: 90%;
    height: 91px;
    margin: 10px 0;
    display: flex;
    padding: 0 15px;
    gap: 8px;
    flex-direction: column;
    background: #FFFFFF;
    border-radius: 7px;
    position: relative;
    p{
        width: 90%;
        font-size: 20px;
        line-height: 25px;
        color: #666666;
        margin-top: 13px;
    }
    ion-icon {
        font-size: 15px;
        position: absolute;
        top: 9px;
        right: 8px;
    }
`

export { Container, MyHabits, TaskCreation, DaySelector, DayBox, ButtonBox, Habit };
