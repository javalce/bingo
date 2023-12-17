import BingoDrum from '@/components/BingoDrum';
import Card from '@/components/Card';
import ExitBingoNumbers from '@/components/ExitBingoNumbers';
import { useEffect } from 'react';
import Result from './components/Result';
import { useBingoStore } from './store/bingo.store';

function App() {
  const playerNumbers = useBingoStore((state) => state.playerNumbers);
  const cpuNumbers = useBingoStore((state) => state.cpuNumbers);
  const initialize = useBingoStore((state) => state.initialize);

  useEffect(() => {
    initialize();
  }, [initialize]);

  return (
    <>
      <main className='w-screen h-screen bg-gradient-to-b from-custom-bg-light to-custom-bg-dark gap-10'>
        <Card className='[grid-area:player]' name='PLAYER' numbers={playerNumbers} />
        <BingoDrum className='[grid-area:bingo]' />
        <Card className='[grid-area:cpu]' name='CPU' numbers={cpuNumbers} />
        <ExitBingoNumbers className='[grid-area:numbers]' />
        <Result />
      </main>
    </>
  );
}

export default App;
