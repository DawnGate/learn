import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";

import { Text } from "./Text";

export default {
  title: "Design System/Text",
  component: Text,
} as Meta<typeof Text>;

type Story = StoryObj<typeof Text>;

export const TextStory: Story = {
  name: "Text",
  args: {
    children: "The quick brown fox jumps over the lazy dog",
  },
};

export const EditableTextStory: Story = {
  name: "Editable Text",
  args: {
    isEditable: true,
    children: "The quick brown fox jumps over the lazy dog",
  },
  render: (args) => {
    const [curText, setCurText] = useState<React.ReactNode>(args.children);
    return (
      <Text
        {...args}
        onChange={(e) => {
          setCurText(e.target.value);
        }}
      >
        {curText}
      </Text>
    );
  },
};
