const { Suite } = require("benchmark");
const { createCipher, encrypt, decrypt } = require("aes256");
const Instance = require('neboris');

const key = "8dbbba31e2d004091c0db20de4cd731d9d07de06611e9db6ec995e60ff59c331";
const phrase = "Hello World!";
const buffer = Buffer.from(phrase);

new Suite()
.add("aes256", async () => {
    const aes256 = createCipher(key);
    
    const encryptedText = aes256.encrypt(phrase);
    aes256.decrypt(encryptedText);

    const encryptBuffer = aes256.encrypt(buffer);
    aes256.decrypt(encryptBuffer);
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
