import React, { useState, useEffect } from 'react';
import ImageManagement from './ImageManagement';
import { Project } from '../Project/projects';

interface EditProjectFormProps {
  project: Project;
  onClose: () => void;
  onSave: (project: Project) => void;
}

const EditProjectForm: React.FC<EditProjectFormProps> = ({
  project,
  onClose,
  onSave,
}) => {
  const [editedProject, setEditedProject] = useState<Project>(project);

  useEffect(() => {
    setEditedProject(project);
  }, [project]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedProject({ ...editedProject, [e.target.name]: e.target.value });
  };

  const handleAddImage = (imageUrl: string) => {
    setEditedProject({
      ...editedProject,
      images: [...editedProject.images, imageUrl],
    });
  };

  const handleDeleteImage = (imageUrl: string) => {
    setEditedProject({
      ...editedProject,
      images: editedProject.images.filter((img) => img !== imageUrl),
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSave(editedProject);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-lg w-full">
        <form onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="projectName"
              className="block text-sm font-medium text-gray-700"
            >
              Proje Adı
            </label>
            <input
              type="text"
              name="name"
              value={editedProject.name}
              onChange={handleChange}
              placeholder="Proje Adı"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <ImageManagement
            images={editedProject.images}
            onAddImage={handleAddImage}
            onDeleteImage={handleDeleteImage}
          />
          <div className="mt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-3 py-2 rounded"
            >
              Kaydet
            </button>
            <button
              onClick={onClose}
              className="bg-red-500 text-white px-3 py-2 rounded ml-2"
            >
              Kapat
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProjectForm;
