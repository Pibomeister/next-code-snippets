'use client';

import { CopyBlock, nord } from 'react-code-blocks';

interface CodeSnippetProps {
  code: string;
}

export default function CodeSnippet({ code}: CodeSnippetProps) {
  return (
    <CopyBlock
      theme={nord}
      text={code}
      language={"javascript"}
      showLineNumbers
    />
  )
}