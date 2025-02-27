import type { ComponentType } from 'react';

import { useAppMode } from '@/context/appMode';
import { SetlistContextProvider } from '@/context/setlist';

import { _AppModes } from '@/lookups';
import type { AllAppModes } from '@/types';

import Performing from '@/components/appModes/Performing/Performing';
import Selecting from '@/components/appModes/Selecting/Selecting';
import Editing from '@/components/appModes/Editing/Editing';
import User from '@/components/appModes/User/User';

function Main() {
	const { appMode } = useAppMode();

	const AppModeComponents: Record<AllAppModes, ComponentType> = {
		Performing: Performing,
		Selecting: Selecting,
		Editing: Editing,
		User: User,
	};

	const AppModeComponent = AppModeComponents[appMode as AllAppModes] || null;

	return (
		<SetlistContextProvider>
			<main
				className={`Main border-b border-black p-4 bg-${_AppModes[appMode as keyof typeof _AppModes][0] ?? 'white'} text-${_AppModes[appMode as keyof typeof _AppModes][1] ?? 'black'} print:border-0`}
			>
				{AppModeComponent && <AppModeComponent />}
			</main>
		</SetlistContextProvider>
	);
}

export default Main;
