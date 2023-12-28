/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState, useEffect, useCallback } from 'react';
import {
  createProject,
  updateProject,
  IProject,
  getProjectImageUrls,
  deleteProjectImage,
} from '../../services/queries';

interface ProjectModalProps {
  project: IProject | null;
  onClose: () => void;
  onProjectUpdate: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onProjectUpdate,
}) => {
  const [projectData, setProjectData] = useState<IProject>({
    name: '',
    description: '',
    subtitle: '',
    images: [],
  });
  const [files, setFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  useEffect(() => {
    if (project) {
      setProjectData(project);
      setPreviewUrls(getProjectImageUrls(project));
    } else {
      setProjectData({ name: '', description: '', subtitle: '', images: [] });
      setPreviewUrls([]);
    }
  }, [project]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      const newFiles = files.concat(selectedFiles).slice(0, 10);
      setFiles(newFiles);

      const newPreviewUrls = newFiles.map((file) => URL.createObjectURL(file));
      setPreviewUrls([...previewUrls, ...newPreviewUrls].slice(0, 10));
    }
  };

  const removeFile = async (index: number) => {
    const removedFileUrl = previewUrls[index];

    try {
      const response = await deleteProjectImage(removedFileUrl);
      if (response.status === 200) {
        const newFiles = [...files];
        newFiles.splice(index, 1);
        setFiles(newFiles);

        const newPreviewUrls = [...previewUrls];
        newPreviewUrls.splice(index, 1);
        setPreviewUrls(newPreviewUrls);
      } else {
        console.error('Server responded with an error:', response);
      }
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  };

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      if (project && project._id) {
        const updatedProjectData = {
          name: projectData.name,
          description: projectData.description,
          subtitle: projectData.subtitle,
          images: projectData.images,
        };
        await updateProject(project._id, updatedProjectData);
      } else {
        const formData = new FormData();
        formData.append('name', projectData.name);
        formData.append('description', projectData.description || '');
        formData.append('subtitle', projectData.subtitle || '');
        files.forEach((file) => formData.append('images', file));
        await createProject(formData);
      }
      onProjectUpdate();
      onClose();
    },
    [files, onClose, onProjectUpdate, project, projectData]
  );

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center p-4 mt-10">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-lg w-full mx-auto">
        {/* Scrollable content area */}
        <div className="overflow-y-auto max-h-[80vh] p-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Project Name Input */}
            <div className="mb-4">
              <label
                htmlFor="projectName"
                className="block text-sm font-medium text-gray-700"
              >
                Proje Adı:
              </label>
              <input
                id="projectName"
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                value={projectData.name}
                onChange={(e) =>
                  setProjectData({ ...projectData, name: e.target.value })
                }
              />
            </div>

            {/* Project Subtitle Input */}
            <div className="mb-4">
              <label
                htmlFor="projectSubtitle"
                className="block text-sm font-medium text-gray-700"
              >
                Alt Başlık:
              </label>
              <input
                id="projectSubtitle"
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                value={projectData.subtitle}
                onChange={(e) =>
                  setProjectData({ ...projectData, subtitle: e.target.value })
                }
              />
            </div>

            {/* Project Description Input */}
            <div className="mb-4">
              <label
                htmlFor="projectDescription"
                className="block text-sm font-medium text-gray-700"
              >
                Açıklama:
              </label>
              <textarea
                id="projectDescription"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                value={projectData.description}
                onChange={(e) =>
                  setProjectData({
                    ...projectData,
                    description: e.target.value,
                  })
                }
              />
            </div>

            {/* File Upload Input */}
            <div className="mb-4">
              <label
                htmlFor="projectImage"
                className="block text-sm font-medium text-gray-700"
              >
                Resim Yükle (Maks. 10):
              </label>
              <input
                id="projectImage"
                type="file"
                multiple
                className="mt-1 block w-full"
                onChange={handleFileChange}
              />
            </div>

            {/* Image Preview Area */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              {previewUrls.map((url, index) => (
                <div key={index} className="relative">
                  <img
                    src={url}
                    alt={`Preview ${index}`}
                    className="w-full h-32 object-cover rounded"
                  />
                  <button
                    type="button"
                    className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full"
                    onClick={() => removeFile(index)}
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Kaydet
              </button>
              {project && (
                <button
                  type="button"
                  className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => {
                    if (
                      window.confirm(
                        'Projeyi silmek istediğinizden emin misiniz?'
                      )
                    )
                      onClose();
                  }}
                >
                  Sil
                </button>
              )}
            </div>
          </form>
        </div>
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="mt-4 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Kapat
        </button>
      </div>
    </div>
  );
};

export default ProjectModal;
