const SolanaQuery = require("./index");

const MAINNET_ENDPOINT_URL = 'https://api.mainnet-beta.solana.com';

async function test() {
  let query = new SolanaQuery(MAINNET_ENDPOINT_URL);

  // Get and show Epoch Info
  query.getEpochInfo(function(error, response) {
    if (error) {
      console.error("showBlockInfo() return error", error);
      return;
    }
    console.log("Epoch Information:", JSON.stringify(response));
  });

  // Get and show balance of the wallet
  let address = "2ojv9BAiHUrvsm9gxDe7fJSzbNZSJcxZvf8dqmWGHG8S";
  query.getBalance(address, function(error, response) {
    if (error) {
      console.error("showBalance() return error", error);
      return;
    }
    console.log("Balance of " + address + ":", response.value, "Lamports");
  });
}

test();