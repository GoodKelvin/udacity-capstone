
# Real Estate Marketplace

The capstone will build upon the knowledge gained in the course in order to build a decentralized housing product.

This project is implemented Tracable ERC721 Mintable Contract that is compatible with OpenSea market place listing the tokens in the market place and purchasing them using different account. This project simulates real estate market place.



## Version



`Truffle v5.0.8 (core: 5.0.8)`



`Solidity - ^0.5.5 (solc-js)`









## Install

`npm install`



##  Zokrates



### Run ZoKrates

`docker run -v <path to your project folder>:/home/zokrates/code -ti zokrates/zokrates /bin/bash`



### Create <program  name>.code

Create a file square.code

```

def main(private field a, field b) -> (field):

field result = if a * a == b then 1 else 0 fi

return result



```



### Compile the program

`cd ~/code/zokrates/code/square`

`zokrates compile -i square.code`





### Generate trusted Setup



`zokrates setup`



### Compute Witness

Pass answer to square.code as arguments (3^2 == 9) and it generates a witness file



`zokrates compute-witness -a 3 9`




### Generate Proof

Generate proof based on the above witness. A proof.json file is generated in this step



`zokrates generate-proof`




### Step 8: Export the Verifier.sol

Create smart contract named verifier.sol



`zokrates export-verifier`

### Copy or Move Verifier.sol to  eth-contract




`mv verifier.sol ../eth-contracts/contracts/`



## Compile contracts



`cd eth-contract`



`truffle compile`



## Deploy to Rinkeby



`cd eth-contracts`



`truffle migrate --network rinkeby`



## Contract Addresses

```

Contract Owner: https://rinkeby.etherscan.io/address/0x3eec6356839dda3c24f3f54c196c1b7b0863db94

Verifier: https://rinkeby.etherscan.io/address/0xA5F001B88FBdB973fFb9FD6685A46491293eB3F2

SolnSquareVerifier: https://rinkeby.etherscan.io/address/0xA999aa69C16361FF77c636dE94853Eb756a41e59

```

## Properties and Transaction Activities
https://testnets.opensea.io/assets/0xa999aa69c16361ff77c636de94853eb756a41e59/4
https://testnets.opensea.io/assets/0xa999aa69c16361ff77c636de94853eb756a41e59/2
https://testnets.opensea.io/assets/0xa999aa69c16361ff77c636de94853eb756a41e59/3
https://testnets.opensea.io/assets/0xa999aa69c16361ff77c636de94853eb756a41e59/1
https://testnets.opensea.io/assets/0xa999aa69c16361ff77c636de94853eb756a41e59/5






## Mint Token at Rinkeby network

  Mint each (x) times to generate a new token that gets listed on OpenSea via the contract address.


`cd minter`



`npm install`



`touch .env`



`Open .env file and paste KEY=YOUR_INFURA_KEY_VALUE`



`node minter.js`



## Test (Ganache Desktop)



`cd eth-contract`



`truffle test`





## Project Resources



* [Remix - Solidity IDE](https://remix.ethereum.org/)

* [Visual Studio Code](https://code.visualstudio.com/)

* [Truffle Framework](https://truffleframework.com/)

* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)

* [Open Zeppelin ](https://openzeppelin.org/)

* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)

* [Docker](https://docs.docker.com/install/)

* [ZoKrates](https://github.com/Zokrates/ZoKrates)
