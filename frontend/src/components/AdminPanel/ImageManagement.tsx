/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';

interface ImageManagementProps {
  images: string[];
  onAddImage: (imageFile: File) => void;
  onDeleteImage: (imageUrl: string) => void;
}

const ImageManagement: React.FC<ImageManagementProps> = ({
  images,
  onAddImage,
  onDeleteImage,
}) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const isValidImageFile = (file: File): boolean => {
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    return validTypes.includes(file.type);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const imageFile = event.target.files[0];

      if (isValidImageFile(imageFile)) {
        setSelectedImage(imageFile);
      } else {
        alert('Lütfen bir PNG, JPG veya JPEG dosyası seçin.');
      }
    }
  };

  const handleUploadImage = () => {
    if (selectedImage) {
      onAddImage(selectedImage);
      setSelectedImage(null);
    }
  };

  return (
    <div>
      <div className="mb-4">
        <input
          type="file"
          accept=".jpg, .jpeg, .png"
          onChange={handleImageChange}
          className="shadow border rounded py-2 px-3 mr-2 text-gray-700"
        />
        <button
          onClick={handleUploadImage}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          disabled={!selectedImage}
        >
          Upload Image
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="border rounded overflow-hidden shadow-lg">
            <img src={image} alt={`Image ${index}`} className="w-full" />
            <div className="px-4 py-2">
              <button
                onClick={() => onDeleteImage(image)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageManagement;
