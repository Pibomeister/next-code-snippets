import db from "@/db";
import Link from "next/link";
import { notFound } from "next/navigation";

import * as actions from '@/actions';

interface SnippetDetailPageProps {
  params: {
    id: string;
  }
}

export default async function SnippetDetailPage({ params }: SnippetDetailPageProps) {
  const id = Number(params.id);
  const snippet = await db.snippet.findUnique({
    where: {
      id: id,
    }
  });

  const deleteSnippetAction = actions.deleteSnippet.bind(null, id);

  if (!snippet) {
    return notFound();
  }

  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-gray-800 font-bold text-2xl ">{snippet?.title}</h1>
        <div className="flex gap-2">
          <Link className="p-2 border rounded" href={`/snippets/${snippet.id}/edit`}>Edit</Link>
          <form action={deleteSnippetAction}>
            <button className="p-2 border rounded" type="submit">Delete</button>
          </form>
        </div>
      </div>
      <pre className="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-4 pl-6 w-full">
        <code>
          {snippet?.code}
        </code>
      </pre>
    </div>
  );
}

export async function generateStaticParams() {
  const snippets = await db.snippet.findMany();

  return snippets.map(snippet => ({
    id: snippet.id.toString(),
  }));
}