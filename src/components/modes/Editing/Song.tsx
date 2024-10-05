type SongProps = {
  song: string;
};

function Song({ song }: SongProps) {
  return (
    <div className="Song border border-current rounded-md shadow-lg w-full px-4 py-2">
      {song}
    </div>
  );
}

export default Song;
