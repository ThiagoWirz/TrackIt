import styled from "styled-components";

const Container = styled.footer`
    width: 100%;
    height: 70px;
    background: #FFFFFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 36px;
    position: fixed;
    bottom: 0;
    left: 0;
    a {
        font-size: 18px;
        line-height: 22px;
        color: #52B6FF;
    }
    div {
        width: 91px;
        height: 91px;
        background: #52B6FF;
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        bottom: 10px;
        right: 0;
        left: 0;
        margin: 0 auto;
        border-radius: 50%;
        color: #FFFFFF;
    }
`

export { Container }