import { useAppMode } from '@/context/appMode';
import { _AppModes } from '@/lookups';
import type { AllAppModes } from '@/types';

import Performing from '@/components/appModes/Performing/Performing';
import Selecting from '@/components/appModes/Selecting/Selecting';
import Editing from '@/components/appModes/Editing/Editing';
import User from '@/components/appModes/User/User';

type AppModeComponentsType = {
	[K in AllAppModes]: () => JSX.Element;
};

const AppModeComponents: AppModeComponentsType = {
	Performing,
	Selecting,
	Editing,
	User,
};

export default function Main() {
	const { appMode } = useAppMode();
	const AppModeComponent = AppModeComponents[appMode];

	return (
		<main
			className={`Main border-b border-black p-4 bg-${_AppModes[appMode][0] ?? 'white'} text-${_AppModes[appMode][1] ?? 'black'} print:border-0`}
		>
			{AppModeComponent && <AppModeComponent />}
		</main>
	);
}
