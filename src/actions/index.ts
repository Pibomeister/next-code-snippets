'use server';

import db from '@/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createSnippet(
    formState: { message: string },
  formData: FormData) {
  const title = formData.get('title') as string;
  const code = formData.get('code') as string;

  if(typeof title !== 'string' || title.length < 3) {
    return {
      message: 'Title must be longer',
    };
  }

  if(typeof code !== 'string' || code.length < 10) {
    return {
      message: 'Code must be longer',
    };
  }

  await db.snippet.create({
    data: {
      title,
      code,
    }
  });
  // Dumps cache on /snippets to make sure it's up to date in production
  revalidatePath('/');
  redirect('/');
}

export async function editSnippet(id: number, code: string) {
  await db.snippet.update({
    where: { id },
    data: { code },
  });
  revalidatePath(`/snippet/${id}`);
  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({ where: { id } });
  revalidatePath('/');
  redirect('/');
}