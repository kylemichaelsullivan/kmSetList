import Header from '@/components/sections/Header';
import Main from '@/components/sections/Main';
import Footer from '@/components/sections/Footer';

import { CatalogContextProvider } from '@/context/catalog';
import { SetlistContextProvider } from '@/context/setlist';

function App() {
	return (
		<div className='App'>
			<CatalogContextProvider>
				<Header />
				<SetlistContextProvider>
					<Main />
				</SetlistContextProvider>
				<Footer />
			</CatalogContextProvider>
		</div>
	);
}

export default App;
