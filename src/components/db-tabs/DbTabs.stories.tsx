import type { Meta, StoryObj } from "@storybook/react-webpack5";
import DbTabs, { DbTabsProps } from "./DbTabs";
import { TabsDescription } from "./DbTabs.description";

const meta: Meta<DbTabsProps> = {
  title: "Deliberately broken for testing/Tabs",
  component: DbTabs,
  tags: ["autodocs"],
  parameters: {
    controls: { expanded: true },
    docs: {
      page: () => TabsDescription,
    },
  },
  argTypes: {
    triggerActivation: {
      name: "Trigger Activation",
      options: ["automated", "manual"],
      control: { type: "radio" },
      description:
        "Determines how tabs are activated via keyboard: 'automated' changes on focus; 'manual' changes on Enter/Space.",
      table: {
        category: "Interaction",
        defaultValue: { summary: "automated" },
      },
    },
    tablistRole: {
      name: "Tablist Role",
      control: { type: "text" },
      description:
        "Role for the tablist container. Usually 'tablist'. Leave blank to simulate missing role.",
      table: {
        category: "ARIA",
      },
    },
    tabPanelRole: {
      name: "Tab Panel Role",
      control: { type: "text" },
      description:
        "Role for the tab panels. Accepts 'tabpanel', 'region', or blank.",
      table: {
        category: "ARIA",
      },
    },
    tabs: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<DbTabsProps>;

export const Default: Story = {
  args: {
    triggerActivation: "automated",
    tablistRole: "tablist",
    tabPanelRole: "tabpanel",
    tabs: [
      {
        id: "tab1",
        label: "First tab",
        content: "<p>This is the first tab panel content.</p>",
      },
      {
        id: "tab2",
        label: "Second tab",
        content: "<p>This is the second tab panel content.</p>",
      },
      {
        id: "tab3",
        label: "Third tab",
        content: "<p>This is the third tab panel content.</p>",
      },
    ],
  },
};
