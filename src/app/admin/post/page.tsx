import PostsListAdmin from "@/components/admin/posts-list-admin";
import { SpinLoader } from "@/components/spin-loader";
import { Metadata } from "next";
import { Suspense } from "react";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Post Admin',
};

export default async function AdminPostPage() {

  return (
    <Suspense fallback={<SpinLoader className='mb-16' />}>
      <PostsListAdmin />
    </Suspense>
  );
}