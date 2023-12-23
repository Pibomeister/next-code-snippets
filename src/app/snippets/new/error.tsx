'use client';

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

export default function ErrorPage({ error }: ErrorPageProps) {
  return (
    <div>
      <h1 className="text-2xl text-gray-800 font-bold">
        Oops! Something went wrong.
      </h1>
      <p className="p-4 rounded border bg-slate-400 text-red-800">
        {error.message}
      </p>
    </div>
  );
}