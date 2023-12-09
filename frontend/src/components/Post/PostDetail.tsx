import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Post } from 'src/services/queries';

const PostDetail: React.FC = () => {
  const { postId } = useParams();
  const [post, setPost] = useState<Post | null>(null);

  console.log('postId', postId);

  useEffect(() => {
    if (postId) {
      //   fetchPostById(postId).then(setPost);
    }
  }, [postId]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default PostDetail;
