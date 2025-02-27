import Header from '@/components/sections/Header';
import Main from '@/components/sections/Main';
import Footer from '@/components/sections/Footer';

import { CatalogContextProvider } from '@/context/catalog';
import { UserContextProvider } from '@/context/user';
import { SetlistContextProvider } from '@/context/setlist';

function App() {
	return (
		<div className='App'>
			<CatalogContextProvider>
				<UserContextProvider>
					<Header />
					<SetlistContextProvider>
						<Main />
					</SetlistContextProvider>
					<Footer />
				</UserContextProvider>
			</CatalogContextProvider>
		</div>
	);
}

export default App;
