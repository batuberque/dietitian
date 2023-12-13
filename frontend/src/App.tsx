import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './services/query-client';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import AnimatedRouter from './components/AnimatedRouter';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <NavBar />
          <AnimatedRouter />
          <Footer />
        </QueryClientProvider>
      </BrowserRouter>
    </>
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
