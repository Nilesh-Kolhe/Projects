import styled from "styled-components";

const Button = styled.button`
    display: inline-block;
    box-sizing: border-box;
    cursor: pointer;
    color: #FFF;
    background-color: ${(props) =>
        props.bg === "green" ? "green" : "#000"};
    pointer-events:${(props) => props.disabled ? 'none' : null};
    &:disabled {
        cursor: default;
        opacity: 0.5;
    };
    font-size: medium;
    padding: 5px 20px;
    margin: 5px 0px;
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