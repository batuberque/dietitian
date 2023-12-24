/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { fetchProjects, deleteProject, IProject } from '../../services/queries';
import EditProjectForm from './EditProjectForm';

const AdminPanel: React.FC = () => {
  const {
    data: projects,
    isLoading,
    isError,
    refetch,
  } = useQuery(['projects'], fetchProjects);
  const deleteMutation = useMutation(deleteProject, {
    onSuccess: () => refetch(),
  });

  const [selectedProject, setSelectedProject] = useState<IProject | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleSelectProject = (project: IProject) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleAddNewProject = () => {
    const newProject: IProject = {
      _id: '',
      name: '',
      description: '',
      images: [],
      subtitle: '',
    };
    setSelectedProject(newProject);
    setIsModalOpen(true);
  };

  const handleDeleteProject = (projectId: string) => {
    deleteMutation.mutate(projectId);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading projects</div>;

  return (
    <div className="container mx-auto p-4 pt-10">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <button
        onClick={handleAddNewProject}
        className="bg-gray-500 text-white px-3 py-1 rounded mb-4"
      >
        Proje Ekle
      </button>
      {isModalOpen && selectedProject && (
        <EditProjectForm
          project={selectedProject}
          onClose={() => {
            setIsModalOpen(false);
            refetch();
          }}
        />
      )}
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
                onClick={() => handleSelectProject(project)}
              >
                Düzenle
              </button>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded"
                onClick={() => handleDeleteProject(project._id)}
              >
                Sil
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
