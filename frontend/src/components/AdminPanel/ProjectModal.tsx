/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState, useEffect } from 'react';
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
    name: project?.name || '',
    description: project?.description || '',
    subtitle: project?.subtitle || '',
    images: project?.images || [],
  });
  const [files, setFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (project) {
      setPreviewUrls(getProjectImageUrls(project));
    }
  }, [project]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files);
      setFiles((prevFiles) => [...prevFiles, ...fileArray]);

      const fileUrls = fileArray.map((file) => URL.createObjectURL(file));
      setPreviewUrls((prevUrls) => [...prevUrls, ...fileUrls]);
    }
  };
  const removeFile = async (index: number) => {
    const fileToRemove = files[index];
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);

    const updatedUrls = [...previewUrls];
    updatedUrls.splice(index, 1);
    setPreviewUrls(updatedUrls);

    if (fileToRemove.name) {
      try {
        await deleteProjectImage(project?._id, fileToRemove.name);
      } catch (error) {
        console.error('Error deleting project image:', error);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!project || !project._id) {
      console.error('Project ID is undefined. Cannot update the project.');
      setLoading(false);
      return;
    }

    const formData = new FormData();
    files.forEach((file) => {
      formData.append('images', file);
    });

    formData.append('name', projectData.name || '');
    formData.append('subtitle', projectData.subtitle || '');
    formData.append('description', projectData.description || '');

    try {
      if (project) {
        await updateProject(project._id, formData);
        throw new Error('project._id BURADA HATA VAR');
      } else {
        await createProject(formData);
      }
      setLoading(false);
      onProjectUpdate();
      onClose();
    } catch (error) {
      setLoading(false);
      console.error('Error updating or creating project:', error);
    }
  };

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
                disabled={loading}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {loading ? 'Kaydediliyor...' : 'Kaydet'}
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
