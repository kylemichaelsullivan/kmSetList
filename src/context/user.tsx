import { useState, createContext, useContext } from 'react';
import type { ChangeEvent, ReactNode, SetStateAction } from 'react';

import type { PerformanceMode } from '@/types';

type UserContextType = {
	callMe: string;
	email: string;
	performanceMode: PerformanceMode;
	myProjects: string[];
	activeProjectIndex: number;
	handlePerformanceModeChange: (e: ChangeEvent<HTMLSelectElement>) => void;
	handleUserChange: (
		callMe: string,
		email: string,
		performanceMode: PerformanceMode,
	) => void;
	handleActiveProjectIndexChange: (index: number) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

type UserContextProviderProps = {
	children: ReactNode;
};

const initialCallMe = 'Kyle';
const initialEmail = 'kyle@example.com';
const initialPerformanceMode = 'Focus';
const initialMyProjects = [
	'Julio Gomez Jazz Collective',
	'Old Mountain Acid Test',
	'Smile, Darling',
];
const initialActiveProjectIndex = 2;

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
	const [callMe, setCallMe] = useState(initialCallMe);
	const [email, setEmail] = useState(initialEmail);
	const [performanceMode, setPerformanceMode] = useState<PerformanceMode>(
		initialPerformanceMode,
	);
	const [myProjects, setMyProjects] = useState(initialMyProjects);
	const [activeProjectIndex, setActiveProjectIndex] = useState(
		initialActiveProjectIndex,
	);

	function handleUserChange(
		callMe: SetStateAction<string>,
		email: SetStateAction<string>,
		performanceMode: SetStateAction<PerformanceMode>,
	) {
		setCallMe(callMe);
		setEmail(email);
		setPerformanceMode(performanceMode as PerformanceMode);
	}

	function handlePerformanceModeChange(e: ChangeEvent<HTMLSelectElement>) {
		setPerformanceMode(e.target.value as PerformanceMode);
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
				performanceMode,
				myProjects,
				activeProjectIndex,
				handlePerformanceModeChange,
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
