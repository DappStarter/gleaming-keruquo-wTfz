require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess glimpse flame suspect notice crime remember hole include process front task'; 
let testAccounts = [
"0x5113463f4f2944a7898b384a3ad8edd47fef62bb1529118277525dfa828b44d4",
"0x4aea98d2b1c6291bb3c67563b91ea8a3f4a783da1a09ace2f5c9d8fb1e915d3d",
"0x1269ba35dc7811e4e179f371254aa405cc9c2629c928e31b43f173084a7164bb",
"0x4ded12ecfa98c6cfda109b5c99ffa6488172528025821dcce9757b5ee5508f0e",
"0xb15444621414d38c39655474d613b7710168c2b70d96bf4c8867cc665f1b8cf2",
"0x5ade4ee9bc1258297a7629b78ebf2b3486f7d5dbf7e14d7cfe8d7d68845eea02",
"0x568e52d8ec9d45d556f0932b6c71b5d78a619e5abb76b8ca9d6b2ec178f446a2",
"0x3b4a0c2a7d75d9da4f96368633e009768d65ca66671a1541ff5f80359136b257",
"0xa827c742050f13672c9314e2f222bbdd8fcc5dd4838ee79b2f2f95c719f622b4",
"0x1083b9187826edf5cbe99b1d49c7d713f791ed322d6304b9b983004d6980e295"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


