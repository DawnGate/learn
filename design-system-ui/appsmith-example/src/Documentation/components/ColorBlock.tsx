import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;
const Color = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
  width: 80px;
  height: 2rem;
  border-radius: var(--ads-v2-border-radius);
  border: 1px solid var(--ads-v2-colors-content-surface-default-border);
`;

const Name = styled.div`
  font-size: 14px;
`;

type ColorBlockProps = {
  color?: string;
};

const ColorBlock = ({ color }: ColorBlockProps) => {
  const colorHex = getComputedStyle(document.documentElement).getPropertyValue(
    color,
  );
  return (
    <Wrapper>
      <Color color={colorHex} />
      <Name>{colorHex}</Name>
    </Wrapper>
  );
};

export default ColorBlock;
