'use client';

import { useState } from "react";
import { Snippet } from "@prisma/client";
import Editor from '@monaco-editor/react';

import * as actions from '@/actions';
import Spinner from "./spinner";

interface SnippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {

  const [code, setCode] = useState(snippet.code);
  const [editorMounted, setEditorMounted] = useState(false);

  const handleEditorChange = (value: string | undefined, event: any) => {
    setCode(value || '');
  };

  const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code);

  return (
    <div className="rounded">
      <div className="relative 40vh w-full">
        {!editorMounted && <div className="absolute top-0 left-0 right-0 bottom-0 bg-white z-10 flex justify-center items-center">
          <Spinner />
        </div>}
        <Editor height="40vh"
          theme="vs-dark"
          language="javascript"
          defaultValue={snippet.code}
          options={{
            minimap: { enabled: false },
          }}
          onMount={() => { setEditorMounted(true) }}
          onChange={handleEditorChange}
        />
      </div>
      <form action={editSnippetAction} className="mt-4">
        <button type="submit" className="border rounded p-2 bg-blue-400">
          Save
        </button>
      </form>
    </div>
  )
}