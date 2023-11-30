import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { Text } from "./Text";

export default {
  title: "Design System/Text",
  component: Text,
} as Meta<typeof Text>;

type Story = StoryObj<typeof Text>;

export const TextStory: Story = {
  name: "Text",
  args: {},
  render: (args) => <Text {...args}>content</Text>,
};
