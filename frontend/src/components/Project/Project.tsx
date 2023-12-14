import translation from '../transition';

const projects = [
  {
    id: 1,
    name: 'Proje 1',
    image: 'project1.jpg',
    description: 'Proje 1 Açıklaması',
  },
  {
    id: 2,
    name: 'Proje 2',
    image: 'project2.jpg',
    description: 'Proje 2 Açıklaması',
  },
];

const Project = () => {
  return (
    <div className="max-w-md mx-auto mt-20">
      <h2 className="text-center text-2xl font-bold text-gray-700 mb-5 shadow-sm font-serif">
        PROJELER
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={project.image}
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
        ))}
      </div>
    </div>
  );
};

export default translation(Project);
