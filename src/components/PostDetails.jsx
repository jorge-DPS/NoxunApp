import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import PostCard from './PostCard';
import CommentCard from './CommentCard';

function PostDetails() {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchPostAndComments();
  }, [id]);

  const fetchPostAndComments = async () => {
    setLoading(true);
    try {
      const [postResponse, commentsResponse] = await Promise.all([
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`),
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      ]);

      if (!postResponse.ok || !commentsResponse.ok) {
        throw new Error('No se pudieron recuperar los datos');
      }

      const postData = await postResponse.json();
      const commentsData = await commentsResponse.json();
      setPost(postData);
      setComments(commentsData);
      setError(null);
    } catch (error) {
      setError('Error al recuperar publicaciones y comentarios. Por favor, inténtelo de nuevo más tarde.');
      console.error('Error al recuperar publicaciones y comentarios:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Container className="text-center mt-5"><h2>Loading...</h2></Container>;
  if (error) return <Container className="text-center mt-5 text-danger"><h2>{error}</h2></Container>;
  if (!post) return <Container className="text-center mt-5"><h2>Post not found</h2></Container>;

  return (
    <Container className="my-5">
        <h3 className='text-center'>POST</h3>

      {post && <PostCard post={post} showFullContent={true} />}

      <h3 className="mb-4 mt-5 text-center">Comentarios</h3>
      <Row xs={1} md={2} className="g-4">
        {comments.map(comment => (
          <Col key={comment.id}>
            <CommentCard comment={comment} />
          </Col>
        ))}
      </Row>

      <div className="text-center mt-4">
        <Link to="/" className="btn btn-primary">Volver a posts</Link>
      </div>
    </Container>
  );
}

export default PostDetails;