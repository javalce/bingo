import { useBingoStore } from '@/store/bingo.store';
import { cn } from 'clsx-tailwind-merge';

export default function ExitBingoNumbers({ className }: { className?: string }) {
  const exitBingoNumbers = useBingoStore((state) => state.exitBingoNumbers);

  return (
    <section
      className={cn(
        'border border-white grid grid-cols-15 place-content-start gap-4 min-h-[200px] w-[800px] p-2',
        className,
      )}
    >
      {exitBingoNumbers.map((number) => (
        <span key={number} className='bg-white px-2 py-1 text-center'>
          {number}
        </span>
      ))}
    </section>
  );
}
