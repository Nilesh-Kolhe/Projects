import styled from "styled-components";

const Button = styled.button`
    display: inline-block;
    box-sizing: border-box;
    cursor: pointer;
    color: #FFF;
    background-color: ${(props) =>
        props.bg === "green" ? "green" : "#000"};
    disabled: ${(props) => props.disabled};
    ${(props) =>  
        `background-color: #000;
        color: #FFF;
        border-color: green;
    `};
    font-size: medium;
    padding: 5px 20px;
    margin: px 0;
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