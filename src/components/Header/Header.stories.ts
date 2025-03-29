import Header from "@/components/Header";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Example/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
