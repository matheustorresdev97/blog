import { ManagePostForm } from "@/components/admin/manage-post-form";

export const dynamic = 'force-dynamic';

export default async function AdminPostNewPage() {
  return (
    <>
      <h1>Criar post</h1>
      <ManagePostForm />
    </>
  );
}