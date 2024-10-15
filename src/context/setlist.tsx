import { useState, createContext, useContext, type ReactNode } from 'react';

// keyWord: type to only be song
type SetlistContextType = {
  setlist: string[];
  hasPlayed: { [key: string]: boolean };
  selectSong: string;
  handleSelectSong: (song: string) => void;
  handleSetlistChange: () => void;
  toggleHasPlayed: (song: string) => void;
  addSongToSetlist: () => void;
  removeSongFromSetlist: (song: string) => void;
  restoreSetlist: () => void;
  resetSetlist: () => void;
};

const SetlistContext = createContext<SetlistContextType | undefined>(undefined);

type SetlistContextProviderProps = {
  children: ReactNode;
};

const initialSetlist: string[] = [];
// const initialSetlist: string[] = [
//   'To Be Continued…',
//   'Best Cult in Michigan',
//   'Anything At All',
//   'Black Hole',
//   'Hail to the Old Mountain',
//   'Psychobilly Rocketship',
//   'Hate It Here',
//   'Hope',
//   'The World’s Not as Tragic',
// ];

const initialHasPlayed: { [key: string]: boolean } = initialSetlist.reduce(
  (acc, song) => ({ ...acc, [song]: false }),
  {},
);

const initialSelectSong = '';

export const SetlistContextProvider = ({
  children,
}: SetlistContextProviderProps) => {
  const [setlist, setSetlist] = useState(initialSetlist);
  const [hasPlayed, setHasPlayed] = useState(initialHasPlayed);
  const [selectSong, setSelectSong] = useState(initialSelectSong);

  function handleSetlistChange() {
    setSetlist(setlist);
  }

  function handleSelectSong(song: string) {
    setSelectSong(song);
  }

  // keyWord: type to only be song
  function addSongToSetlist() {
    if (selectSong) {
      setSetlist([...setlist, selectSong]);
      setHasPlayed({ ...hasPlayed, [selectSong]: false });
      setSelectSong('');
    }
  }

  // keyWord: type to only be song
  function removeSongFromSetlist(song: string) {
    if (song) {
      setSetlist(setlist.filter((s) => s !== song));
      const updatedHasPlayed = { ...hasPlayed };
      delete updatedHasPlayed[song];
      setHasPlayed(updatedHasPlayed);
    }
  }

  function restoreSetlist() {
    setHasPlayed(
      Object.keys(hasPlayed).reduce(
        (acc, song) => ({ ...acc, [song]: false }),
        {},
      ),
    );
  }

  function resetSetlist() {
    setSetlist([]);
  }

  function toggleHasPlayed(song: string) {
    setHasPlayed({ ...hasPlayed, [song]: !hasPlayed[song] });
  }

  return (
    <SetlistContext.Provider
      value={{
        setlist,
        hasPlayed,
        selectSong,
        handleSelectSong,
        handleSetlistChange,
        addSongToSetlist,
        removeSongFromSetlist,
        restoreSetlist,
        resetSetlist,
        toggleHasPlayed,
      }}
    >
      {children}
    </SetlistContext.Provider>
  );
};

export const useSetlist = (): SetlistContextType => {
  const context = useContext(SetlistContext);
  if (!context) {
    throw new Error(
      'useSetlist must be used within a <SetlistContextProvider />',
    );
  }
  return context;
};
