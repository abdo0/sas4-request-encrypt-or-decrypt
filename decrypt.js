const CryptoJS = require("crypto-js");


const cipherText = 'U2FsdGVkX18CUssaVPkt1grembiGLPbxI6KARMG0h9E//8fWSX/ZOK6Zt9QT5Cm51HFn5hIl4/1r3PtP4VNvxg==';
const bytes  = CryptoJS.AES.decrypt(cipherText, 'abcdefghijuklmno0123456789012345');
const originalText = bytes.toString(CryptoJS.enc.Utf8);
console.log(originalText);
