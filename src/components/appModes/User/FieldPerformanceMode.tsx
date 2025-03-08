import { forwardRef } from 'react';

import { useUser } from '@/context/user';

import type { PerformanceMode } from '@/types';

const FieldPerformanceMode = forwardRef<HTMLSelectElement, {}>(({}, ref) => {
	const { performanceMode } = useUser();

	const performanceModes: PerformanceMode[] = ['Focus', 'Original'];

	return (
		<label className='FieldPerformanceMode'>
			<span>Performance Mode</span>
			<select defaultValue={performanceMode} ref={ref}>
				{performanceModes.map((mode) => (
					<option key={mode} value={mode}>
						{mode}
					</option>
				))}
			</select>
		</label>
	);
});

export default FieldPerformanceMode;
