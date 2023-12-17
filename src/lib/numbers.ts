import { type BingoNumber } from '@/models/bingoNumber.model';

export const NUMBERS = Array(90)
  .fill(0)
  .map((_, i) => i + 1);

export const CARD_NUMBERS = NUMBERS.map(
  (n): BingoNumber => ({
    number: n,
    isMarked: false,
  }),
);

export function checkMarkedNumber({ number, isMarked }: BingoNumber, nextBingoNumber: number) {
  return {
    number,
    isMarked: !isMarked && number === nextBingoNumber ? true : isMarked,
  };
}
