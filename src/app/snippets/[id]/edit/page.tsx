import db from "@/db";
import { notFound } from "next/navigation";
import SnippetEditForm from "@/components/snippet-edit-form";

interface SnippetEditPageProps {
  params: {
    id: string;
  }
};

export default async function SnippetEditPage(props: SnippetEditPageProps) {
  const id = Number(props.params.id);
  const snippet = await db.snippet.findUnique({
    where: {
      id,
    }
  });

  if(!snippet) {
    return notFound();
  }

  return <SnippetEditForm snippet={snippet} />;
}