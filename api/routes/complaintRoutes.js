const express = require('express');
const router = express.Router();
const complaintController = require('../controllers/complaintController');

router.post('/', complaintController.submitComplaint);

router.get('/', complaintController.getAllComplaints);

// ✔️ POST /api/complaints/assign
router.post('/assign', complaintController.assignComplaint);

// ✔️ POST /api/complaints/update
router.post('/update', complaintController.updateComplaint);

// ✔️ GET /api/complaints/user/:userId
router.get('/user/:userId', complaintController.getComplaintsByUser);

module.exports = router;
