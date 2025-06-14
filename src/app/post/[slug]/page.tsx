import { SinglePost } from '@/components/single-post';
import { SpinLoader } from '@/components/spin-loader';
import { findAllPublicPostsCached, findPostBySlugCached } from '@/lib/post/queries';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const dynamic = 'force-static';

type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PostSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await findPostBySlugCached(slug);

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  const posts = await findAllPublicPostsCached();
  const params = posts.map(post => {
    return {
      slug: post.slug,
    };
  });

  console.log(params);

  return params;
}

export default async function PostSlugPage({ params }: PostSlugPageProps) {
  const { slug } = await params;
  const post = await findPostBySlugCached(slug);

  return (
    <Suspense fallback={<SpinLoader className='min-h-20 mb-16' />}>
      <SinglePost slug={slug} />
    </Suspense>
  );
}