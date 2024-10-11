import { useSetlist } from '@/context/setlist';

type SongProps = {
  song: string;
};

function Song({ song }: SongProps) {
  const { hasPlayed, toggleHasPlayed } = useSetlist();

  return (
    <div
      className={`Song cursor-pointer border border-current rounded-md ring-blue-500 shadow w-full px-4 py-2${hasPlayed[song] ? ' played' : ''} hover:ring`}
      title={`${hasPlayed[song] ? 'Enable' : 'Disable'} ${song}`}
      onClick={() => toggleHasPlayed(song)}
    >
      {song}
    </div>
  );
}

export default Song;
