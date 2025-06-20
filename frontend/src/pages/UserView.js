import React, { useState } from 'react';
import axios from 'axios';

export default function UserView() {
  const [form, setForm] = useState({ userId: '', description: '', category: '', isAnonymous: false });

  const submit = async () => {
    await axios.post('http://localhost:5000/api/complaints', form);
    alert('Submitted');
  };

  return (
    <div style={{ padding: 30 }}>
      <h2>User - Submit Complaint</h2>
      <input placeholder="User ID" onChange={e => setForm({ ...form, userId: e.target.value })} /><br />
      <input placeholder="Category" onChange={e => setForm({ ...form, category: e.target.value })} /><br />
      <textarea placeholder="Description" onChange={e => setForm({ ...form, description: e.target.value })} /><br />
      <label><input type="checkbox" onChange={e => setForm({ ...form, isAnonymous: e.target.checked })}/> Anonymous</label><br />
      <button onClick={submit}>Submit</button>
    </div>
  );
}
