import type { ReactNode } from 'react';

import type { AllAppModes, PlayingMode } from '@/types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faPlay,
	faHandPointer,
	faPen,
} from '@fortawesome/free-solid-svg-icons';

type AppModeColors = Record<AllAppModes, [string, string, ReactNode]>;

export const _AppModes: AppModeColors = {
	Playing: ['gray-900', 'white', <FontAwesomeIcon icon={faPlay} />],
	Selecting: ['yellow-400', 'black', <FontAwesomeIcon icon={faHandPointer} />],
	Editing: ['red-400', 'blue-400', <FontAwesomeIcon icon={faPen} />],
	User: ['blue-500', 'white', null],
};

export const playingModes: PlayingMode[] = ['perform', 'rehearse', 'focus'];

export const BPM = {
	min: 1,
	max: 300,
};
