import {
  CountText,
  InputWrapper,
  StyledInput,
  StyledTextarea,
  TitleText,
  TitleWrapper,
} from "./style";

type InputProps = {
  placeholder?: string;
  title?: string;
  defaultValue?: string;
  countNumber?: number;
  type: "input" | "textarea";
  width?: number;
  height?: number;
  register: any;
  label: any;
};

export const Input = ({
  placeholder,
  title,
  defaultValue,
  countNumber,
  type,
  width,
  height,
  register,
  label,
}: InputProps) => {
  return (
    <InputWrapper type={type}>
      <TitleWrapper>
        {title && <TitleText>{title}</TitleText>}
        {countNumber ? <CountText>{countNumber}字</CountText> : null}
      </TitleWrapper>
      {type === "input" ? (
        <StyledInput
          placeholder={placeholder}
          defaultValue={defaultValue}
          inputWidth={width}
          inputHeight={height}
          {...register(label)}
        />
      ) : (
        <StyledTextarea
          placeholder={placeholder}
          defaultValue={defaultValue}
          inputWidth={width}
          inputHeight={height}
          {...register(label)}
        />
      )}
    </InputWrapper>
  );
};
