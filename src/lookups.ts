import type { Modes } from '@/types';

type ModeColors = {
  [key in Modes]: [string, string];
};

export const _Modes: ModeColors = {
  Performing: ['gray-900', 'white'],
  Selecting: ['yellow-400', 'black'],
  Editing: ['red-400', 'blue-400'],
};
