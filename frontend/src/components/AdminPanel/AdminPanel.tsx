import React, { useState } from 'react';
import { projects as initialProjects, Project } from '../Project/projects';
import EditProjectForm from './EditProjectForm';

const AdminPanel: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleAddNewProject = () => {
    const newProject: Project = {
      id: Math.max(0, ...projects.map((p) => p.id)) + 1,
      name: '',
      description: '',
      images: [],
    };
    setSelectedProject(newProject);
    setIsModalOpen(true);
  };

  const handleDeleteProject = (id: number) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  const handleSaveProject = (editedProject: Project) => {
    if (projects.find((p) => p.id === editedProject.id)) {
      const updatedProjects = projects.map((p) =>
        p.id === editedProject.id ? editedProject : p
      );
      setProjects(updatedProjects);
    } else {
      setProjects([...projects, editedProject]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-4 pt-10">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <button
        onClick={handleAddNewProject}
        className="bg-green-500 text-white px-3 py-1 rounded mb-4"
      >
        Proje Ekle
      </button>
      {isModalOpen && selectedProject && (
        <EditProjectForm
          project={selectedProject}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveProject}
        />
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div key={project.id} className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-bold">{project.name}</h2>
            {project.images[0] && (
              <img
                src={project.images[0]}
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
                onClick={() => handleDeleteProject(project.id)}
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
