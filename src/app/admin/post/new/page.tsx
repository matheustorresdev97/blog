import { Button } from "@/components/button";

export const dynamic = 'force-dynamic';

export default async function AdminPostNewPage() {
  return (
    <div className='py-16'>
      <Button type='submit'>Funciona como o do JSX</Button>
    </div>
  );
}