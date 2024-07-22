import styled from "styled-components";

const Button = styled.button`
    cursor: pointer;
    color: #FFF;
    background-color: ${(props) =>
        props.bg === "green" ? "green" : "yellow"};
    font-size: medium;
    padding: 5px 20px;
    margin: 8px 0;
    border: 1px solid #ccc;
    border-radius: 15px;
    font-weight: 400;
    &:hover {
        background-color: #FFF;
        color: #000;
        border-color: green;
    }
`;

export default Button;