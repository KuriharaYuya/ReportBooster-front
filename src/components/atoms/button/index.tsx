import { ButtonWrapper } from "./style";

type ButtonProps = {
  text: string;
  size: "sm" | "lg";
  color: "black" | "colorful";
  onClick: () => void;
};

export const Button = ({ text, size, color, onClick }: ButtonProps) => {
  return (
    <ButtonWrapper size={size} color={color} onClick={() => onClick()}>
      {text}
    </ButtonWrapper>
  );
};
