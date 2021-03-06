//import crypto from "crypto"
// expiresTimeInS is the expired time in second of the video
const expiresTimeInS = 3600;


export const getSignedStreamId = async (id, jwkKey) => {
  const encoder = new TextEncoder();
  const expiresIn = Math.floor(Date.now() / 1000) + expiresTimeInS
  const jwk = JSON.parse(atob(jwkKey));

  const headers = {
    alg: "RS256",
    kid: 'e2ba681940a9a49320302cacadd7bc67',
  };

  const data = {
    "sub": id,
    "kid": "e2ba681940a9a49320302cacadd7bc67",
    "exp": expiresIn,
    "accessRules": [
      {
        "type": "ip.geoip.country",
        "action": "allow",
        "country": [
          "GB"
        ]
      },
      {
        "type": "any",
        "action": "block"
      }
    ]
  };

  const token = `${objectToBase64url(headers)}.${objectToBase64url(data)}`;
  const key = await crypto.subtle.importKey(
    "jwk", jwk,
    {
      name: "RSASSA-PKCS1-v1_5",
      hash: "SHA-256",
    },
    false, ["sign"]
  );

  const signature = await crypto.subtle.sign(
    { name: "RSASSA-PKCS1-v1_5" }, key,
    encoder.encode(token)
  );


  return `${token}.${arrayBufferToBase64Url(signature)}`;

};

function arrayBufferToBase64Url(buffer) {
  return btoa(String.fromCharCode(...new Uint8Array(buffer)))
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

function objectToBase64url(payload) {
  return arrayBufferToBase64Url(
    new TextEncoder().encode(JSON.stringify(payload))
  );
}
