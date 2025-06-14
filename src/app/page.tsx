import { PostFeatured } from "@/components/post-featured";
import { PostsList } from "@/components/post-list";
import { SpinLoader } from "@/components/spin-loader";
import { Suspense } from "react";

export const dynamic = 'force-static';

export default async function Home() {

  return (
    <>
      <Suspense fallback={<SpinLoader className='min-h-20 mb-16' />}>
        <PostFeatured />
        <PostsList />
      </Suspense>
    </>
  );
}
