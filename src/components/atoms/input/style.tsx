import styled from "styled-components";

export const TitleText = styled.span`
  color: #052d93;
  font-size: 24px;
  font-weight: bold;
`;
export const InputWrapper = styled.div<{ type: "input" | "textarea" }>`
  width: ${({ type }) => type === "textarea" && "fit-content"};
`;
export const StyledInput = styled.input<{
  inputWidth?: number;
  inputHeight?: number;
}>`
  width: ${({ inputWidth }) => (inputWidth ? `${inputWidth}px` : "100%")};
  height: ${({ inputHeight }) => inputHeight}px;
  min-height: 24px;
  padding: 10px 20px;
  font-size: 16px;
  border: solid 5px #052d93;
  outline: none;
  border-radius: 12px;
  &::placeholder {
    color: #818181;
    font-size: 16px;
  }
`;
export const StyledTextarea = styled.textarea<{
  inputWidth?: number;
  inputHeight?: number;
}>`
  width: ${({ inputWidth }) => inputWidth}px;
  height: ${({ inputHeight }) => inputHeight}px;
  min-height: 96px;
  min-width: 411px;
  padding: 10px 20px;
  font-size: 16px;
  line-height: 24px;
  resize: none;
  border: solid 5px #052d93;
  border-radius: 12px;
  outline: none;
  &::placeholder {
    color: #818181;
    font-size: 16px;
  }
`;
export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
export const CountText = styled.p`
  color: #959595;
  font-size: 20px;
  margin: 0;
`;
