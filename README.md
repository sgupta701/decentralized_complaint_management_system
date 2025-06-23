# 🛠️ Decentralized Complaint Management System (DCMS)

This project is a full-stack web application built using Hyperledger Fabric, React.js, and Node.js, designed to offer a secure, transparent, and role-based complaint resolution system using blockchain technology.

In many organizations, complaint systems lack transparency, are vulnerable to tampering, and often operate in silos. Our system solves this by using a blockchain ledger to record each complaint and its state changes immutably — so no complaint can be altered or deleted once submitted.

---

## 🛠️ Features

- 🔐 **User Role**

    - Can submit a new complaint (optionally anonymously)
    - Complaint data (ID, description, category, timestamp) is recorded immutably on the blockchain
    - Can view their own complaints and their current status

- 🧑‍💼 **Admin Role**

    - Can view all complaints
    - Can assign complaints to specific departments
    - Acts as a bridge between users and the resolution teams

- 🏢 **Department Role**

    - Can see complaints assigned to them
    - Can update the complaint status (e.g., In Progress, Resolved) and add remarks
    - Their actions are logged on-chain to maintain traceability

---

## 📂 Project Structure

```
decentralized-complaint-system/
├── api/                     # Backend Node.js server
│   ├── controllers/         # Complaint handling logic
│   ├── fabric/              # Gateway connection logic
│   ├── routes/              # REST API routes
│   ├── test-network/        # Copied connection-org1.json here
│   └── server.js            # Express app entry point
│
├── chaincode/               # JavaScript chaincode
│   └── complaint-javascript/
│       ├── index.js
│       └── package.json
│
├── test-network/            # Fabric test network
│   ├── configtx.yaml
│   ├── crypto-config.yaml
│   ├── deployCC.sh
│   ├── start.sh
│   └── organizations/
│       ├── ccp-generate.sh
│       └── peerOrganizations/
│           └── org1.example.com/
│               └── connection-org1.json
│
├── frontend/                # React frontend
│   ├── src/
│   │   ├── App.js
│   │   ├── pages/
│   │   │   ├── UserView.js
│   │   │   ├── AdminView.js
│   │   │   └── DeptView.js
│   └── package.json
```

---

## 🚀 How to Run

### 1. Bootstrap the Fabric Network

```bash
cd test-network
./start.sh            # Generates crypto, genesis block, and channel
./deployCC.sh         # Packages & installs chaincode
```

> Make sure `connection-org1.json` is copied to:  
> `api/test-network/connection-org1.json`

---

### 2. Run the API Server

```bash
cd api
npm install
node server.js
```

- Starts on `http://localhost:5000`
- REST endpoints:
  - `POST /api/complaints/submit`
  - `POST /api/complaints/assign`
  - `POST /api/complaints/update`
  - `GET  /api/complaints/all`

---

### 3. Run the React Frontend

```bash
cd frontend
npm install
npm start
```

- Starts on `http://localhost:3000`
- Select user/admin/department and interact with complaints.

---

## 🔐 Technologies Used

- **Hyperledger Fabric v2.5** – Permissioned Blockchain
- **Node.js** – REST API server
- **React.js** – Frontend Interface
- **Fabric SDK** – Contract interaction
- **Docker** – Containerized network
- **Express.js** – Lightweight server

---

## 🏁 Future Improvements

- Add authentication (JWT)
- Add department-specific complaint views
- Add timestamps & filters
- Deploy chaincode to cloud or remote peers

---

## 🧑‍🎓 Author: Saumya Gupta
