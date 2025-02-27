function AddSongFields() {
	return (
		<div className='AddSongFields flex flex-col gap-2 w-full group'>
			<input
				type='text'
				className='border border-current text-black w-full px-4 py-2 shadow-lg ring-blue-500 group-hover:ring'
				placeholder='Song'
			/>

			<input
				type='text'
				className='border border-current text-black w-full px-4 py-2 shadow-lg ring-blue-500 group-hover:ring'
				placeholder='Key'
			/>

			<input
				type='number'
				className='border border-current text-black w-full px-4 py-2 shadow-lg ring-blue-500 group-hover:ring'
				placeholder='Tempo'
			/>
		</div>
	);
}

export default AddSongFields;
