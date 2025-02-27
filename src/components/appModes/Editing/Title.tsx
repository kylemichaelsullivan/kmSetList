import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons/faCaretRight';

type TitleProps = {
	songName: string;
	isActive: boolean;
	isExpanded: boolean;
	toggleIsExpanded: () => void;
};

function Title({
	songName,
	isActive,
	isExpanded,
	toggleIsExpanded,
}: TitleProps) {
	return (
		<div className='Title relative'>
			<input
				type='text'
				className={`flex rounded-md border border-current ${isActive ? 'text-black' : 'text-gray-300 pointer-events-none'} w-full pl-4 pr-9 py-2 shadow-lg${isActive ? ' ring-blue-500' : ''} group-hover:ring`}
				defaultValue={songName}
				placeholder='Song Title'
			/>
			<button
				className={`${isActive ? 'absolute' : 'hidden'} rounded-full w-6 h-6 top-5 right-2 -translate-y-1/2 transition-colors duration-300 hover:bg-gray-200`}
				title={
					isExpanded
						? `Hide Details (${songName})`
						: `Show Details (${songName})`
				}
				onClick={toggleIsExpanded}
			>
				<FontAwesomeIcon
					icon={faCaretRight}
					className={`transition-transform duration-300${isExpanded ? ' rotate-90' : ''}`}
				/>
			</button>
		</div>
	);
}

export default Title;
