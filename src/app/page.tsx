import { Container } from "@/components/container";
import { Header } from "@/components/header";
import { PostFeatured } from "@/components/post-featured";
import { PostsList } from "@/components/post-list";
import { SpinLoader } from "@/components/spin-loader";
import { Suspense } from "react";

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
