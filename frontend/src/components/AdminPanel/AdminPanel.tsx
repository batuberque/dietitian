/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchProjects, deleteProject, IProject } from '../../services/queries';
import ProjectModal from './ProjectModal';
import { LoadingFullscreen } from '../Loading/LoadingComponent';

const AdminPanel: React.FC = () => {
  const {
    data: projects,
    isLoading,
    isError,
    refetch,
  } = useQuery<IProject[], Error>(['projects'], fetchProjects);
  const [selectedProject, setSelectedProject] = useState<IProject | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = (project: IProject | null) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    await deleteProject(id);
    refetch();
  };

  if (isLoading) return <LoadingFullscreen />;
  if (isError) return <p>Error loading projects</p>;

  return (
    <div className="container mx-auto p-4 pt-10">
      <h1 className="text-2xl font-bold mb-4 pt-10">Admin Panel</h1>
      <button
        className="bg-gray-500 text-white px-3 py-1 rounded mb-4"
        onClick={() => openModal(null)}
      >
        Proje Ekle
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects?.map((project) => (
          <div key={project._id} className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-bold">{project.name}</h2>
            {project.images[0] && (
              <img
                src={`http://localhost:3005/${project.images[0]}`}
                alt={`Preview of ${project.name}`}
                className="w-full h-32 object-cover rounded mt-2"
              />
            )}
            <p className="text-sm mt-2">{project.description}</p>
            <div className="flex justify-between items-center mt-4">
              <button
                className="bg-blue-500 text-white px-3 py-1 rounded"
                onClick={() => openModal(project)}
              >
                Düzenle
              </button>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded"
                onClick={() => handleDelete(project._id)}
              >
                Sil
              </button>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setIsModalOpen(false)}
          onProjectUpdate={refetch}
        />
      )}
    </div>
  );
};

export default AdminPanel;
