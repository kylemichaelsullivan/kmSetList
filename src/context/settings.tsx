import {
  useState,
  useEffect,
  createContext,
  useContext,
  type ReactNode,
} from 'react';

import type { Modes } from '@/types';

type SettingsContextType = {
  mode: Modes;
  handleModeChange: (Mode: Modes) => void;
  reset: () => void;
};

const SettingsContext = createContext<SettingsContextType | undefined>(
  undefined,
);

type SettingsContextProviderProps = {
  children: ReactNode;
};

const initialMode: Modes = 'Selecting';

export const SettingsContextProvider = ({
  children,
}: SettingsContextProviderProps) => {
  const [mode, setMode] = useState<Modes>(initialMode);

  function handleModeChange(mode: Modes) {
    setMode(mode);
  }

  function reset() {
    setMode(initialMode);
  }

  useEffect(() => {
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        reset();
      }
    };

    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <SettingsContext.Provider
      value={{
        mode,
        handleModeChange,
        reset,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = (): SettingsContextType => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error(
      'useSettings must be used within an <SettingsContextProvider />',
    );
  }
  return context;
};
