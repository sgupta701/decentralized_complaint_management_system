const path = require('path');
const fs = require('fs');
const { Gateway, Wallets } = require('fabric-network');
require('dotenv').config();

async function getContract() {
  
  try {
    const ccpPath = path.resolve(__dirname, process.env.CONNECTION_PROFILE);
    const ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));

    const walletPath = path.resolve(__dirname, process.env.WALLET_PATH);
    const wallet = await Wallets.newFileSystemWallet(walletPath);

    const identity = await wallet.get('User1@org1.example.com');
    if (!identity) {
      throw new Error('❌ Identity not found in wallet');
    }

    const gateway = new Gateway();
    await gateway.connect(ccp, {
      wallet,
      identity: 'User1@org1.example.com',
      discovery: { enabled: true, asLocalhost: true }
    });

    const network = await gateway.getNetwork(process.env.CHANNEL_NAME);
    const contract = network.getContract(process.env.CHAINCODE_NAME);

    return { contract, gateway };
  } catch (error) {
    console.error('❌ Failed to get contract:', error);
    throw error;
  }
}

module.exports = { getContract };
