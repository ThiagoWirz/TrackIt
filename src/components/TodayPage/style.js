import styled from "styled-components";

const Container = styled.div`
height: 100%;
padding: 100px 18px;
background-color: #F2F2F2;
p{
    font-size: 23px;
        line-height: 29px;
        color: #126BA5;
        margin-bottom: 3px;
        font-family: "Lexend Deca", sans-serif;
}
`
const Progress = styled.span`
    font-size: 18px;
    line-height: 22px;
    color: ${props => props.progress > 0 ? '#8FC549' : '#BABABA'};
    margin-bottom: 29px;
`

export{Container, Progress}