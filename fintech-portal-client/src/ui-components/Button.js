import styled from "styled-components";

const Button = styled.button`
  display: inline-block;
  box-sizing: border-box;
  cursor: pointer;
  color: #fff;
  background-color: ${(props) =>
    props.bg === "black"
      ? "#000"
      : props.bg === "blue"
      ? "#007bff"
      : props.bg === "green"
      ? "#28a745"
      : "#007bff"};
  pointer-events: ${(props) => (props.disabled ? "none" : null)};
  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
  font-size: medium;
  padding: 5px 20px;
  margin: 5px 0px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-weight: 400;
  &:hover {
    background-color: ${(props) =>
      props.bg === "black"
        ? "#000"
        : props.bg === "blue"
        ? "#00a5ff"
        : props.bg === "green"
        ? "#28c745"
        : "#007bff"};
    pointer-events: ${(props) => (props.disabled ? "none" : null)};
    color: #000;
  }
`;

export default Button;
