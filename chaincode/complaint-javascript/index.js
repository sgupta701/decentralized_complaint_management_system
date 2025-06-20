'use strict';

const { Contract } = require('fabric-contract-api');

class ComplaintContract extends Contract {
  async initLedger(ctx) {
    console.log('🔰 Ledger initialized');
    return;
  }

  async submitComplaint(ctx, complaintId, user, message, isAnonymous) {
    const complaint = {
      complaintId,
      user,
      message,
      isAnonymous,
      status: 'Submitted',
      assignedTo: '',
      updates: [],
      timestamp: new Date().toISOString(),
    };
    await ctx.stub.putState(complaintId, Buffer.from(JSON.stringify(complaint)));
    return JSON.stringify(complaint);
  }

  async assignComplaint(ctx, complaintId, department) {
    const complaintJSON = await ctx.stub.getState(complaintId);
    if (!complaintJSON || complaintJSON.length === 0) {
      throw new Error(`Complaint ${complaintId} does not exist`);
    }
    const complaint = JSON.parse(complaintJSON.toString());
    complaint.status = 'Assigned';
    complaint.assignedTo = department;
    await ctx.stub.putState(complaintId, Buffer.from(JSON.stringify(complaint)));
    return JSON.stringify(complaint);
  }

  async updateComplaint(ctx, complaintId, updateMessage) {
    const complaintJSON = await ctx.stub.getState(complaintId);
    if (!complaintJSON || complaintJSON.length === 0) {
      throw new Error(`Complaint ${complaintId} does not exist`);
    }
    const complaint = JSON.parse(complaintJSON.toString());
    complaint.updates.push({
      message: updateMessage,
      timestamp: new Date().toISOString(),
    });
    await ctx.stub.putState(complaintId, Buffer.from(JSON.stringify(complaint)));
    return JSON.stringify(complaint);
  }

  async resolveComplaint(ctx, complaintId) {
    const complaintJSON = await ctx.stub.getState(complaintId);
    if (!complaintJSON || complaintJSON.length === 0) {
      throw new Error(`Complaint ${complaintId} does not exist`);
    }
    const complaint = JSON.parse(complaintJSON.toString());
    complaint.status = 'Resolved';
    await ctx.stub.putState(complaintId, Buffer.from(JSON.stringify(complaint)));
    return JSON.stringify(complaint);
  }

  async queryComplaint(ctx, complaintId) {
    const complaintJSON = await ctx.stub.getState(complaintId);
    if (!complaintJSON || complaintJSON.length === 0) {
      throw new Error(`Complaint ${complaintId} does not exist`);
    }
    return complaintJSON.toString();
  }
}

module.exports = ComplaintContract;
