/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from './axios';
import { useMutation } from '@tanstack/react-query';

// EMAİL QUERIES
export interface Email {
  email: string;
  subject: string;
  message: string;
}

export const fetchEmails = async (): Promise<Email[]> => {
  const response = await axiosInstance.get<Email[]>('/emails');
  return response.data;
};

export const sendEmail = async (emailData: Email): Promise<string> => {
  const response = await axiosInstance.post<string>('/contact', emailData);
  return response.data;
};

export const deleteEmail = async (email: string): Promise<string> => {
  const response = await axiosInstance.delete<string>(`/${email}`);
  return response.data;
};

// USER QUERIES
export interface LoginResponse {
  role: string;
  username: string;
  accessToken: string;
}

interface User {
  username: string;
  password: string;
}

export const useLoginUser = () => {
  return useMutation(
    async ({ username, password }: User): Promise<LoginResponse> => {
      const response = await axiosInstance.post<LoginResponse>('/auth/login', {
        username,
        password,
      });
      return response.data;
    }
  );
};

// PROJECT QUERIES
export interface IProject {
  _id: string;
  name: string;
  images: string[];
  description?: string;
  subtitle?: string;
  [key: string]: any;
}

export const fetchProjects = async (): Promise<IProject[]> => {
  const response = await axiosInstance.get<IProject[]>('/project');
  return response.data;
};

export const addProject = async (projectData: IProject): Promise<IProject> => {
  const formData = new FormData();
  for (const key in projectData) {
    if (Array.isArray(projectData[key])) {
      (projectData[key] as string[]).forEach((item) =>
        formData.append(key, item)
      );
    } else if (projectData[key] !== undefined) {
      formData.append(key, projectData[key]);
    }
  }

  const response = await axiosInstance.post<IProject>('/project', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};

export const updateProject = async (
  projectId: string,
  projectData: IProject
): Promise<IProject> => {
  const formData = new FormData();
  Object.keys(projectData).forEach((key) => {
    if (key === 'images' && Array.isArray(projectData.images)) {
      projectData.images.forEach((image) => formData.append('images', image));
    } else {
      formData.append(key, projectData[key]);
    }
  });

  const response = await axiosInstance.put<IProject>(
    `/project/${projectId}`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );

  return response.data;
};

export const deleteProject = async (projectId: string): Promise<void> => {
  await axiosInstance.delete(`/project/${projectId}`);
};
