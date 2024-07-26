import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import PostList from './components/PostList'
import PostDetails from './components/PostDetails'

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <h1 className="mb-4">JSONPlaceholder Posts</h1>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/post/:id" element={<PostDetails />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App