import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import PostCard from './PostCard';
import CommentCard from './CommentCard';

function PostDetails() {
  // ... (el resto del código permanece igual)

  return (
    <Container className="my-5">
      {post && <PostCard post={post} showFullContent={true} />}

      <h3 className="mb-4 mt-5">Comments</h3>
      <Row xs={1} md={2} className="g-4">
        {comments.map(comment => (
          <Col key={comment.id}>
            <CommentCard comment={comment} />
          </Col>
        ))}
      </Row>

      <div className="text-center mt-4">
        <Link to="/" className="btn btn-primary">Back to Posts</Link>
      </div>
    </Container>
  );
}

export default PostDetails;