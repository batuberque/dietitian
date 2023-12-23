import { useParams } from 'react-router-dom';
import translation from '../transition';
import { projects } from './projects';
import NotFound from '../NotFound/NotFound';
import ImageSlider from '../../lib/ui/imageSlider';

type Params = {
  id: string;
};

const ProjectDetail: React.FC = () => {
  const { id } = useParams<Params>();
  const project = projects.find((p) => p.id === parseInt(id as string));

  if (!project) {
    return <NotFound />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 mt-10">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-md overflow-hidden">
        <ImageSlider images={project.images} />
        <div className="p-6">
          <h2 className="font-bold text-3xl text-gray-800 mb-3">
            {project.name}
          </h2>
          <p className="text-gray-600 text-base">{project.description}</p>
          <p className="text-gray-600 text-base">{project.subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default translation(ProjectDetail);
