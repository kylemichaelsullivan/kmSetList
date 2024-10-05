import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { SettingsContextProvider } from '@/context/settings.tsx';

import App from '@/App.tsx';

import '@/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SettingsContextProvider>
      <App />
    </SettingsContextProvider>
  </StrictMode>,
);
