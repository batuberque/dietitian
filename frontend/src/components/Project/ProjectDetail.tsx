/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { useParams } from 'react-router-dom';
import translation from '../transition';
import { projects } from './projects';
import NotFound from '../NotFound/NotFound';
import ImageSlider from '../../lib/ui/imageSlider';
import { useEffect, useState } from 'react';
import { IProject, fetchProjectById } from '../../services/queries';
import axiosInstance from '../../services/axios';

type Params = {
  id: string;
};

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string | undefined }>();
  const [project, setProject] = useState<IProject | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProject = async () => {
      try {
        const fetchedProject = await fetchProjectById(id);
        const updatedImages = fetchedProject.images.map(
          (image) => `${axiosInstance.defaults.baseURL}/${image}`
        );
        setProject({ ...fetchedProject, images: updatedImages });
        setIsLoading(false);
      } catch (err) {
        setError('Project could not be fetched');
        setIsLoading(false);
      }
    };

    loadProject();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
