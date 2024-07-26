// src/components/UserSelect.jsx
import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import './UserSelect.css'; // Asegúrate de crear este archivo CSS

function UserSelect({ onUserSelect, selectedUserId }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('No se pudieron recuperar los usuarios');
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error al recuperar usuarios:', error);
    }
  };

  return (
    <Form.Select 
      onChange={(e) => onUserSelect(e.target.value)}
      value={selectedUserId}
      className="custom-select"
    >
      <option value="">Todos los Usuarios</option>
      {users.map(user => (
        <option key={user.id} value={user.id}>{user.name}</option>
      ))}
    </Form.Select>
  );
}

export default UserSelect;