import { type ReactNode, useState, createContext, useContext } from 'react';

import type { Song } from '@/types';

type CatalogContextType = {
	catalog: Song[];
	handleCatalogChange: (newCatalog: Song[]) => void;
	toggleSongInCatalog: (songName: string) => void;
	removeSongFromCatalog: (songName: string) => void;
	resetCatalog: () => void;
};

const CatalogContext = createContext<CatalogContextType | undefined>(undefined);

type CatalogContextProviderProps = {
	children: ReactNode;
};

const initialCatalog: Song[] = [
	{
		name: 'All of You',
		songKey: 'Dm',
		bpm: 130,
		isActive: true,
		updatedAt: 1737444133211,
	},
	{
		name: 'Bed',
		songKey: 'G#m',
		bpm: 75,
		isActive: true,
		updatedAt: 1737444133212,
	},
	{
		name: 'Bedroom Eyes',
		songKey: 'E',
		bpm: 160,
		isActive: true,
		updatedAt: 1737444133213,
	},
	{
		name: 'Break Me',
		songKey: 'Cm',
		bpm: 130,
		isActive: true,
		updatedAt: 1737444133214,
	},
	{
		name: 'Chances',
		songKey: 'E',
		bpm: 170,
		isActive: true,
		updatedAt: 1737444133215,
	},
	{
		name: 'Choke',
		songKey: 'D',
		bpm: 172,
		isActive: true,
		updatedAt: 1737444133216,
	},
	{
		name: 'Dallas',
		songKey: 'D',
		bpm: 80,
		isActive: true,
		updatedAt: 1737444133217,
	},
	{
		name: 'Firework',
		songKey: 'G',
		bpm: 140,
		isActive: true,
		updatedAt: 1737444133218,
	},
	{
		name: 'Get Straight',
		songKey: 'Em',
		bpm: 170,
		isActive: true,
		updatedAt: 1737444133219,
	},
	{
		name: 'Glass',
		songKey: 'Am',
		bpm: 140,
		isActive: true,
		updatedAt: 1737444133220,
	},
	{
		name: 'Jimmy',
		songKey: 'E',
		bpm: 170,
		isActive: true,
		updatedAt: 1737444133221,
	},
	{
		name: 'OK Cupid',
		songKey: '',
		bpm: 100,
		isActive: true,
		updatedAt: 1737444133222,
	},
	{
		name: 'Recover',
		songKey: '',
		bpm: 0,
		isActive: true,
		updatedAt: 1737444133223,
	},
	{
		name: 'Scared',
		songKey: 'F#m',
		bpm: 75,
		isActive: true,
		updatedAt: 1737444133224,
	},
	{
		name: 'Stranger',
		songKey: 'C',
		bpm: 170,
		isActive: true,
		updatedAt: 1737444133225,
	},
	{
		name: 'Trigger',
		songKey: '',
		bpm: 0,
		isActive: true,
		updatedAt: 1737444133226,
	},
	{
		name: 'Warning',
		songKey: '',
		bpm: 80,
		isActive: true,
		updatedAt: 1737444133227,
	},
];

export const CatalogContextProvider = ({
	children,
}: CatalogContextProviderProps) => {
	const [catalog, setCatalog] = useState(initialCatalog);

	function handleCatalogChange(newCatalog: Song[]) {
		setCatalog(newCatalog);
	}

	function removeSongFromCatalog(songName: string) {
		const updatedCatalog = catalog.filter((song) => song.name !== songName);

		if (updatedCatalog.length === catalog.length) {
			console.warn(`Song ${songName} not found in catalog. No changes made.`);
			return;
		}

		setCatalog(updatedCatalog);
	}

	function toggleSongInCatalog(songName: string) {
		const updatedCatalog = catalog.map((song) => {
			if (song.name === songName) {
				return { ...song, isActive: !song.isActive };
			}
			return song;
		});

		setCatalog(updatedCatalog);
	}

	function resetCatalog() {
		setCatalog([]);
	}

	return (
		<CatalogContext.Provider
			value={{
				catalog,
				handleCatalogChange,
				removeSongFromCatalog,
				resetCatalog,
				toggleSongInCatalog,
			}}
		>
			{children}
		</CatalogContext.Provider>
	);
};

export const useCatalog = (): CatalogContextType => {
	const context = useContext(CatalogContext);
	if (!context) {
		throw new Error(
			'useCatalog must be used within an <CatalogContextProvider />',
		);
	}
	return context;
};
