const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json"); // your Firebase Admin JSON

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;
