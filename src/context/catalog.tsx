import { useState, createContext, useContext, type ReactNode } from 'react';

type CatalogContextType = {
  catalog: string[];
  handleCatalogChange: () => void;
  addSongToCatalog: () => void;
  resetCatalog: () => void;
};

const CatalogContext = createContext<CatalogContextType | undefined>(undefined);

type CatalogContextProviderProps = {
  children: ReactNode;
};

const initialCatalog: string[] = [
  'Another Year On Earth',
  'Anything At All',
  'Baby, I Love You',
  'Best Cult in Michigan',
  'Black Hole',
  'Colonel Stone',
  'Darlin’',
  'Don’t Pass Me By',
  'Everybody’s Gotta Live',
  'Fade Away',
  'Fat Bottomed Girls',
  'Hail to the Old Mountain',
  'Halfway to Memphis',
  'Hate It Here',
  'Hope',
  'Maybe The Devil Don’t Know',
  'Psychobilly Rocketship',
  'Send Me On My Way',
  'Tell Me',
  'Time',
  'Time to Pretend',
  'The World’s Not as Tragic',
  'To Be Continued…',
  'What Do I Know?',
];

export const CatalogContextProvider = ({
  children,
}: CatalogContextProviderProps) => {
  const [catalog, setCatalog] = useState(initialCatalog);

  function handleCatalogChange() {
    setCatalog(catalog);
  }

  function addSongToCatalog() {
    alert('addSongToCatalog()');
    setCatalog([...catalog, 'New Song']);
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
        resetCatalog,
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
