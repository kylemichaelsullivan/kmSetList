import { useEffect, useState } from 'react';

import { useCatalog } from '@/context/catalog';
import { useSetlist } from '@/context/setlist';

import AddSongButton from './AddSongButton';
import NoSongs from '@/components/NoSongs';

function AddSong() {
  const { catalog } = useCatalog();
  const { setlist, selectSong, handleSelectSong } = useSetlist();

  // keyWord: type so it's only songs
  const [unselectedSongs, setUnselectedSongs] = useState<string[]>([]);

  function getUnselectedSongs() {
    return catalog.filter((song) => !setlist.includes(song));
  }

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleSelectSong(e.target.value);
  };

  useEffect(() => {
    if (catalog && setlist) {
      setUnselectedSongs(getUnselectedSongs());
    }
  }, [catalog, setlist]);

  return (
    <div className="AddSong flex gap-2 items-center w-full group">
      <div className="song flex-auto cursor-grab bg-white border border-current ring-blue-500 rounded-md shadow-lg w-full p-2 group-hover:ring">
        {unselectedSongs ? (
          <select
            className="bg-transparent w-full"
            value={selectSong}
            onChange={handleSelectChange}
          >
            <option value=""></option>
            {unselectedSongs.map((song) => (
              <option value={song} key={song}>
                {song}
              </option>
            ))}
          </select>
        ) : (
          <NoSongs />
        )}
      </div>

      <AddSongButton />
    </div>
  );
}

export default AddSong;
