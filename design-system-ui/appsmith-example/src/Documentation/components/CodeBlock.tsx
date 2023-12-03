import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 0 4px;
  border-radius: var(--ads-v2-border-radius);
  background-color: var(--ads-v2-colors-content-surface-hover-bg);
  width: fit-content;
`;
const Code = styled.div`
  font-size: 14px;
  font-family: var(--ads-v2-font-family-code);
  white-space: pre-wrap;
`;

type CodeBlockProps = {
  code?: string;
};

const CodeBlock = ({ code }: CodeBlockProps) => {
  return (
    <Wrapper>
      <Code>{code}</Code>
    </Wrapper>
  );
};

export default CodeBlock;
