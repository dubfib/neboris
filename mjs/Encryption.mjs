import { randomBytes, createCipheriv, createHash, createDecipheriv } from 'crypto';

export default class Encryption {
    constructor(key) {
        if (typeof key !== 'string' || !key) throw new TypeError('Invalid key string paramater provided');

        this.cipher = 'aes-256-ctr';
        this.encoding = 'base64';
        this.hash = 'sha512';
        this.key = key;
    };

    encrypt(decryptedText) {
        if (typeof decryptedText !== 'string' || !decryptedText) throw new TypeError('Invalid decryptedText string parameter provided');

        const iv = randomBytes(16);
        const cipher = createCipheriv(this.cipher, createHash(this.hash).update(this.key).digest(this.encoding).slice(0, 32), iv);

        return Buffer.concat([iv, cipher.update(Buffer.from(decryptedText)), cipher.final()]).toString(this.encoding);
    };

    decrypt(encryptedText) {
        if (typeof encryptedText !== 'string' || !encryptedText) throw new TypeError('Invalid encryptedText string paramater provided');

        const input = Buffer.from(encryptedText, this.encoding);
        const decipher = createDecipheriv(this.cipher, createHash(this.hash).update(this.key).digest(this.encoding).slice(0, 32), input.subarray(0, 16));

        return decipher.update(input.subarray(16)) + decipher.final();
    };
};