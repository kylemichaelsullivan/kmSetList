import { useState, createContext, useContext } from 'react';
import type { ChangeEvent, ReactNode, SetStateAction } from 'react';

import type { PlayingMode } from '@/types';

type UserContextType = {
	callMe: string;
	email: string;
	playingMode: PlayingMode;
	myProjects: string[];
	activeProjectIndex: number;
	handlePlayingModeChange: (e: ChangeEvent<HTMLSelectElement>) => void;
	handleUserChange: (
		callMe: string,
		email: string,
		playingMode: PlayingMode,
	) => void;
	handleActiveProjectIndexChange: (index: number) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

type UserContextProviderProps = {
	children: ReactNode;
};

const initialCallMe = 'Kyle';
const initialEmail = 'kyle@example.com';
const initialPlayingMode: PlayingMode = 'perform';
const initialMyProjects = [
	'Julio Gomez Jazz Collective',
	'Old Mountain Acid Test',
	'Smile, Darling',
];
const initialActiveProjectIndex = 2;

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
	const [callMe, setCallMe] = useState(initialCallMe);
	const [email, setEmail] = useState(initialEmail);
	const [playingMode, setPlayingMode] =
		useState<PlayingMode>(initialPlayingMode);
	const [myProjects, setMyProjects] = useState(initialMyProjects);
	const [activeProjectIndex, setActiveProjectIndex] = useState(
		initialActiveProjectIndex,
	);

	function handleUserChange(
		callMe: SetStateAction<string>,
		email: SetStateAction<string>,
		playingMode: SetStateAction<PlayingMode>,
	) {
		setCallMe(callMe);
		setEmail(email);
		setPlayingMode(playingMode as PlayingMode);
	}

	function handlePlayingModeChange(e: ChangeEvent<HTMLSelectElement>) {
		setPlayingMode(e.target.value as PlayingMode);
	}

	function handleMyProjectsChange() {
		setMyProjects([]);
	}

	function handleActiveProjectIndexChange(index: number) {
		setActiveProjectIndex(index);
	}

	return (
		<UserContext.Provider
			value={{
				callMe,
				email,
				playingMode,
				myProjects,
				activeProjectIndex,
				handlePlayingModeChange,
				handleUserChange,
				handleActiveProjectIndexChange,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export const useUser = (): UserContextType => {
	const context = useContext(UserContext);
	if (!context) {
		throw new Error('useUser must be used within an <UserContextProvider />');
	}
	return context;
};
