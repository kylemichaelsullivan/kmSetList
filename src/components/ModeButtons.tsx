import ModeButton from './ModeButton';
import { _Modes } from '@/lookups';

import type { Modes } from '@/types';

function ModeButtons() {
  return (
    <>
      {Object.entries(_Modes).map(([k, v]) => (
        <ModeButton label={k as Modes} colors={v} key={k} />
      ))}
    </>
  );
}

export default ModeButtons;
