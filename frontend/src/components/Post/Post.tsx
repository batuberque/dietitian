import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  Post,
  fetchPosts,
  addPost,
  updatePost,
  deletePost,
} from '../../services/queries';

const Post: React.FC = () => {
  const queryClient = useQueryClient();
  const [newPost, setNewPost] = useState({ title: '', content: '' });
  const [editingPost, setEditingPost] = useState<Post | null>(null);

  const { data: post, isLoading } = useQuery(['post'], fetchPosts);

  const addMutation = useMutation(addPost, {
    onSuccess: () => {
      void queryClient.invalidateQueries(['post']);
      setNewPost({ title: '', content: '' });
    },
  });

  const updateMutation = useMutation(updatePost, {
    onSuccess: () => {
      void queryClient.invalidateQueries(['post']);
      setEditingPost(null);
    },
  });

  const deleteMutation = useMutation(deletePost, {
    onSuccess: () => queryClient.invalidateQueries(['post']),
  });

  const handleAddOrUpdatePost = () => {
    if (editingPost) {
      updateMutation.mutate({ postId: editingPost._id!, updatedData: newPost });
    } else {
      addMutation.mutate(newPost);
    }
  };

  const handleEditPost = (post: Post) => {
    setEditingPost(post);
    setNewPost({ title: post.title, content: post.content });
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        value={newPost.title}
        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Content"
        value={newPost.content}
        onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
      />
      <button onClick={handleAddOrUpdatePost}>
        {editingPost ? 'Update Post' : 'Add Post'}
      </button>

      {post?.map((post) => (
        <div key={post._id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <button onClick={() => handleEditPost(post)}>Edit</button>
          <button onClick={() => deleteMutation.mutate(post._id!)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Post;
