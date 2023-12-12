import axiosInstance from './axios';

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
