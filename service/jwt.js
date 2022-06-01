const fetch = require('fetch');
// Importing the crypto library
const crypto = require("crypto")

// Defining the algorithm
let algorithm = "sha256"

// Defining the key
let key = "GeeksForGeeks"

// returning the digest in base64 encoding
export async function getHexDigest(request) {

    result = crypto.createHash(request.algorithm).update(request.key).digest("hex");
    console.log("In hex Encoding : \n " + result + "\n");
    return result
}
// returning the digest in base64 encoding
export async function getBase64Digest(request) {

    result = crypto.createHash(request.algorithm).update(request.key).digest("base64");
    console.log("In hex Encoding : \n " + result + "\n");
    return result
}

