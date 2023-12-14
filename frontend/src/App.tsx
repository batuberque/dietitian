import React, { lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './services/query-client';

const NavBar = lazy(() => import('./components/NavBar/NavBar'));
const Footer = lazy(() => import('./components/Footer/Footer'));
const AnimatedRouter = lazy(() => import('./components/AnimatedRouter'));

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <NavBar />
          <div className="flex-grow">
            <AnimatedRouter />
          </div>
          <Footer />
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
};

const container = document.getElementById('root');

if (!container) {
  throw new Error('no container to render to');
}
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
