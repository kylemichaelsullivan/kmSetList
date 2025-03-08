import { useUser } from '@/context/user';

import MyProjects from '@/components/appModes/User/MyProjects';
import NoProjects from '@/components/appModes/User/NoProjects';

function Projects() {
	const { myProjects } = useUser();

	return myProjects.length ? <MyProjects /> : <NoProjects />;
}

export default Projects;
