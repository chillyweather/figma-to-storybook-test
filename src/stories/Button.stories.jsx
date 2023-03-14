import ButtonWithLabel from "../components/ButtonWithLabel";
import MyAppointment3 from "../icons/new-appointment-3.svg";

export default {
  title: "ButtonWithLabel",
  component: ButtonWithLabel,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <ButtonWithLabel {...args} />;

export const Design = Template.bind({});
Design.args = {
  label: "זימון תורים",
  borderRadius: "var(--button-border-radius)",
  gap: "var(--label-gap)",
  backgroundColor: "var(--button-background)",
  color: "var(--button-color)",
  icon: MyAppointment3,
};

// export const Test = Template.bind({});
// Test.args = {
//   label: "Test",
//   borderRadius: 4,
//   gap: 6,
//   backgroundColor: "red",
//   color: "yellow",
// };
