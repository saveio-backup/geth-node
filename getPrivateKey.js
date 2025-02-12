/**
 * 1. Run `npm install keythereum` in an empty directory.
 * 2. Save this script to a file named `main.js`.
 * 3. Run `node main.js` in the same directory.
 */

 let keythereum = require("keythereum");

 // the keystore address
 let address = "0x927BAEF0a6ae6CdB4d2e2c01BacCAe2A963B60Ca";
 
 // will find the ./keystore/[UTC-time-address file]
 let datadir = "./dev-chain";
 
 // the password if you use --password option
 let password = "pwd"; //
 
 var keyObject = keythereum.importFromFile(address, datadir);
 var privateKey = keythereum.recover(password, keyObject);
 
 // will output the private key
 console.log(privateKey.toString("hex"));
 