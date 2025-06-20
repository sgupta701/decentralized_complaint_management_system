import React, { useState } from 'react';
import axios from 'axios';

export default function DeptView() {
  const [form, setForm] = useState({ complaintId: '', status: '', remarks: '' });

  const update = async () => {
    await axios.post('http://localhost:5000/api/complaints/update', form);
    alert('Updated');
  };

  return (
    <div style={{ padding: 30 }}>
      <h2>Department - Update Complaint</h2>
      <input placeholder="Complaint ID" onChange={e => setForm({ ...form, complaintId: e.target.value })} /><br />
      <input placeholder="Status" onChange={e => setForm({ ...form, status: e.target.value })} /><br />
      <input placeholder="Remarks" onChange={e => setForm({ ...form, remarks: e.target.value })} /><br />
      <button onClick={update}>Update</button>
    </div>
  );
}
