import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function AdminView() {
  const [complaints, setComplaints] = useState([]);
  const [assign, setAssign] = useState({ id: '', dept: '' });

  useEffect(() => {
    axios.get('http://localhost:5000/api/complaints')
      .then(res => setComplaints(res.data));
  }, []);

  const assignNow = async () => {
    await axios.post('http://localhost:5000/api/complaints/assign', {
      complaintId: assign.id,
      departmentId: assign.dept
    });
    alert('Assigned');
  };

  return (
    <div style={{ padding: 30 }}>
      <h2>Admin - All Complaints</h2>
      {complaints.map(c => (
        <div key={c.Key}>
          <p><b>ID:</b> {c.Key}</p>
          <p>{c.Record.description}</p>
          <hr />
        </div>
      ))}
      <h3>Assign Complaint</h3>
      <input placeholder="Complaint ID" onChange={e => setAssign({ ...assign, id: e.target.value })} /><br />
      <input placeholder="Department ID" onChange={e => setAssign({ ...assign, dept: e.target.value })} /><br />
      <button onClick={assignNow}>Assign</button>
    </div>
  );
}
