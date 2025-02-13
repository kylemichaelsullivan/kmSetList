import type { ReactNode } from 'react';
import type { Modes } from '@/types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faPlay,
	faHandPointer,
	faPen,
} from '@fortawesome/free-solid-svg-icons';

type ModeColors = Record<Modes, [string, string, ReactNode]>;

export const _Modes: ModeColors = {
	Performing: ['gray-900', 'white', <FontAwesomeIcon icon={faPlay} />],
	Selecting: ['yellow-400', 'black', <FontAwesomeIcon icon={faHandPointer} />],
	Editing: ['red-400', 'blue-400', <FontAwesomeIcon icon={faPen} />],
};
