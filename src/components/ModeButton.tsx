import { useSettings } from '@/context/settings';

import type { Modes } from '@/types';

type ModeButtonProps = {
  label: Modes;
  colors: any;
};

function ModeButton({ label, colors }: ModeButtonProps) {
  const { mode, handleModeChange } = useSettings();
  const firstLetter = label.substring(0, 1);

  const [bg, color] = colors;

  return (
    <button
      type="button"
      className={`ModeButton flex justify-center items-center bg-${bg} border border-gray-400 text-${color} rounded uppercase w-8 h-8 transition-colors duration-200${mode === label ? ' ring' : ''} hover:border-black`}
      title={label}
      onClick={() => handleModeChange(label as Modes)}
    >
      {firstLetter}
    </button>
  );
}

export default ModeButton;
