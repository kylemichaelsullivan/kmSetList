type MoveSongProps = {
  song: string;
  isFirst: boolean;
  isLast: boolean;
};

function MoveSong({ song, isFirst, isLast }: MoveSongProps) {
  function moveUpSongInSetlist() {
    alert(`moveUpSongInSetlist(${song})`);
  }

  function moveDownSongInSetlist() {
    alert(`moveDownSongInSetlist(${song})`);
  }
  return (
    <div className="MoveSong relative flex flex-col flex-no-wrap flex-1 min-w-4 h-8">
      <button
        type="button"
        className={`btn-up bg-gray-500 rounded-t-md flex-1 transition-colors z-10${isFirst ? ' pointer-events-none' : ''} hover:bg-gray-900`}
        title={`Move Up ${song}`}
        onClick={moveUpSongInSetlist}
      ></button>

      <button
        type="button"
        className={`btn-down bg-gray-500 rounded-b-md flex-1 transition-colors z-10${isLast ? ' pointer-events-none' : ''} hover:bg-gray-900`}
        title={`Move Down ${song}`}
        onClick={moveDownSongInSetlist}
      ></button>
    </div>
  );
}

export default MoveSong;
