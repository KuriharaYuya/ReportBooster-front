import { Meta } from "@storybook/react";
import { ComponentStory } from "@storybook/react";
import { Button } from ".";

export default {
  title: "Atoms/Button",
  component: Button,
} as Meta;

const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  text: "テキスト",
  size: "sm",
  color: "colorful",
  onClick: () => console.log("clicked"),
};
