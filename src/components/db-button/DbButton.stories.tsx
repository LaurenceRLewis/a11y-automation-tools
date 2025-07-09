import type { Meta, StoryObj } from "@storybook/react-webpack5";
import ModularButton from "./DbButton";

const meta: Meta<typeof ModularButton> = {
  title: "Can be Deliberately broken for testing/Button",
  component: ModularButton,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `Use the \`buttonTypes\` prop to define the native button type.  
Set one of: \`{ "button": true }\`, \`{ "submit": true }\`, or \`{ "reset": true }\`. Only one is needed.

Use the \`label\` prop to define the button text.`,
      },
    },
  },
  argTypes: {
    buttonTypes: {
      name: "Button Types",
      control: { type: "object" },
      description:
        'Set one of: { "button": true }, { "submit": true }, or { "reset": true }. Only one is needed.',
    },
    label: {
      name: "Button Text",
      control: { type: "text" },
      description: "The visible text label inside the button",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ModularButton>;

export const Button: Story = {
  args: {
    buttonTypes: { button: true },
    label: "My Button",
  },
};
