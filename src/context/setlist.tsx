import { useState, createContext, useContext, type ReactNode } from 'react';

type SetlistContextType = {
  setlist: string[];
  handleSetlistChange: () => void;
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
];

export const SetlistContextProvider = ({
  children,
}: SetlistContextProviderProps) => {
  const [setlist, setSetlist] = useState(initialSetlist);

  function handleSetlistChange() {
    setSetlist(setlist);
  }

  return (
    <SetlistContext.Provider
      value={{
        setlist,
        handleSetlistChange,
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
      'useSetlist must be used within an <SetlistContextProvider />',
    );
  }
  return context;
};
