import { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';

import { useUser } from '@/context/user';

import { playingModes } from '@/lookups';

import type { SettingsFormData } from '@/types';

function SettingsForm() {
	const { callMe, email, playingMode, handleUserChange } = useUser();
	const { register, handleSubmit, formState, reset } =
		useForm<SettingsFormData>({
			defaultValues: {
				callMe,
				email,
				playingMode,
			},
		});
	const { isDirty, touchedFields } = formState;

	const [shouldUpdateShow, setShouldUpdateShow] = useState(false);

	useEffect(() => {
		setShouldUpdateShow(isDirty || Object.keys(touchedFields).length > 0);
	}, [isDirty, touchedFields]);

	const onSubmit = (data: SettingsFormData) => {
		handleUserChange(data.callMe, data.email, data.playingMode);
		setShouldUpdateShow(false);
		reset({
			callMe: data.callMe,
			email: data.email,
			playingMode: data.playingMode,
		});
	};

	useEffect(() => {
		setShouldUpdateShow(isDirty);
	}, [isDirty]);

	return (
		<form
			className='SettingsForm relative flex flex-col gap-4 border border-white text-black w-full p-4 pb-12 mb-12'
			onSubmit={handleSubmit(onSubmit)}
		>
			<label className='FieldCallMe'>
				<span>Call Me</span>
				<input type='text' {...register('callMe')} placeholder='Call Me' />
			</label>

			<label className='FieldEmail'>
				<span>Email</span>
				<input type='email' {...register('email')} placeholder='Email' />
			</label>

			<label className='FieldPlayingMode'>
				<span>Playing Mode</span>
				<select className='capitalize' {...register('playingMode')}>
					{playingModes.map((mode) => (
						<option key={mode} value={mode}>
							{mode}
						</option>
					))}
				</select>
			</label>

			<button
				type='submit'
				className={`UpdateSettings absolute${!shouldUpdateShow ? ' hidden' : ''} bg-blue-500 font-bold border border-current text-white shadow-md px-4 py-2 mx-auto -bottom-6 left-1/2 transform -translate-x-1/2 transition-colors duration-300 hover:text-black`}
			>
				Update
			</button>
		</form>
	);
}

export default SettingsForm;
