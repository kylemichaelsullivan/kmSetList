import type { RefObject } from 'react';

export type AppModes = 'Playing' | 'Selecting' | 'Editing';
export type AllAppModes = AppModes | 'User';

export type Notes =
	| ''
	| 'C'
	| 'C#'
	| 'Db'
	| 'D'
	| 'D#'
	| 'Eb'
	| 'E'
	| 'F'
	| 'F#'
	| 'Gb'
	| 'G'
	| 'G#'
	| 'Ab'
	| 'A'
	| 'A#'
	| 'Bb'
	| 'B';

export type SongKey =
	| Notes
	| 'Cm'
	| 'C#m'
	| 'Dbm'
	| 'Dm'
	| 'D#m'
	| 'Ebm'
	| 'Em'
	| 'Fm'
	| 'F#m'
	| 'Gbm'
	| 'Gm'
	| 'G#m'
	| 'Abm'
	| 'Am'
	| 'A#m'
	| 'Bbm'
	| 'Bm';

export interface Song {
	name: string;
	songKey: SongKey;
	bpm: number;
	isActive: boolean;
	updatedAt: number;
}

export interface AddSongFormData {
	songName: string;
	songKey: string;
	bpm: number;
}

export type PlayingMode = 'perform' | 'rehearse' | 'focus';

export type PlayingProps = {
	songRefs: RefObject<(HTMLButtonElement | null)[]>;
	restoreSetlistRef: RefObject<HTMLButtonElement>;
	focusFirstSong: () => void;
};

export interface SettingsFormData {
	callMe: string;
	email: string;
	playingMode: PlayingMode;
}
