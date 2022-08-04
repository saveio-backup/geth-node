/**
 * 1. Run `npm install keythereum` in an empty directory.
 * 2. Save this script to a file named `main.js`.
 * 3. Run `node main.js` in the same directory.
 */

 let keythereum = require("keythereum");

 // the keystore address
 let address = "0xd369b085e8907cBa039dD2BFA7b32E31a43273D3";
 
 // will find the ./keystore/[UTC-time-address file]
 let datadir = "./dev-chain";
 
 // the password if you use --password option
 let password = "pwd"; //
 
 var keyObject = keythereum.importFromFile(address, datadir);
 var privateKey = keythereum.recover(password, keyObject);
 
 // will output the private key
 console.log(privateKey.toString("hex"));
 