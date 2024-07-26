import React from 'react';
import { Card } from 'react-bootstrap';

function CommentCard({ comment }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Body>
        <Card.Title>{comment.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{comment.email}</Card.Subtitle>
        <Card.Text>{comment.body}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CommentCard;