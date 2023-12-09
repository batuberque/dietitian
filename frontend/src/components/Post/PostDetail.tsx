import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Post, fetchPostById } from '../../services/queries';
import { useToggle } from '../../hooks/useToggle';
import { LoadingFullscreen } from '../Loading/LoadingComponent';

const PostDetail: React.FC = () => {
  const { postId } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const { bool: loading, setTrue, setFalse } = useToggle(false);

  console.log('postId', postId);

  useEffect(() => {
    if (postId) {
      setTrue();
      fetchPostById(postId)
        .then(setPost)
        .catch((error) => {
          console.error('Error fetching post:', error);
        })
        .finally(() => setFalse());
    }
  }, [postId, setTrue, setFalse]);

  return (
    <div>
      {!post && <LoadingFullscreen loading={loading} />}
      <div>
        <h1>{post?.title}</h1>
        <p>{post?.content}</p>
      </div>
    </div>
  );
};

export default PostDetail;
