import PageTitle from "@/components/parts/PageTitle";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof PageTitle> = {
  title: "components/parts/PageTitle",
  component: PageTitle,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Example Title",
  },
};
