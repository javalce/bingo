import { useBingoStore } from '@/store/bingo.store';
import { cn } from 'clsx-tailwind-merge';

export default function BingoDrum({ className }: { className?: string }) {
  const bingoNumber = useBingoStore((state) => state.bingoNumber);
  const nextBingoNumber = useBingoStore((state) => state.nextBingoNumber);
  const playerWin = useBingoStore((state) => state.playerWin);
  const cpuWin = useBingoStore((state) => state.cpuWin);

  const handleClick = () => {
    nextBingoNumber();
  };

  return (
    <button
      className={cn(
        'rounded-full border-4 border-black w-[200px] h-[200px] flex justify-center items-center bg-slate-500',
        className,
      )}
      onClick={handleClick}
      disabled={playerWin || cpuWin}
    >
      {bingoNumber === undefined ? (
        <span className='text-white text-4xl'>START</span>
      ) : (
        <span className='bg-white px-3 py-1 border-4 border-gray-300'>{bingoNumber}</span>
      )}
    </button>
  );
}
