import {
	useState,
	useEffect,
	createContext,
	useContext,
	type ReactNode,
} from 'react';

import type { AppModes, AllAppModes } from '@/types';

type AppModeContextType = {
	appMode: AllAppModes;
	handleAppModeChange: (appMode: AllAppModes) => void;
	switchToInitialAppMode: () => void;
};

const AppModeContext = createContext<AppModeContextType | undefined>(undefined);

type AppModeContextProviderProps = {
	children: ReactNode;
};

const initialAppMode: AppModes = 'Performing';

export const AppModeContextProvider = ({
	children,
}: AppModeContextProviderProps) => {
	const [appMode, setAppMode] = useState<AllAppModes>(initialAppMode);

	function handleAppModeChange(appMode: AllAppModes) {
		setAppMode(appMode);
	}

	// DEFAULT: "Performing"
	function switchToInitialAppMode() {
		setAppMode(initialAppMode);
	}

	useEffect(() => {
		const handleKeyUp = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				switchToInitialAppMode();
			}
		};

		window.addEventListener('keyup', handleKeyUp);

		return () => {
			window.removeEventListener('keyup', handleKeyUp);
		};
	}, []);

	return (
		<AppModeContext.Provider
			value={{
				appMode,
				handleAppModeChange,
				switchToInitialAppMode,
			}}
		>
			{children}
		</AppModeContext.Provider>
	);
};

export const useAppMode = (): AppModeContextType => {
	const context = useContext(AppModeContext);
	if (!context) {
		throw new Error(
			'useAppMode must be used within an <AppModeContextProvider />',
		);
	}
	return context;
};
