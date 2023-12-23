import db from "@/db"
import Link from "next/link";

export const dynamic = 'force-dynamic';

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map(snippet => (
    <li key={snippet.id}>
      <Link href={`/snippets/${snippet.id}`}
        className="bg-white flex justify-between items-center p-4 border rounded hover:shadow-md transition-all"
      >
        <div className="flex flex-col gap-1 ">
          <span className="text-blue-500 hover:underline">{snippet.title}</span>
          <span className="text-gray-500 text-sm font-extralight">
          {snippet.createdAt.toLocaleTimeString()} | {snippet.createdAt.toLocaleDateString()} </span>
        </div>
        <span className="text-gray-500 text-sm">View</span>
      </Link>
    </li>
  ));
  return (
    <div className="py-8">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Snippets</h1>
        <Link href="/snippets/new" className="border p-2 rounded bg-blue-400 text-white hover:bg-blue-500 transition-all">New</Link>
      </div>
      <ul className="flex flex-col gap-2 py-8">
        {renderedSnippets}
      </ul>
    </div>
  )
}
