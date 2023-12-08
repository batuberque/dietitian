import axiosInstance from './axios';
export interface Post {
  _id?: string;
  title: string;
  content: string;
  createdAt?: Date;
}

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await axiosInstance.get<Post[]>('/post');
  return response.data;
};

export const fetchPostById = async (postId: string): Promise<Post> => {
  const response = await axiosInstance.get<Post>(`/post/${postId}`);
  return response.data;
};

export const addPost = async (post: Post): Promise<Post> => {
  const response = await axiosInstance.post<Post>('/post', post);
  return response.data;
};

export const updatePost = async (
  postId: string,
  updatedData: Partial<Post>
): Promise<Post> => {
  const response = await axiosInstance.patch<Post>(
    `/post/${postId}`,
    updatedData
  );
  return response.data;
};

export const deletePost = async (postId: string): Promise<void> => {
  await axiosInstance.delete(`/post/${postId}`);
};
