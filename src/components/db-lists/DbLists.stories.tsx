import type { Meta, StoryObj } from "@storybook/react-webpack5";
import DbLists from "./DbLists";
import { ListDescription } from "./DbLists.description";

const meta: Meta<typeof DbLists> = {
  title: "Deliberately broken for testing/Lists",
  component: DbLists,
  tags: ["autodocs"],
  parameters: {
    controls: { expanded: true },
    docs: {
      page: () => ListDescription,
    },
  },
  argTypes: {
    scenario: {
      name: "Test Scenario",
      control: { type: "select" },
      options: [
        "Default",
        "Div with no role",
        "Missing opening tag",
        "Missing closing tag",
        "Slot list items",
      ],
      description: "Choose the test case to simulate list structure issues.",
      table: { order: 1 },
    },
    listType: {
      name: "List Type",
      control: { type: "select" },
      options: ["ul", "ol"],
      description:
        "Choose between unordered or ordered list as the default type.",
      table: { order: 2 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DbLists>;

export const StaticList: Story = {
  name: "List (Static content)",
  args: {
    scenario: "Default",
    listType: "ul",
  },
};

export const SlottedList: Story = {
  name: "List (content via Slot)",
  args: {
    scenario: "Slot list items",
    listType: "ul",
  },
  render: (args) => (
    <DbLists scenario={args.scenario} listType={args.listType}>
      <li>Tesla</li>
      <li>Volkswagen</li>
      <li>Holden</li>
      <li>Kia</li>
      <li>Nissan</li>
    </DbLists>
  ),
};
