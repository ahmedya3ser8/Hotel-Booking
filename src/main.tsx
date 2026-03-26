import { createRoot } from 'react-dom/client';

import { AppRouter } from '@routes/index';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <AppRouter />
)
