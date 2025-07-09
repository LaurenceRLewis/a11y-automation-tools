import type { Meta, StoryObj } from "@storybook/react-webpack5";
import DbHeadings, { HeadingScenario } from "./DbHeadings";
import { HeadingsDescription } from "./DbHeadings.description";

const meta: Meta<typeof DbHeadings> = {
  title: "Can be Deliberately broken for testing/Headings",
  component: DbHeadings,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => HeadingsDescription,
    },
  },
  argTypes: {
    scenario: {
      name: "Preset Scenario",
      options: [
        "valid",
        "missingH1",
        "skippedLevels",
        "multipleH1",
        "notSemantic",
      ],
      control: { type: "select" },
      description: "Select a heading structure to test.",
      table: {
        category: "Test Scenario",
        defaultValue: { summary: "valid" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof DbHeadings>;

export const Default: Story = {
  args: {
    scenario: "valid" as HeadingScenario,
  },
};
