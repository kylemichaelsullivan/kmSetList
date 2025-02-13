import { useState } from 'react';

import type { TSong } from '@/types';

import Title from './Title';
import Meta from './Meta';

type SongDetailsProps = {
	song: TSong;
	isActive: boolean;
};

function SongDetails({ song, isActive }: SongDetailsProps) {
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleIsExpanded = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<div className='SongDetails flex flex-col gap-2 w-full'>
			<Title
				songName={song[0]}
				isActive={isActive}
				isExpanded={isExpanded}
				toggleIsExpanded={toggleIsExpanded}
			/>

			{isActive && isExpanded && <Meta song={song} />}
		</div>
	);
}

export default SongDetails;
