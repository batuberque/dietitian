import React, { useState, useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { addProject, updateProject, IProject } from '../../services/queries';
import ImageManagement from './ImageManagement';

interface EditProjectFormProps {
  project: IProject;
  onClose: () => void;
}

const EditProjectForm: React.FC<EditProjectFormProps> = ({
  project,
  onClose,
}) => {
  const [editedProject, setEditedProject] = useState<IProject>(project);

  const addMutation = useMutation(addProject, {
    onSuccess: () => onClose(),
  });

  const updateMutation = useMutation(updateProject, {
    onSuccess: () => onClose(),
  });

  useEffect(() => {
    setEditedProject(project);
  }, [project]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedProject({ ...editedProject, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editedProject._id) {
      updateMutation.mutate({
        projectId: editedProject._id,
        projectData: editedProject,
      });
    } else {
      addMutation.mutate(editedProject);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-lg w-full">
        <form onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Project Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={editedProject.name}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              value={editedProject.description || ''}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <ImageManagement
            images={editedProject.images}
            onAddImage={() => {}}
            onDeleteImage={() => {}}
          />
          <div className="mt-4 flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Save
            </button>
            <button
              type="button"
              onClick={onClose}
              className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProjectForm;
