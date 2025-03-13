import { useState } from 'react';

import { useUser } from '@/context/user';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import Project from './Project';

function MyProjects() {
	const { myProjects } = useUser();
	const [isOpen, setIsOpen] = useState(true);

	const toggleIsOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className='MyProjects flex flex-col gap-4 w-full'>
			<div
				className='flex justify-center gap-2 items-center px-4 mx-auto transition-colors duration-300 hover:text-black'
				onClick={toggleIsOpen}
			>
				<h2 className='cursor-pointer text-2xl font-bold text-center select-none'>
					{myProjects.length === 1 ? 'My Project' : 'My Projects'}
				</h2>
				<FontAwesomeIcon icon={isOpen ? faPlus : faMinus} />
			</div>
			{isOpen
				? myProjects.map((project, index) => (
						<Project project={project} index={index} key={project} />
					))
				: null}
		</div>
	);
}

export default MyProjects;
