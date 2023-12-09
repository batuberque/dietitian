import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './services/query-client';
import Post from './components/Post/Post';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post" element={<Post />} />
          </Routes>
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
root.render(<App />);
