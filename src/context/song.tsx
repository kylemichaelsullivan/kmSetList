import { useState, createContext, useContext } from 'react';
import type { Dispatch, ReactNode, SetStateAction } from 'react';

type SongState = {
	isExpanded: boolean;
	isEditing: boolean;
	noteContent: string;
};

type SongContextType = {
	songStates: Record<string, SongState>;
	toggleExpanded: (songName: string) => void;
	toggleEditing: (songName: string) => void;
	resetSongState: (songName: string) => void;
	setSongStates: Dispatch<SetStateAction<Record<string, SongState>>>;
};

const SongContext = createContext<SongContextType | undefined>(undefined);

type SongContextProviderProps = {
	children: ReactNode;
};

export const SongContextProvider = ({ children }: SongContextProviderProps) => {
	const [songStates, setSongStates] = useState<Record<string, SongState>>({});

	const getInitialState = (): SongState => ({
		isExpanded: false,
		isEditing: false,
		noteContent: '',
	});

	const toggleExpanded = (songName: string) => {
		setSongStates((prev) => {
			const currentState = prev[songName] || getInitialState();
			if (currentState.isExpanded) {
				// if closing, reset both states
				return {
					...prev,
					[songName]: getInitialState(),
				};
			}
			// if opening, just toggle expanded
			return {
				...prev,
				[songName]: {
					...currentState,
					isExpanded: !currentState.isExpanded,
				},
			};
		});
	};

	const toggleEditing = (songName: string) => {
		setSongStates((prev) => {
			const currentState = prev[songName] || getInitialState();
			if (currentState.isEditing) {
				// if stopping edit, reset both states
				return {
					...prev,
					[songName]: getInitialState(),
				};
			}
			// if starting edit, ensure expanded and set editing
			return {
				...prev,
				[songName]: {
					...currentState,
					isExpanded: true,
					isEditing: true,
				},
			};
		});
	};

	const resetSongState = (songName: string) => {
		setSongStates((prev) => ({
			...prev,
			[songName]: getInitialState(),
		}));
	};

	return (
		<SongContext.Provider
			value={{
				songStates,
				toggleExpanded,
				toggleEditing,
				resetSongState,
				setSongStates,
			}}
		>
			{children}
		</SongContext.Provider>
	);
};

export const useSong = (): SongContextType => {
	const context = useContext(SongContext);
	if (!context) {
		throw new Error('useSong must be used within a <SongContextProvider />');
	}
	return context;
};
