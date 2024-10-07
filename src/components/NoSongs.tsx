import { useSettings } from '@/context/settings';

function NoSongs() {
  const { mode } = useSettings();

  const isEditing = mode === 'Editing';

  return (
    <p className="NoSongs text-center">{`Please add songs to your ${isEditing ? 'catalog' : 'setlist'}.`}</p>
  );
}

export default NoSongs;
