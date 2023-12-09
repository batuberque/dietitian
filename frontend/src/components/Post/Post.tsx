/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchPosts, addPost, deletePost } from '../../services/queries';
import { Link } from 'react-router-dom';

const PostComponent: React.FC = () => {
  const queryClient = useQueryClient();
  const [newPost, setNewPost] = useState({ title: '', content: '' });
  const [addedPostId, setAddedPostId] = useState<string | null>(null);

  const { data: post, isLoading } = useQuery(['post'], fetchPosts);

  const addMutation = useMutation(addPost, {
    onSuccess: (data) => {
      void queryClient.invalidateQueries(['post']);
      setNewPost({ title: '', content: '' });
      setAddedPostId(data._id);
    },
  });

  const deleteMutation = useMutation(deletePost, {
    onSuccess: () => queryClient.invalidateQueries(['post']),
  });

  const handleAddOrUpdatePost = () => {
    addMutation.mutate(newPost);
  };

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );

  return (
    <div className="flex flex-col items-center justify-center my-10">
      <div className="mb-5">
        <input
          className="p-2 border border-gray-300 rounded mr-2"
          type="text"
          placeholder="Başlık"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <input
          className="p-2 border border-gray-300 rounded"
          type="text"
          placeholder="İçerik"
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
        />
        <button
          className="p-2 bg-blue-500 text-white rounded ml-2"
          onClick={handleAddOrUpdatePost}
        >
          EKLEME BUTONU
        </button>
      </div>

      {post?.map((post) => (
        <div
          key={post._id}
          className="p-4 border border-gray-300 rounded mb-4 max-w-md h-[200px] overflow-auto"
        >
          <h3 className="text-lg font-bold truncate">{post.title}</h3>
          <p className="text-sm truncate">{post.content}</p>
          <div className="flex justify-end mt-3">
            <button className="text-blue-500 hover:text-blue-700 mr-2">
              Edit
            </button>
            <button
              className="text-red-500 hover:text-red-700"
              onClick={() => deleteMutation.mutate(post._id!)}
            >
              Delete
            </button>
          </div>
          <div>
            {addedPostId === post._id && (
              <div>
                <Link to={`/post/${post._id}`}>Post ID: {post._id}</Link>{' '}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostComponent;
