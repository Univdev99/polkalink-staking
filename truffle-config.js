const HDWalletProvider = require("@truffle/hdwallet-provider");
require('dotenv').config();

module.exports = {
    networks: {
        development: {
            host: "localhost",
            port: 7545,
            network_id: "*"
        },
        test: {
            host: "localhost",
            port: 8545,
            network_id: "*"
        },
        mainnet: {
            provider: function() {
                return new HDWalletProvider(
                    process.env.MNEMONIC,
                    process.env.INFURA_ID
                )
            },
            network_id: 1,
            gasPrice: 200000000000,
        },
        kovan: {
            provider: function() {
                return new HDWalletProvider(
                    process.env.MNEMONIC,
                    process.env.INFURA_ID
                )
            },
            network_id: 42
        }
    },

    compilers: {
        solc: {
            version: "0.6.12",
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    },

    plugins: [
        'truffle-plugin-verify'
    ],

    api_keys: {
        etherscan: process.env.ETHERSCAN_API_KEY
    }
};
