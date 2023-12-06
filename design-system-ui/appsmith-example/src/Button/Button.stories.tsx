import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Design System/Button",
  component: Button,
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const ButtonStory: Story = {
  name: "Button",
  args: {
    children: "Click me",
  },
  render: (args) => <Button {...args} />,
};
