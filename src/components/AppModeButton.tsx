import { useSettings } from '@/context/settings';

import type { ReactNode } from 'react';
import type { AppModes } from '@/types';

type AppModeButtonProps = {
	label: AppModes;
	colors: string[];
	icon: ReactNode;
};

function AppModeButton({ label, colors, icon }: AppModeButtonProps) {
	const { handleAppModeChange } = useSettings();

	const [bg, color] = colors;

	return (
		<button
			type='button'
			className={`AppModeButton flex items-center justify-center bg-${bg} border border-gray-400 text-${color} w-8 h-8 rounded uppercase transition-colors duration-200${label === label ? ' ring' : ''} hover:border-black`}
			title={label}
			onClick={() => handleAppModeChange(label as AppModes)}
		>
			{icon}
		</button>
	);
}

export default AppModeButton;
