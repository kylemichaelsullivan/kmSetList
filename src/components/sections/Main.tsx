import { useAppMode } from '@/context/appMode';
import { _AppModes } from '@/lookups';

import Playing from '@/components/appModes/Playing/Playing';
import Selecting from '@/components/appModes/Selecting/Selecting';
import Editing from '@/components/appModes/Editing/Editing';
import User from '@/components/appModes/User/User';

import type { AllAppModes } from '@/types';

type AppModeComponentsType = {
	[K in AllAppModes]: () => JSX.Element;
};

const AppModeComponents: AppModeComponentsType = {
	Playing,
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
