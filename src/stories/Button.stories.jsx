import Button from "../components/Button";

export default {
  title: "Button",
  component: Button,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <Button {...args} />;

export const Design = Template.bind({});
Design.args = {
  label: "Label",
  borderRadius: "var(--button-border-radius)",
  gap: "var(--label-gap)",
  backgroundColor: "var(--button-background)",
  color: "var(--button-color)",
};

export const Test = Template.bind({});
Test.args = {
  label: "Test",
  borderRadius: 4,
  gap: 6,
  backgroundColor: "red",
  color: "yellow",
};
