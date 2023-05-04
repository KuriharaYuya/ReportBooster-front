import { Meta } from "@storybook/react";
import { ComponentStory } from "@storybook/react";
import { Input } from ".";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

export default {
  title: "Atoms/Input",
  component: Input,
} as Meta;

type InputValues = {
  example: string;
};

export const InputType: ComponentStory<typeof Input> = () => {
  const { register } = useForm<InputValues>();
  return (
    <Input
      type={"input"}
      title="タイトル"
      defaultValue="defaultValue"
      placeholder="プレースホルダー"
      register={register}
      label="example"
    />
  );
};

export const TextareaType: ComponentStory<typeof Input> = () => {
  const dummytextRef = useRef<HTMLParagraphElement>(null);
  const { register, watch } = useForm<InputValues>();
  const [height, setHeight] = useState<number>(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!dummytextRef.current) {
      return;
    }
    const getTextAreaLineHeight = Number(
      window
        .getComputedStyle(dummytextRef.current)
        .getPropertyValue("line-height")
        .slice(0, 2)
    );
    const height =
      watch("example").search(/\r?\n$/) == -1
        ? dummytextRef.current.clientHeight
        : dummytextRef.current.clientHeight + getTextAreaLineHeight;
    setHeight(height);
    console.log(height);

    let ArrayText = Array.from(watch("example"));
    ArrayText = ArrayText.filter((value) => {
      return ![" ", "　", "\n"].includes(value);
    });

    const count = ArrayText.length;
    setCount(count);
  }, [watch("example")]);

  return (
    <>
      <Input
        countNumber={count}
        height={height}
        type={"textarea"}
        register={register}
        label="example"
        title="タイトル"
        placeholder="placeholder"
      />
      <DummyText ref={dummytextRef}>{watch("example")}</DummyText>
    </>
  );
};
const DummyText = styled.div`
  width: 411px;
  font-size: 16px;
  line-height: 24px;
  display: none;
`;
