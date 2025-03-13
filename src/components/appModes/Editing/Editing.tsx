import { useState, useMemo, useRef } from 'react';

import { useCatalog } from '@/context/catalog';
import { SongContextProvider } from '@/context/song';

import Songs from './Songs';
import NoSongs from '@/components/NoSongs';
import AddSongButton from './AddSongButton';
import AddSongForm from './AddSongForm';

import type { AddSongFormData, Song, SongKey } from '@/types';

function Editing() {
	const { catalog, handleCatalogChange } = useCatalog();
	const alphabeticalCatalog = useMemo(
		() => [...catalog].sort((a, b) => a.name.localeCompare(b.name)),
		[catalog],
	);

	const [isAdding, setIsAdding] = useState(false);

	const addSongFormRef = useRef<HTMLFormElement>(null);
	const addSongSongRef = useRef<HTMLInputElement>(null);

	const handleAddSong = (data: AddSongFormData) => {
		const newSong: Song = {
			name: data.songName,
			songKey: data.songKey as SongKey,
			bpm: data.bpm,
			isActive: true,
			updatedAt: Date.now(),
		};

		const newCatalog = [...catalog, newSong].sort((a, b) =>
			a.name.localeCompare(b.name),
		);

		handleCatalogChange(newCatalog);
	};

	const handleAddSongButtonClick = () => {
		if (!isAdding) {
			setIsAdding(true);
			return;
		}

		if (!addSongSongRef.current?.value.length) {
			return;
		}

		if (addSongFormRef.current) {
			addSongFormRef.current.dispatchEvent(
				new Event('submit', { bubbles: true, cancelable: true }),
			);
		}

		setIsAdding(false);
	};

	return (
		<div className='Editing flex gap-4 w-full flex-col items-center p-4'>
			{catalog.length > 0 ? (
				<SongContextProvider>
					<Songs songs={alphabeticalCatalog} />
				</SongContextProvider>
			) : (
				<NoSongs />
			)}

			<AddSongButton
				isAdding={isAdding}
				handleAddSongButtonClick={handleAddSongButtonClick}
				addSongSongRef={addSongSongRef}
			/>

			<AddSongForm
				isAdding={isAdding}
				addSongFormRef={addSongFormRef}
				addSongSongRef={addSongSongRef}
				onSubmit={handleAddSong}
			/>
		</div>
	);
}

export default Editing;
