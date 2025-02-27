import { ComponentType } from 'react';

import Performing from '@/components/appModes/Performing/Performing';
import Selecting from '@/components/appModes/Selecting/Selecting';
import Editing from '@/components/appModes/Editing/Editing';

import { useSettings } from '@/context/settings';
import { SetlistContextProvider } from '@/context/setlist';

import { _AppModes } from '@/lookups';
import { AppModes } from '@/types';

function Main() {
	const { appMode } = useSettings();

	const AppModeComponents: Record<AppModes, ComponentType> = {
		Performing: Performing,
		Selecting: Selecting,
		Editing: Editing,
	};

	const AppModeComponent = AppModeComponents[appMode as AppModes] || null;

	return (
		<SetlistContextProvider>
			<main
				className={`Main border-b border-black p-4 bg-${_AppModes[appMode][0]} text-${_AppModes[appMode][1]} print:border-0`}
			>
				{AppModeComponent && <AppModeComponent />}
			</main>
		</SetlistContextProvider>
	);
}

export default Main;
