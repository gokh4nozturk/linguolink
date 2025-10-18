import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='grid min-h-dvh w-full place-items-center'>
      <div>
        <Image src='/404.webp' alt='404' width={400} height={400} className='rounded-lg' />
        <Button asChild variant='secondary' className='mt-2 w-full' aria-label='Return Home'>
          <Link href='/'>Return Home</Link>
        </Button>
      </div>
    </div>
  );
}
