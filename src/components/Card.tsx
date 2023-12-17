import { type BingoNumber } from '@/models/bingoNumber.model';
import { cn } from 'clsx-tailwind-merge';

export default function Card({
  name,
  numbers,
  className,
}: {
  name: string;
  numbers: BingoNumber[];
  className?: string;
}) {
  return (
    <section className={cn('flex flex-col justify-center bg-red-600 p-2 gap-2', className)}>
      <p className='text-xl text-white font-semibold text-center'>{name}</p>
      <ul className='grid grid-cols-5 gap-1'>
        {numbers.map(({ number, isMarked }) => (
          <li
            key={number}
            className={cn('text-center px-2 py-1', {
              'bg-white': !isMarked,
              'line-through': isMarked,
            })}
          >
            {number}
          </li>
        ))}
      </ul>
    </section>
  );
}
