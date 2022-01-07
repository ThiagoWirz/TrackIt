import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 68px;
  img {
    margin-bottom: 33px;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  input {
    width: 303px;
    height: 45px;
    margin-bottom: 6px;
    border: 1px solid #d5d5d5;
    box-sizing: border-box;
    border-radius: 5px;
    text-indent: 11px;
    font-size: 20px;
    line-height: 25px;
    ::placeholder {
      color: #dbdbdb;
    }
  }
  Link {
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52b6ff;
  }
`;
const Button = styled.button`
  width: 303px;
  height: 45px;
  border: hidden;
  background: #52b6ff;
  border-radius: 5px;
  font-size: 21px;
  line-height: 26px;
  color: #ffffff;
  margin-bottom: 25px;
  opacity: ${(props) => (!props.disabled ? 1 : 0.7)};
`;

export { Container, Button };
