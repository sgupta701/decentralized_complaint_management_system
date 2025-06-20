const express = require('express');
const router = express.Router();
const complaintController = require('../controllers/complaintController');

router.post('/submit', complaintController.submitComplaint);
router.post('/assign', complaintController.assignComplaint);
router.post('/update', complaintController.updateComplaint);
router.get('/all', complaintController.getAllComplaints);
router.get('/user/:userId', complaintController.getComplaintsByUser);

module.exports = router;
