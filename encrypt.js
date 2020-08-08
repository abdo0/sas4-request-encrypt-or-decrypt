const CryptoJS = require("crypto-js");

// wrap a form into JSON object
const form = {user: 'admin', password: 'snonosystems'};

const cypData = CryptoJS.AES.encrypt(JSON.stringify(form), 'abcdefghijuklmno0123456789012345');
let payload = {payload: cypData.toString()};

console.log(payload);
