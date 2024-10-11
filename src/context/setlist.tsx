import { useState, createContext, useContext, type ReactNode } from 'react';

type SetlistContextType = {
  setlist: string[];
  hasPlayed: { [key: string]: boolean };
  handleSetlistChange: () => void;
  toggleHasPlayed: (song: string) => void;
  addSongToSetlist: () => void;
  resetSetlist: () => void;
};

const SetlistContext = createContext<SetlistContextType | undefined>(undefined);

type SetlistContextProviderProps = {
  children: ReactNode;
};

// const initialSetlist: string[] = [];
const initialSetlist: string[] = [
  'To Be Continued…',
  'Best Cult in Michigan',
  'Anything At All',
  'Black Hole',
  'Hail to the Old Mountain',
  'Psychobilly Rocketship',
  'Hate It Here',
  'Hope',
  'The World’s Not as Tragic',
];

const initialHasPlayed: { [key: string]: boolean } = initialSetlist.reduce(
  (acc, song) => ({ ...acc, [song]: false }),
  {},
);

export const SetlistContextProvider = ({
  children,
}: SetlistContextProviderProps) => {
  const [setlist, setSetlist] = useState(initialSetlist);
  const [hasPlayed, setHasPlayed] = useState(initialHasPlayed);

  function handleSetlistChange() {
    setSetlist(setlist);
  }

  function addSongToSetlist() {
    const newSong = 'New Song';
    setSetlist([...setlist, newSong]);
    setHasPlayed({ ...hasPlayed, [newSong]: false });
  }

  function resetSetlist() {
    setHasPlayed(
      Object.keys(hasPlayed).reduce(
        (acc, song) => ({ ...acc, [song]: false }),
        {},
      ),
    );
  }

  function toggleHasPlayed(song: string) {
    setHasPlayed({ ...hasPlayed, [song]: !hasPlayed[song] });
  }

  return (
    <SetlistContext.Provider
      value={{
        setlist,
        hasPlayed,
        handleSetlistChange,
        addSongToSetlist,
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
