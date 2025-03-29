import Footer from "@/components/Footer";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "components/Footer",
  component: Footer,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
