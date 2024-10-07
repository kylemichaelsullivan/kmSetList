import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';

function ResetSetlist() {
  function resetSetlist() {
    alert('resetSetlist()');
  }

  return (
    <button
      type="button"
      className="ResetSetlist flex justify-center items-center border border-current rounded-full ring-blue-500 font-bold text-xxxl w-8 h-8 transition-colors duration-300 hover:bg-gray-400 hover:text-black hover:ring"
      title="Reset Setlist"
      onClick={resetSetlist}
    >
      <FontAwesomeIcon icon={faRotate} />
    </button>
  );
}

export default ResetSetlist;
