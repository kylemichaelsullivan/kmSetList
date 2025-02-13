export type Modes = 'Performing' | 'Selecting' | 'Editing';

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

type SongKey =
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

type SongName = string;
type SongBpm = number;
type SongActive = boolean;
type SongUpdated = number;

export type TSong = [SongName, SongKey, SongBpm, SongActive, SongUpdated];
export type TSongs = TSong[];
