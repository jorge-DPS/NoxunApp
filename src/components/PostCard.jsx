import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function PostCard({ post, showFullContent = false }) {
  return (
    <>
    
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Card className="h-100 shadow-sm">
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>
            {showFullContent ? post.body : `${post.body.substring(0, 100)}...`}
          </Card.Text>
          {!showFullContent && (
            <Link to={`/post/${post.id}`} className="btn btn-primary">
              Leer mas...
            </Link>
          )}
        </Card.Body>
      </Card>
    </motion.div>
    </>

  );
}

export default PostCard;