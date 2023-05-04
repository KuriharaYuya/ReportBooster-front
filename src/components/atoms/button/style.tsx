import styled from "styled-components";

export const ButtonWrapper = styled.button<{
  size: "sm" | "lg";
  color: "black" | "colorful";
}>`
  font-size: ${({ size }) => (size === "sm" ? 14 : 24)}px;
  border-radius: 50px;
  border: none;
  color: #ffffff;
  cursor: pointer;
  padding: ${({ size }) => (size === "sm" ? "6px 14px" : "10px 20px")};
  width: ${({ size }) => (size === "sm" ? 162 : 271)}px;
  background: ${({ color }) =>
    color === "colorful"
      ? "linear-gradient(to right, #a825f8, #fc1bbd)"
      : "#000000"};
  &:hover {
    background: ${({ color }) =>
      color === "colorful"
        ? "linear-gradient(to right, #B254EB, #FF82DC)"
        : "#484646"};
  }
  &:active {
    background: ${({ color }) =>
      color === "colorful"
        ? "linear-gradient(to right, #B34AF4, #F83AC2)"
        : "#2C2C2C"};
  }
`;
