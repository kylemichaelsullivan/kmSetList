import {
	useState,
	useEffect,
	createContext,
	useContext,
	type ReactNode,
} from 'react';

import type { AppModes } from '@/types';

type SettingsContextType = {
	appMode: AppModes;
	handleAppModeChange: (appMode: AppModes) => void;
	switchToInitialAppMode: () => void;
};

const SettingsContext = createContext<SettingsContextType | undefined>(
	undefined,
);

type SettingsContextProviderProps = {
	children: ReactNode;
};

const initialAppMode: AppModes = 'Performing';

export const SettingsContextProvider = ({
	children,
}: SettingsContextProviderProps) => {
	const [appMode, setAppMode] = useState<AppModes>(initialAppMode);

	function handleAppModeChange(appMode: AppModes) {
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
		<SettingsContext.Provider
			value={{
				appMode,
				handleAppModeChange,
				switchToInitialAppMode,
			}}
		>
			{children}
		</SettingsContext.Provider>
	);
};

export const useSettings = (): SettingsContextType => {
	const context = useContext(SettingsContext);
	if (!context) {
		throw new Error(
			'useSettings must be used within an <SettingsContextProvider />',
		);
	}
	return context;
};
