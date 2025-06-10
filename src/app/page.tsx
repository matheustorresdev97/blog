import { Container } from "@/components/container";
import { Header } from "@/components/header";
import { PostsList } from "@/components/post-list";
import { SpinLoader } from "@/components/spin-loader";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default async function Home() {

  return (
    <Container>
      <Header />
      <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
        <Link className='w-full h-full overflow-hidden rounded-xl' href='#'>
          <Image
            className='group-hover:scale-105 transition'
            src='/images/bryen_0.png'
            width={1200}
            height={720}
            alt='Título do post'
          />
        </Link>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In velit
          dolorem est dolor porro, doloribus neque, quidem mollitia doloremque,
          ad perspiciatis fugiat. Rerum, vel ex? Impedit ullam harum blanditiis
          mollitia?
        </div>
      </section>
      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <p className='text-6xl font-bold text-center py-8'>Footer</p>
      </footer>
    </Container>
  );
}
