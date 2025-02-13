import { type ReactNode, useState, createContext, useContext } from 'react';

import type { TSongs } from '@/types';

type CatalogContextType = {
	catalog: TSongs;
	handleCatalogChange: () => void;
	addSongToCatalog: () => void;
	toggleSongInCatalog: (songName: string) => void;
	removeSongFromCatalog: (songName: string) => void;
	resetCatalog: () => void;
};

const CatalogContext = createContext<CatalogContextType | undefined>(undefined);

type CatalogContextProviderProps = {
	children: ReactNode;
};

const initialCatalog: TSongs = [
	['All of You', 'Dm', 130, true, 1737444133211],
	['Bed', 'G#m', 75, true, 1737444133212],
	['Bedroom Eyes', 'E', 160, true, 1737444133213],
	['Break Me', 'Cm', 130, true, 1737444133214],
	['Chances', 'E', 170, true, 1737444133215],
	['Choke', 'D', 172, true, 1737444133216],
	['Dallas', 'D', 80, true, 1737444133217],
	['Firework', 'G', 140, true, 1737444133218],
	['Get Straight', 'Em', 170, true, 1737444133219],
	['Glass', 'Am', 140, true, 1737444133220],
	['Jimmy', 'E', 170, true, 1737444133221],
	['OK Cupid', '', 100, true, 1737444133222],
	['Recover', '', 0, true, 1737444133223],
	['Scared', 'F#m', 75, true, 1737444133224],
	['Stranger', 'C', 170, true, 1737444133225],
	['Trigger', '', 0, true, 1737444133226],
	['Warning', '', 80, true, 1737444133227],
];

export const CatalogContextProvider = ({
	children,
}: CatalogContextProviderProps) => {
	const [catalog, setCatalog] = useState(initialCatalog);

	function handleCatalogChange() {
		setCatalog(catalog);
	}

	function addSongToCatalog() {
		setCatalog([...catalog, ['', '', 120, true, Date.now()]]);
	}

	function removeSongFromCatalog(songName: string) {
		const updatedCatalog = catalog.filter((song) => song[0] !== songName);

		if (updatedCatalog.length === catalog.length) {
			console.warn(`Song ${songName} not found in catalog. No changes made.`);
			return;
		}

		setCatalog(
			updatedCatalog.map((song) => {
				if (song.length === 5) return song;
				return ['', '', 120, true, Date.now()];
			}),
		);
	}

	function toggleSongInCatalog(songName: string) {
		const updatedCatalog = catalog.map((song) => {
			if (song[0] === songName) {
				return [song[0], song[1], song[2], !song[3], song[4]]; // Toggle isActive
			}
			return song;
		});

		setCatalog(updatedCatalog as TSongs);
	}

	function resetCatalog() {
		setCatalog([]);
	}

	return (
		<CatalogContext.Provider
			value={{
				catalog,
				handleCatalogChange,
				addSongToCatalog,
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
