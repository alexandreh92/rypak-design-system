import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@rypak/ui/styled-system/styles.css';

import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
