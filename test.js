const { Suite } = require("benchmark");
const { encrypt, decrypt } = require("aes256");
const Instance = require('neboris');

const key = "8dbbba31e2d004091c0db20de4cd731d9d07de06611e9db6ec995e60ff59c331";
const phrase = "Hello World!";
const buffer = Buffer.from(phrase);

new Suite()
.add("aes256", async () => {
    const encryptedText = encrypt(key, phrase);
    decrypt(key, encryptedText);

    const encryptBuffer = encrypt(key, buffer);
    decrypt(key, encryptBuffer);
})
.add("neboris", async () => {
    const neboris = new Instance(key);
    const encryptedText = neboris.encrypt(phrase);
    neboris.decrypt(encryptedText);
    
    const encryptedBuffer = neboris.encrypt(buffer);
    neboris.decrypt(encryptedBuffer);
})
.on("cycle", async (event) => {
    console.log(String(event.target));
})
.on("complete", async function() {
    console.log("Fastest package is " + this.filter("fastest").map("name"));
})
.run({ "async": true });