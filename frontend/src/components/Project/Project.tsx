import { Link, Outlet } from 'react-router-dom';
import translation from '../transition';
import { projects } from './projects';

const Project = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="max-w-7xl mx-auto mt-20 space-y-4 px-4 md:px-6">
        <h2 className="text-center text-2xl font-bold text-gray-700 mb-5 shadow-sm font-serif">
          PROJELER
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">
          {projects.map((project) => (
            <Link to={`/project/${project.id}`} key={project.id}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-700">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default translation(Project);
