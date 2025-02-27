import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { AppModeContextProvider } from '@/context/appMode';

import App from '@/App.tsx';

import '@/index.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<AppModeContextProvider>
			<App />
		</AppModeContextProvider>
	</StrictMode>,
);
