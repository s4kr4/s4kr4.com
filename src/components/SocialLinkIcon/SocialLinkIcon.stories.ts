import SocialLinkIcon from "@/components/SocialLinkIcon";
import { Meta, StoryObj } from "@storybook/react";
import {
  faGithub,
  faQuora,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const meta: Meta<typeof SocialLinkIcon> = {
  title: "components/SocialLinkIcon",
  component: SocialLinkIcon,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const GitHub: Story = {
  args: {
    name: faGithub,
    text: "GitHub",
    url: "https://github.com/s4kr4",
    modifier: "github-icon",
  },
};

export const Qiita: Story = {
  args: {
    name: faQuora,
    text: "Qiita",
    url: "https://qiita.com/s4kr4",
    modifier: "qiita-icon",
  },
};

export const Zenn: Story = {
  args: {
    name: faEdit,
    text: "Zenn",
    url: "https://zenn.dev/s4kr4",
    modifier: "zenn-icon",
  },
};

export const X: Story = {
  args: {
    name: faXTwitter,
    text: "X",
    url: "https://x.com/s4kr4_",
    modifier: "x-icon",
  },
};
