const Connection = require('@solana/web3.js').Connection;
const SolanaQuery = require("./index");

const MAINNET_ENDPOINT_URL = 'https://api.mainnet-beta.solana.com';

// Using Solana Query with Web3.Connection is input parameter
async function showBlockInfo() {
  return new Promise(function(resolve, reject) {
    let web3 = new Connection(MAINNET_ENDPOINT_URL);
    let query = new SolanaQuery(web3);
    query.getEpochInfo(function(error, response) {
      if (error) {
        console.error("showBlockInfo() return error", error);
        return resolve(null);
      }
      console.log("Epoch Information:", JSON.stringify(response));
      resolve(true);
    });
  });
}

// Using Solana Query with Endpoint RPC is input parameter
async function showBalance() {
  return new Promise(function(resolve, reject) {
    let address = "2ojv9BAiHUrvsm9gxDe7fJSzbNZSJcxZvf8dqmWGHG8S";
    let query = new SolanaQuery(MAINNET_ENDPOINT_URL);
    query.getBalance(address, function(error, response) {
      if (error) {
        console.error("showBalance() return error", error);
        return resolve(null);
      }
      console.log("Balance of " + address + ":", response.value, "Lamports");
      resolve(true);
    });
  });
}

async function test() {
  await showBlockInfo();

  await showBalance();
}
test();