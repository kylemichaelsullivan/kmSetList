import { useSettings } from '@/context/settings';

import type { Modes } from '@/types';

type ModeButtonProps = {
	label: Modes;
	colors: any;
};

function ModeButton({ label, colors }: ModeButtonProps) {
	const { mode, handleModeChange } = useSettings();
	const firstLetter = label.substring(0, 1);

	const [bg, color] = colors;

	return (
		<button
			type='button'
			className={`ModeButton flex items-center justify-center bg-${bg} border border-gray-400 text-${color} h-8 w-8 rounded uppercase transition-colors duration-200${mode === label ? 'ring' : ''} hover:border-black`}
			title={label}
			onClick={() => handleModeChange(label as Modes)}
		>
			{firstLetter}
		</button>
	);
}

export default ModeButton;
