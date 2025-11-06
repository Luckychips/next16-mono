import { StrictMode, Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import router from './core/router';
import 'virtual:uno.css';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Suspense fallback={<div>initialize...</div>}>
          <RouterProvider router={router} />
      </Suspense>
  </StrictMode>,
)
