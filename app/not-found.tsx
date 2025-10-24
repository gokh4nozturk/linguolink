import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className='container mx-auto flex min-h-dvh w-full flex-col items-center justify-center gap-10'>
      <Image
        src='https://storage.linguol.ink/images/taken.svg'
        alt='404'
        width={400}
        height={400}
        className='rounded-lg'
        loading='lazy'
      />
      <Button asChild variant='outline' className='w-full' aria-label='Return Home'>
        <Link href='/'>Return Home</Link>
      </Button>
    </div>
  );
}
