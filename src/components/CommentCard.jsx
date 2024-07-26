import React from 'react';
import { Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

function CommentCard({ comment }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
    <Card className="h-100 shadow-sm">
      <Card.Body>
        <Card.Title>{comment.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{comment.email}</Card.Subtitle>
        <Card.Text>{comment.body}</Card.Text>
      </Card.Body>
    </Card>
    </motion.div>
  );
}

export default CommentCard;