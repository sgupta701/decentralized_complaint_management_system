import React, { useState } from 'react';
import UserView from './pages/UserView';
import AdminView from './pages/AdminView';
import DeptView from './pages/DeptView';

export default function App() {
  const [role, setRole] = useState('');

  if (!role) {
    return (
      <div style={{ padding: 50 }}>
        <h2>Select Role</h2>
        <button onClick={() => setRole('user')}>User</button>
        <button onClick={() => setRole('admin')}>Admin</button>
        <button onClick={() => setRole('dept')}>Department</button>
      </div>
    );
  }

  return (
    <>
      {role === 'user' && <UserView />}
      {role === 'admin' && <AdminView />}
      {role === 'dept' && <DeptView />}
    </>
  );
}
