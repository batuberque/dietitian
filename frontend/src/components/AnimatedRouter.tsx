import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home/Home';
import Vision from './Vision/Vision';
import Project from './Project/Project';
import ProjectDetail from './Project/ProjectDetail';
import Service from './Service/Service';
import ContactUs from './Contact/Contact';
import About from './About/About';
import NotFound from './NotFound/NotFound';
import Login from './Login/Login';

const AnimatedRouter = () => {
  const location = useLocation();

  return (
    <div className="flex-grow">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedRouter;
