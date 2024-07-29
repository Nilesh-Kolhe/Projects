import styled from "styled-components";

const Button = styled.button`
    display: inline-block;
    box-sizing: border-box;
    cursor: pointer;
    color: #FFF;
    background-color: ${(props) =>
        props.bg === "green" ? "green" : "#000"};
    font-size: medium;
    padding: 5px 20px;
    margin: 8px 0;
    border: 1px solid #ccc;
    border-radius: 10px;
    font-weight: 400;
    &:hover {
        background-color: #FFF;
        color: #000;
        border-color: green;
    }

`;

export default Button;