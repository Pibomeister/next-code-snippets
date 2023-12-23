'use client';

import db from '@/db';
import { redirect } from 'next/navigation';
import { useFormState } from 'react-dom';

import * as actions from '@/actions';

export default function CreateSnippetPage() {
  const [formState, action] = useFormState(actions.createSnippet, { message: '' });


  return (
    <form action={action}>
      <h3 className="font-bold my-6 text-2xl">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label htmlFor="title" className="w-12">
            Title
          </label>
          <input type="text"
            name="title"
            className="border border-gray-300 rounded-md p-2 w-full"
            id="title"
          />
        </div>
        <div className="flex gap-4">
          <label htmlFor="code" className="w-12">
            Code
          </label>
          <input type="text"
            name="code"
            className="border border-gray-300 rounded-md p-2 w-full"
            id="code"
          />
        </div>
        <div>
          {formState.message && <p className="text-red-500">{formState.message}</p>}
        </div>
        <button type="submit" className="border rounded p-2 bg-blue-200">
          Create
        </button>
      </div>
    </form>
  );
}