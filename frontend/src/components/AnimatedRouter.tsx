import { AnimatePresence, motion } from 'framer-motion';
import { lazy, Suspense, useLayoutEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import LoadingFullscreen from './Loading/LoadingComponent';

const Home = lazy(() => import('./Home/Home'));
const Vision = lazy(() => import('./Vision/Vision'));
const Project = lazy(() => import('./Project/Project'));
const ProjectDetail = lazy(() => import('./Project/ProjectDetail'));
const Service = lazy(() => import('./Service/Service'));
const ContactUs = lazy(() => import('./Contact/Contact'));
const About = lazy(() => import('./About/About'));
const NotFound = lazy(() => import('./NotFound/NotFound'));
const Login = lazy(() => import('./Login/Login'));
const ProtectedRoute = lazy(() => import('./ProtectedRouter'));
const AdminPanel = lazy(() => import('./AdminPanel/AdminPanel'));
const References = lazy(() => import('./References/References'));

const pageTransitionVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const AnimatedRouter = () => {
  const location = useLocation();
  const [isInitialMount, setIsInitialMount] = useState(true);

  useLayoutEffect(() => {
    setIsInitialMount(false);
  }, []);

  return (
    <div className="flex-grow">
      <AnimatePresence initial={isInitialMount}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <Suspense fallback={<LoadingFullscreen />}>
                <Home />
              </Suspense>
            }
          />

          <Route
            path="/vision"
            element={
              <Suspense fallback={<LoadingFullscreen />}>
                <motion.div
                  key={location.pathname}
                  variants={pageTransitionVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  <Vision />
                </motion.div>
              </Suspense>
            }
          />

          <Route
            path="/project"
            element={
              <Suspense fallback={<LoadingFullscreen />}>
                <motion.div
                  key={location.pathname}
                  variants={pageTransitionVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  <Project />
                </motion.div>
              </Suspense>
            }
          />

          <Route
            path="/project/:id"
            element={
              <Suspense fallback={<LoadingFullscreen />}>
                <motion.div
                  key={location.pathname}
                  variants={pageTransitionVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  <ProjectDetail />
                </motion.div>
              </Suspense>
            }
          />

          <Route
            path="/service"
            element={
              <Suspense fallback={<LoadingFullscreen />}>
                <motion.div
                  key={location.pathname}
                  variants={pageTransitionVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  <Service />
                </motion.div>
              </Suspense>
            }
          />

          <Route
            path="/about"
            element={
              <Suspense fallback={<LoadingFullscreen />}>
                <motion.div
                  key={location.pathname}
                  variants={pageTransitionVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  <About />
                </motion.div>
              </Suspense>
            }
          />

          <Route
            path="/references"
            element={
              <Suspense fallback={<LoadingFullscreen />}>
                <motion.div
                  key={location.pathname}
                  variants={pageTransitionVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  <References />
                </motion.div>
              </Suspense>
            }
          />

          <Route
            path="/contact"
            element={
              <Suspense fallback={<LoadingFullscreen />}>
                <motion.div
                  key={location.pathname}
                  variants={pageTransitionVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  <ContactUs />
                </motion.div>
              </Suspense>
            }
          />

          <Route
            path="/login"
            element={
              <Suspense fallback={<LoadingFullscreen />}>
                <motion.div
                  key={location.pathname}
                  variants={pageTransitionVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  <Login />
                </motion.div>
              </Suspense>
            }
          />

          <Route
            path="/admin"
            element={
              <Suspense fallback={<LoadingFullscreen />}>
                <ProtectedRoute roleRequired={'editor'}>
                  <motion.div
                    key={location.pathname}
                    variants={pageTransitionVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                  >
                    <AdminPanel />
                  </motion.div>
                </ProtectedRoute>
              </Suspense>
            }
          />

          <Route
            path="*"
            element={
              <Suspense fallback={<LoadingFullscreen />}>
                <motion.div
                  key={location.pathname}
                  variants={pageTransitionVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  <NotFound />
                </motion.div>
              </Suspense>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedRouter;
