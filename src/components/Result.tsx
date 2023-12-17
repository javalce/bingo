import { useBingoStore } from '@/store/bingo.store';
import { cn } from 'clsx-tailwind-merge';
import { useMemo } from 'react';

export default function Result() {
  const playerWin = useBingoStore((state) => state.playerWin);
  const cpuWin = useBingoStore((state) => state.cpuWin);
  const initialize = useBingoStore((state) => state.initialize);

  const winText = useMemo(() => {
    if (playerWin) return 'Player Win!';
    if (cpuWin) return 'CPU Win!';

    return '';
  }, [playerWin, cpuWin]);

  return (
    <section
      className={cn(
        'bg-white w-[300px] absolute left-1/2 top-1/2 translate-x--1/2 translate-y--1/2 bg-white z-10 h-[200px] flex flex-col gap-2 justify-center items-center shadow-md rounded shadow-black',
        {
          hidden: !playerWin && !cpuWin,
        },
      )}
    >
      <h2 className='text-2xl font-semibold'>{winText}</h2>
      <button className='bg-indigo-600 px-3 py-1.5 rounded text-white hover:bg-indigo-800' onClick={initialize}>
        Reset bingo
      </button>
    </section>
  );
}
