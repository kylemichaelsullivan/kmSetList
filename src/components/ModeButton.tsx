import { useSettings } from '@/context/settings';

import type { ReactNode } from 'react';
import type { Modes } from '@/types';

type ModeButtonProps = {
	label: Modes;
	colors: string[];
	icon: ReactNode;
};

function ModeButton({ label, colors, icon }: ModeButtonProps) {
	const { mode, handleModeChange } = useSettings();

	const [bg, color] = colors;

	return (
		<button
			type='button'
			className={`ModeButton flex items-center justify-center bg-${bg} border border-gray-400 text-${color} w-8 h-8 rounded uppercase transition-colors duration-200${mode === label ? ' ring' : ''} hover:border-black`}
			title={label}
			onClick={() => handleModeChange(label as Modes)}
		>
			{icon}
		</button>
	);
}

export default ModeButton;
