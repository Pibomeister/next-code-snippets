export default function SnippetNotFound() {
  return <div className="flex flex-col items-center h-screen w-full justify-center">
    <h1 className="text-2xl font-bold text-gray-800 my-6">
      404 | Not Found!
    </h1>
    <p className="pb-4 text-gray-600">
      The snippet you are looking for does not exist.
    </p>
  </div>
}