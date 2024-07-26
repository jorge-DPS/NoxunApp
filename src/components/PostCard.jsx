import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function PostCard({ post, showFullContent = false }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>
          {showFullContent ? post.body : `${post.body.substring(0, 100)}...`}
        </Card.Text>
        {!showFullContent && (
          <Link to={`/post/${post.id}`} className="btn btn-primary">
            Read More
          </Link>
        )}
      </Card.Body>
    </Card>
  );
}

export default PostCard;