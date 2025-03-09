import { useEffect, type RefObject } from 'react';

import { useForm, SubmitHandler } from 'react-hook-form';

import { BPM } from '@/lookups';

import type { AddSongFormData } from '@/types';

type AddSongFieldsProps = {
	isAdding: boolean;
	addSongFormRef: RefObject<HTMLFormElement>;
	addSongSongRef: RefObject<HTMLInputElement>;
	onSubmit: SubmitHandler<AddSongFormData>;
};

function AddSongFields({
	isAdding,
	addSongFormRef,
	addSongSongRef,
	onSubmit,
}: AddSongFieldsProps) {
	const { register, handleSubmit, reset } = useForm<AddSongFormData>();

	const handleFormSubmit: SubmitHandler<AddSongFormData> = (data) => {
		onSubmit(data);
		reset();
	};

	const { ref: songNameRef, ...songNameRest } = register('songName', {
		required: true,
	});

	useEffect(() => {
		if (addSongSongRef.current) {
			addSongSongRef.current.focus();
		}
	}, [addSongSongRef]);

	return (
		<form
			onSubmit={handleSubmit(handleFormSubmit)}
			className={`AddSongFields ${isAdding ? 'flex' : 'hidden'} flex-col gap-2 w-full group`}
			ref={addSongFormRef}
		>
			<input
				type='text'
				className='border border-current text-black w-full px-4 py-2 shadow-lg ring-blue-500 group-hover:ring'
				placeholder='Song (Required)'
				{...songNameRest}
				ref={(e) => {
					songNameRef(e);
					if (addSongSongRef) {
						// @ts-ignore (not read-only)
						addSongSongRef.current = e;
					}
				}}
			/>

			<input
				type='text'
				className='border border-current text-black w-full px-4 py-2 shadow-lg ring-blue-500 group-hover:ring'
				{...register('songKey')}
				placeholder='Key'
			/>

			<input
				type='number'
				className='border border-current text-black w-full px-4 py-2 shadow-lg ring-blue-500 group-hover:ring'
				{...register('bpm')}
				placeholder='Tempo'
				min={BPM.min}
				max={BPM.max}
			/>
		</form>
	);
}

export default AddSongFields;
