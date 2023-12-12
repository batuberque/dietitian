import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './services/query-client';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import ContactUs from './components/Contact/Contact';
import Project from './components/Project/Project';
import Service from './components/Service/Service';
import Vision from './components/Vision/Vision';

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/project" element={<Project />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </QueryClientProvider>
    </BrowserRouter>
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
