import { SpinLoader } from "@/components/spin-loader";
import clsx from 'clsx';

export default async function Home() {

  return (
    <div>
          <SpinLoader containerClasses={clsx('min-h-[500px]', 'bg-amber-500')} />
    </div>
  );
}
