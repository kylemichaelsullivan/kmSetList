import type { ReactNode } from 'react';
import type { AllAppModes } from '@/types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faPlay,
	faHandPointer,
	faPen,
} from '@fortawesome/free-solid-svg-icons';

type AppModeColors = Record<AllAppModes, [string, string, ReactNode]>;

export const _AppModes: AppModeColors = {
	Performing: ['gray-900', 'white', <FontAwesomeIcon icon={faPlay} />],
	Selecting: ['yellow-400', 'black', <FontAwesomeIcon icon={faHandPointer} />],
	Editing: ['red-400', 'blue-400', <FontAwesomeIcon icon={faPen} />],
	User: ['blue-500', 'white', null],
};
