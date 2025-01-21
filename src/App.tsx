import Header from '@/components/sections/Header';
import Main from '@/components/sections/Main';
import Footer from '@/components/sections/Footer';

import { CatalogContextProvider } from '@/context/catalog';

function App() {
	return (
		<div className='App'>
			<Header />
			<CatalogContextProvider>
				<Main />
			</CatalogContextProvider>
			<Footer />
		</div>
	);
}

export default App;
