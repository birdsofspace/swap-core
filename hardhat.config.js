const { HardhatUserConfig } = require("hardhat/config");
require("@nomicfoundation/hardhat-toolbox");
require("@truffle/dashboard-hardhat-plugin");

/** @type import('hardhat/config').HardhatUserConfig */

const config = {
  mocha: {
    timeout: 10000000000
  },
  solidity: {
    compilers: [
       {
          version: '0.5.16',
          settings: {
             optimizer: {
                enabled: true,
                runs: 200,
             },
          },
       },
       {
          version: '0.6.6',
          settings: {
             optimizer: {
                enabled: true,
                runs: 200,
             },
          },
       },
    ],
 },
  networks: {
    truffle: {
      url: "http://localhost:24012/rpc",
      allowUnlimitedContractSize:true,
    }
  }
}

module.exports = config;