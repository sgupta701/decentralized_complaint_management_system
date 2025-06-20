const { getContract } = require('../fabric/gateway');

module.exports = {
  submitComplaint: async (req, res) => {
    try {
      const { userId, description, category, isAnonymous } = req.body;
      const { contract, gateway } = await getContract();
      const result = await contract.submitTransaction(
        'submitComplaint',
        userId,
        description,
        category,
        isAnonymous.toString()
      );
      await gateway.disconnect();
      res.json({ message: 'Complaint submitted', result: result.toString() });
    } catch (error) {
      res.status(500).json({ error: 'Failed to submit' });
    }
  },
  assignComplaint: async (req, res) => {
    try {
      const { complaintId, departmentId } = req.body;
      const { contract, gateway } = await getContract();
      await contract.submitTransaction('assignComplaint', complaintId, departmentId);
      await gateway.disconnect();
      res.json({ message: 'Assigned' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to assign' });
    }
  },
  updateComplaint: async (req, res) => {
    try {
      const { complaintId, status, remarks } = req.body;
      const { contract, gateway } = await getContract();
      await contract.submitTransaction('updateComplaintStatus', complaintId, status, remarks);
      await gateway.disconnect();
      res.json({ message: 'Updated' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to update' });
    }
  },
  getAllComplaints: async (req, res) => {
    try {
      const { contract, gateway } = await getContract();
      const result = await contract.evaluateTransaction('getAllComplaints');
      await gateway.disconnect();
      res.json(JSON.parse(result.toString()));
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch' });
    }
  }
};
