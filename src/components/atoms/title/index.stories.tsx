import { Meta } from "@storybook/react";
import { ComponentStory } from "@storybook/react";
import { Title } from ".";

export default {
  title: "Atoms/Title",
  component: Title,
} as Meta;

const Template: ComponentStory<typeof Title> = () => {
  return <Title />;
};

export const Default = Template.bind({});
