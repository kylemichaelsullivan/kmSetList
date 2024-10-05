import Performing from '@/components/modes/Performing/Performing';
import Selecting from '@/components/modes/Selecting/Selecting';
import Editing from '@/components/modes/Editing/Editing';

import { useSettings } from '@/context/settings';
import { SetlistContextProvider } from '@/context/setlist';

import { _Modes } from '@/lookups';

function Main() {
  const { mode } = useSettings();

  const modeComponents: any = {
    Performing: Performing,
    Selecting: Selecting,
    Editing: Editing,
  };

  const ModeComponent = modeComponents[mode] || null;

  return (
    <SetlistContextProvider>
      <main
        className={`Main border-b border-black p-4 bg-${_Modes[mode][0]} text-${_Modes[mode][1]}`}
      >
        {ModeComponent && <ModeComponent />}
      </main>
    </SetlistContextProvider>
  );
}

export default Main;
