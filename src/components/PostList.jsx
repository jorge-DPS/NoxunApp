// src/components/PostList.jsx
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SearchBar from './SearchBar';
import Pagination from './Pagination';
import PostCard from './PostCard';
import UserSelect from './UserSelect';

function PostList() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [totalPosts, setTotalPosts] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState('');

  useEffect(() => {
    fetchPosts();
  }, [currentPage, searchTerm, selectedUser]);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      let url = `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${postsPerPage}`;
      if (searchTerm) {
        url += `&q=${searchTerm}`;
      }
      if (selectedUser) {
        url += `&userId=${selectedUser}`;
      }
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Something went wrong');
      }
      const data = await response.json();
      setPosts(data);
      setTotalPosts(Number(response.headers.get('X-Total-Count')));
      setError(null);
    } catch (error) {
      setError('Failed to fetch posts. Please try again later.');
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handleUserSelect = (userId) => {
    setSelectedUser(userId);
    setCurrentPage(1);
  };

  if (loading) return <div className="text-center mt-5">Loading...</div>;
  if (error) return <div className="text-center mt-5 text-danger">{error}</div>;

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">JSONPlaceholder Posts</h1>
      <Row className="mb-3">
        <Col md={6}>
          <SearchBar onSearch={handleSearch} />
        </Col>
        <Col md={6}>
          <UserSelect onUserSelect={handleUserSelect} selectedUserId={selectedUser} />
        </Col>
      </Row>
      <Row xs={1} md={2} lg={3} className="g-4 mb-4">
        {posts.map(post => (
          <Col key={post.id}>
            <PostCard post={post} />
          </Col>
        ))}
      </Row>
      <Pagination 
        currentPage={currentPage}
        totalPages={Math.ceil(totalPosts / postsPerPage)}
        onPageChange={handlePageChange}
      />
    </Container>
  );
}

export default PostList;