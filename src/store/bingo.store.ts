import { CARD_NUMBERS, NUMBERS, checkMarkedNumber } from '@/lib/numbers';
import { type BingoNumber } from '@/models/bingoNumber.model';
import confetti from 'canvas-confetti';
import shuffle from 'just-shuffle';
import { create } from 'zustand';

interface BingoState {
  bingoNumbers: number[];
  playerNumbers: BingoNumber[];
  cpuNumbers: BingoNumber[];
  bingoNumber?: number;
  exitBingoNumbers: number[];
  playerWin: boolean;
  cpuWin: boolean;
}

interface BingoStore extends BingoState {
  initialize: () => void;
  nextBingoNumber: () => void;
}

const initialState: BingoState = {
  bingoNumbers: [],
  playerNumbers: [],
  cpuNumbers: [],
  exitBingoNumbers: [],
  playerWin: false,
  cpuWin: false,
};

export const useBingoStore = create<BingoStore>()((set, get) => ({
  ...initialState,
  initialize: () => {
    set({
      bingoNumbers: shuffle(NUMBERS),
      playerNumbers: shuffle(CARD_NUMBERS).slice(0, 15),
      cpuNumbers: shuffle(CARD_NUMBERS).slice(0, 15),
      exitBingoNumbers: [],
      playerWin: false,
      cpuWin: false,
    });
  },
  nextBingoNumber: () => {
    const { bingoNumbers, exitBingoNumbers, playerNumbers, cpuNumbers } = get();
    const nextBingoNumber = bingoNumbers.pop();

    if (nextBingoNumber !== undefined) {
      const newPlayerNumbers = playerNumbers.map((number) => checkMarkedNumber(number, nextBingoNumber));
      const newCpuNumbers = cpuNumbers.map((number) => checkMarkedNumber(number, nextBingoNumber));
      let playerWin = newPlayerNumbers.every(({ isMarked }) => isMarked);
      const cpuWin = newCpuNumbers.every(({ isMarked }) => isMarked);

      if (playerWin && cpuWin) {
        playerWin = false;
      }

      if (playerWin || cpuWin) {
        confetti();
      }

      set({
        bingoNumber: nextBingoNumber,
        playerNumbers: newPlayerNumbers,
        cpuNumbers: newCpuNumbers,
        exitBingoNumbers: [...exitBingoNumbers, nextBingoNumber],
        playerWin,
        cpuWin,
      });
    }
  },
}));
