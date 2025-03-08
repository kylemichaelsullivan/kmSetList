import { useUser } from '@/context/user';

type ProjectProps = {
	project: string;
	index: number;
};

function Project({ project, index }: ProjectProps) {
	const { activeProjectIndex, handleActiveProjectIndexChange } = useUser();

	const isActive = activeProjectIndex === index;

	return (
		<button
			type='button'
			className={`Project border border-current ${isActive ? 'font-bold' : 'text-black'} shadow-lg px-4 py-2 transition-colors duration-300 hover:text-white`}
			title={isActive ? `${project} (current)` : project}
			onClick={() => handleActiveProjectIndexChange(index)}
		>
			{project}
		</button>
	);
}

export default Project;
