import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { Divider } from "./Divider";
import styled from "styled-components";

export default {
  title: "Design System/Divider",
  component: Divider,
} as Meta<typeof Divider>;

type Story = StoryObj<typeof Divider>;

const Wrapper = styled.div`
  width: 8vh;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DividerStory: Story = {
  name: "Divider",
  args: {},
  render: (args) => (
    <Wrapper>
      <Divider {...args} />
    </Wrapper>
  ),
};

export const DividerVerticalStory: Story = {
  name: "Divider Vertical",
  args: {
    orientation: "vertical",
  },
  render: (args) => (
    <Wrapper>
      <Divider {...args} />
    </Wrapper>
  ),
};
