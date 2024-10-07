import { useState } from 'react';

type SongProps = {
  song: string;
};

function Song({ song }: SongProps) {
  const [hasPlayed, setHasPlayed] = useState(false);

  const toggleHasPlayed = () => {
    setHasPlayed(!hasPlayed);
  };

  return (
    <div
      className={`Song cursor-pointer border border-current rounded-md ring-blue-500 shadow w-full px-4 py-2${hasPlayed ? ' played' : ''} hover:ring`}
      title={`${hasPlayed ? 'Enable' : 'Disable'} ${song}`}
      onClick={toggleHasPlayed}
    >
      {song}
    </div>
  );
}

export default Song;
