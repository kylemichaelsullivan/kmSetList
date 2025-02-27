import { useAppMode } from '@/context/appMode';

function NoSongs() {
	const { appMode } = useAppMode();

	const isEditing = appMode === 'Editing';

	return (
		<p className='NoSongs text-center'>{`Please add songs to your ${isEditing ? 'catalog' : 'setlist'}.`}</p>
	);
}

export default NoSongs;
