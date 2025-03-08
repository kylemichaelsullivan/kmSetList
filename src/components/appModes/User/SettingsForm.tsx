import { useRef } from 'react';

import FieldCallMe from './FieldCallMe';
import FieldEmail from './FieldEmail';
import FieldPerformanceMode from './FieldPerformanceMode';
import UpdateSettings from '@/components/appModes/User/UpdateSettings';

function SettingsForm() {
	const callMeRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const performanceModeRef = useRef<HTMLSelectElement>(null);

	return (
		<form
			action=''
			className='SettingsForm relative flex flex-col gap-4 border border-white text-black w-full p-4 pb-12 mb-12'
		>
			<FieldCallMe ref={callMeRef} />
			<FieldEmail ref={emailRef} />
			<FieldPerformanceMode ref={performanceModeRef} />
			<UpdateSettings
				callMeRef={callMeRef}
				emailRef={emailRef}
				performanceModeRef={performanceModeRef}
			/>
		</form>
	);
}

export default SettingsForm;
