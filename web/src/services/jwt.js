import jwtDecode from 'jwt-decode';

export function parseJwtHeader(token) {
  var result;

  if ((token)) {
    try {
      var decoded = jwtDecode(token, { header: true })
      result = JSON.stringify(decoded);
    } catch (err) {
      result = 'invalid JWT Token';
    }
  }
  return result;
};
export function calculateSignature(data) {

  result = HMACSHA256(
    base64UrlEncode(header) + "." +
    base64UrlEncode(payload),
    secret)
  return result;
};
export function extractSignature(token) {

  var signature = token.split('.')[2];
  if ((signature != null) && (signature != '')) {
    return signature
  } else {
    return 'INVALID SIGNATURE'
  }
};
export function parseJwtBody(token) {
  var result;

  if ((token)) {
    try {
      var decoded = jwtDecode(token)
      result = JSON.stringify(decoded);
    } catch (err) {
      result = 'invalid JWT Token';
    }
  }
  return result;
};