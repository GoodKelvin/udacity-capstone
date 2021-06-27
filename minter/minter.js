const fs = require("fs");
const HDWalletProvider = require("truffle-hdwallet-provider");
const TruffleContract = require("truffle-contract");
const Web3 = require("web3");
require('dotenv').config();

const KEY = process.env.KEY; //infura key

const OWNER_ACCOUNT = "0x3Eec6356839dDa3c24f3F54C196C1B7B0863Db94";
const MNEMONIC =
  "prepare alone huge shop wave way mountain sun sword turtle neutral income";

const A = [
  "0x08d8746e5d7e5af9182db2e968759072c51acea498423780920d1a514c97702a",
      "0x1adc78478f1003cbfa3f2a88664849763e41c71c8e76b9bba8c5ae580cdb5a2f",
];
const B = [
  [
    "0x1c2e5d642fb007da20c17ed4faf5c16bd43c9082ea70ffd75c11d5860ed5932e",
        "0x06232369845e64063440938ee22239b243cffd8d9d3b0f79485658e5c8a60a93",
  ],
  [
    "0x0f7f08703ae94ca58e9dbf77d798a36bcfb1cea500a33cdd4bb07caf29322db4",
        "0x0402950b013669554de43eea40b5a6f0081692750668e08b5753ef9ce6fa703f",
  ],
];
const C = [
  "0x069c821fa95ec7c1cdbb72dcfafb65a8d7b49227ed410e39d7d4d4e8da84297a",
      "0x105c3743e5e87ccffd345e031a2ea2b86dee095cfacc6735e6c93fb639c26f78",
];
const INPUT = [
  "0x0000000000000000000000000000000000000000000000000000000000000009",
  "0x0000000000000000000000000000000000000000000000000000000000000001",
];

(async () => {
  let provider = new HDWalletProvider(
    MNEMONIC,
    `https://rinkeby.infura.io/v3/${KEY}`
  );
  let web3 = new Web3(provider);
  let contractAbi = JSON.parse(
    fs.readFileSync(
      "../eth-contracts/build/contracts/SolnSquareVerifier.json",
      "utf-8"
    )
  );
  let solnSquareVerifier = TruffleContract(contractAbi);
  solnSquareVerifier.setProvider(provider);

  try {
    this.contract = await solnSquareVerifier.deployed();
  } catch (e) {
    console.log(
      `Failed to create contract instance...\n${e.message}\nexit program...`
    );
    process.exit(1);
  }

  let currentTokenSupply;
  try {
    currentTokenSupply = await this.contract.totalSupply();
  } catch (e) {
    console.log(
      `Failed to get total token supply...\n${e.message}\nexit program...`
    );
    process.exit(1);
  }
  console.log(`currentTotalSupply: ${currentTokenSupply.toNumber()}`);

  let nextTokenId = parseInt(currentTokenSupply.toNumber()) + 1;
  console.log(`nextTokenId: ${nextTokenId}`);

  try {
    await this.contract.addSolution(A, B, C, INPUT, { from: OWNER_ACCOUNT });
  } catch (e) {
    console.log(`Failed to add the solution...\n${e.message}\nexit program...`);
    process.exit(1);
  }

  try {
    await this.contract.mint(OWNER_ACCOUNT, nextTokenId, {
      from: OWNER_ACCOUNT,
    });
  } catch (e) {
    console.log(`Failed to mint the token...\n${e.message}\nexit program...`);
    process.exit(1);
  }

  console.log(`TokenId ${nextTokenId} has been minted successfully!!!!`);
  process.exit(0);
})();
