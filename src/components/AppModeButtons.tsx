import AppModeButton from './AppModeButton';
import { _AppModes } from '@/lookups';

import type { AppModes } from '@/types';

function AppModeButtons() {
	return (
		<>
			{Object.entries(_AppModes).map(([k, v]) => (
				<AppModeButton
					label={k as AppModes}
					colors={v as string[]}
					icon={v[2]}
					key={k}
				/>
			))}
		</>
	);
}

export default AppModeButtons;
