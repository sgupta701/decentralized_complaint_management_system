#!/bin/bash

# === Set env for Org1 ===
export CORE_PEER_LOCALMSPID="Org1MSP"
export CORE_PEER_MSPCONFIGPATH=${PWD}/organizations/peerOrganizations/org1.example.com/users/Admin@org1.example.com/msp
export CORE_PEER_ADDRESS=localhost:7051

# === Package chaincode ===
peer lifecycle chaincode package complaint.tar.gz --path ../chaincode/complaint-javascript/ --lang node --label complaint_1

# === Install on Org1 ===
peer lifecycle chaincode install complaint.tar.gz

# === Set env for Org2 ===
export CORE_PEER_LOCALMSPID="Org2MSP"
export CORE_PEER_MSPCONFIGPATH=${PWD}/organizations/peerOrganizations/org2.example.com/users/Admin@org2.example.com/msp
export CORE_PEER_ADDRESS=localhost:9051

# === Install on Org2 ===
peer lifecycle chaincode install complaint.tar.gz

echo "✅ Chaincode packaged and installed on both orgs."
