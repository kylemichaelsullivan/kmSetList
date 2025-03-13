import { useUser } from '@/context/user';

import MyProjects from './MyProjects';
import NoProjects from './NoProjects';

function Projects() {
	const { myProjects } = useUser();

	return myProjects.length ? <MyProjects /> : <NoProjects />;
}

export default Projects;
