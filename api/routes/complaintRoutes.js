const express = require('express');
const router = express.Router();
const complaintController = require('../controllers/complaintController');

router.post('/', complaintController.submitComplaint);
router.get('/', complaintController.getAllComplaints);
router.post('/assign', complaintController.assignComplaint);
router.post('/update', complaintController.updateComplaint);
router.get('/user/:userId', complaintController.getComplaintsByUser);

module.exports = router;
